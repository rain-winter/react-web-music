import { BannersType } from '@/types'
import { useHttp } from '@/utils/http'
import { useQuery } from '@tanstack/react-query'

/**
 * 获取banner图
 */
export const useBanner = () => {
  const client = useHttp()
  const fetchBanner = (): Promise<BannersType> => client({ url: 'banner' })

  return useQuery({
    queryKey: ['banner'],
    queryFn: fetchBanner
  })
}

export const useHotRecommend = () => {
  const client = useHttp()
  const fetchHotRecommend = (): Promise<any> =>
    client({ url: 'personalized', params: { limit: 8 } })
  return useQuery({
    queryKey: ['hotRecommend'],
    queryFn: fetchHotRecommend
  })
}
