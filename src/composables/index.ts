import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

// 猜你喜欢组合式函数
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()
  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回ref和事件处理函数出去让外部能调用
  return {
    guessRef,
    onScrolltolower,
  }
}
