// src/types/components.d.ts
import XtxSwiper from './Xtx-Swiper.vue'
import XtxGuess from './Xtx-Guess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
