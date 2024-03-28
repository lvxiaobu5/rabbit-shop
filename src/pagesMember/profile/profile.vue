<script setup lang="ts">
import { getMemberProfileAPI, putMemberProfileAPI } from '../../services/profile'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Gender, ProfileDetail } from '@/types/member'
import { useMemberStore } from '@/stores/index'

// 个人信息，修改个人信息需要提供初始值，防止修改时出现双向绑定错误
const profile = ref({} as ProfileDetail)
// 城市数据
let fullLocationCode: [string, string, string] = ['', '', '']
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const memberStore = useMemberStore()

// 获取个人信息
const getMemberProfileData = async () => {
  const res = await getMemberProfileAPI()
  profile.value = res.result
}
// 封装上传文件函数
const uploadFile = (tempFilePath: string) => {
  // 文件上传的接口
  uni.uploadFile({
    url: '/member/profile/avatar',
    name: 'file',
    filePath: tempFilePath,
    success: (res) => {
      if (res.statusCode === 200) {
        // 更新头像
        const avatar = JSON.parse(res.data).result.avatar
        // 个人信息页的数据更新
        profile.value!.avatar = avatar
        // store里的头像更新
        memberStore.profile!.avatar = avatar
        uni.showToast({ icon: 'success', title: '更新头像成功！' })
      } else {
        uni.showToast({ icon: 'error', title: '更新头像失败！' })
      }
    },
  })
}
// 修改头像
const onAvatarChange = () => {
  // #ifdef MP-WEIXIN
  // 调用拍照/选择图片
  uni.chooseMedia({
    // 文件个数
    count: 1,
    // 文件类型（默认图片和视频，限制为仅限图片）
    mediaType: ['image'],
    success: (res) => {
      // 图片的本地路径
      const { tempFilePath } = res.tempFiles[0]
      // 上传图片
      uploadFile(tempFilePath)
    },
  })
  // #endif
  // #ifdef H5 || APP-PLUS
  uni.chooseImage({
    count: 1,
    success: (res) => {
      // 图片的本地路径
      const tempFilePath = res.tempFilePaths[0]
      // 上传图片
      uploadFile(tempFilePath)
    },
  })

  // #endif
}
// 修改性别
const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profile.value.gender = ev.detail.value as Gender
}
// 修改生日
const onBirthdayChange: UniHelper.DatePickerOnChange = (ev) => {
  profile.value.birthday = ev.detail.value
}
// 修改城市
const onFullLocationChange: UniHelper.RegionPickerOnChange = (ev) => {
  // 修改前端页面数据
  profile.value.fullLocation = ev.detail.value.join(' ')
  fullLocationCode = ev.detail.code!
}
// 点击保存提交表单
const onSubmit = async () => {
  const { nickname, gender, birthday } = profile.value
  const [provinceCode, cityCode, countyCode] = fullLocationCode
  const res = await putMemberProfileAPI({
    nickname,
    gender,
    birthday,
    provinceCode,
    cityCode,
    countyCode,
  })
  // 更新store中的昵称
  memberStore.profile!.nickname = res.result.nickname
  uni.showToast({ icon: 'success', title: '保存成功' })
  // 返回上一页
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}
onLoad(() => {
  getMemberProfileData()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view @tap="onAvatarChange" class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input v-model="profile.nickname" class="input" type="text" placeholder="请填写昵称" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profile?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profile?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profile?.birthday"
            @change="onBirthdayChange"
          >
            <view v-if="profile?.birthday">{{ profile?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            @change="onFullLocationChange"
            class="picker"
            mode="region"
            :value="profile?.fullLocation?.split(' ')"
          >
            <view v-if="profile?.fullLocation">{{ profile?.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" :value="profile?.prefession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button @tap="onSubmit" class="form-button">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
