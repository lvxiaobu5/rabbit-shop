import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

// 加入购物车，data是请求参数
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
// 获取购物车列表
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}
// 删除/清空购物车列表
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http<CartItem[]>({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
