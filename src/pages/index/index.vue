<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '../../services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
// 获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(1, res)
  bannerList.value = res.result
}
// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <Xtx-Swiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
