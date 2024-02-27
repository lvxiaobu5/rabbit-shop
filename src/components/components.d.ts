// src/types/components.d.ts
import XtxSwiper from './Xtx-Swiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
