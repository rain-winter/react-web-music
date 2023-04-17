import { BannersType } from '@/types'
import { useHttp } from '@/utils/http'
import { useQuery } from '@tanstack/react-query'

export const useBanner = () => {
  const client = useHttp()
  const fetchBanner = (): Promise<BannersType> => client({ url: 'banner' })

  return useQuery({
    queryKey: ['banner'],
    queryFn: fetchBanner
  })
}
