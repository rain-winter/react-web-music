/**
 * 发现
 */

import { useMount } from '@/hook'
import { memo } from 'react'
import { Outlet, useNavigate } from 'react-router'
const Discover = () => {
  const navigate = useNavigate()
  useMount(() => navigate('/discover/recommend'))

  return (
    <div>
      <Outlet />
    </div>
  )
}
export default memo(Discover)
