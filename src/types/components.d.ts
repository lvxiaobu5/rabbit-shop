// src/types/components.d.ts
import XtxSwiper from './Xtx-Swiper.vue'
import XtxGuess from './Xtx-Guess.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
