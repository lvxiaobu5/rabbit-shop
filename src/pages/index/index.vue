<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '../../services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { BannerItem } from '../../types/home.d.ts'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(1, res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <Xtx-Swiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
