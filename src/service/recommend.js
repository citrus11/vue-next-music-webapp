import { get } from './base'

// 跟代理服务器的接口 URL 一致
// 获取热门接口
export const getRecommend = () => {
  return get('/api/getRecommend')
}