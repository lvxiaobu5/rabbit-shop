import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

// 新建收货地址
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
// 获取收货地址列表
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
// 获取收货地址详情，id：地址id（路径参数）
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
// 修改收货地址，id：地址id（路径参数），data：表单数据（请求体参数）
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http<AddressItem>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}
// 删除收货地址，id：地址id（路径参数）
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
