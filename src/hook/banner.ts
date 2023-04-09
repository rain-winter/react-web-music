import { useHttp } from '@/utils/http'
import { useEffect } from 'react'
import { useAsync } from './useAsync'

export const useBanner = () => {
  const client = useHttp()
  const { run, ...result } = useAsync()
  const fetchBanner = () => client({ url: '/product/list' })
  useEffect(() => {
    run(fetchBanner())
  }, [run])
  return result
}

// export const useBanner = () => {
// }
