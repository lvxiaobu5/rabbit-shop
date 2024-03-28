<script setup lang="ts">
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const props = defineProps<{
  list: BannerItem[]
}>()
const activeIndex = ref(0)

// 当swiper下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  // !.就是非空断言，主观上排除掉undefined空值的情况，即ev.detail一定是有值的
  activeIndex.value = ev.detail!.current
}
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import '@/components/styles/Xtx-Swiper.scss';
</style>
