import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

// 通用热门推荐类型，url请求地址，data请求参数
// &是指交叉类型
type HotParams = PageParams & { subType?: string }
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
