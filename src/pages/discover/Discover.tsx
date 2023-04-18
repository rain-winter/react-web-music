/**
 * 发现
 */

import { useMount } from '@/hook'
import { memo } from 'react'
import { Outlet, useNavigate } from 'react-router'
import NavBar from './components/NavBar'
const Discover = () => {
  const navigate = useNavigate()
  useMount(() => navigate('/discover/recommend'))

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
export default memo(Discover)
