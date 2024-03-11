import { http } from '@/utils/http'

export type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
// 小程序登录，data是请求参数
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
// 小程序登录内测版，模拟真实手机号
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
