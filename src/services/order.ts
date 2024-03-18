import { http } from '@/utils/http'

export const getMemberOrderPreAPI = () => {
  return http({
    method: 'GET',
    url: '/member/order/pre',
  })
}
