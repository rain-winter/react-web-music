import MyFooter from '@/components/Footer'
import MyHeader from '@/components/Header'
import { useMount } from '@/hook'
import { Layout } from 'antd'
import { Outlet, useNavigate } from 'react-router'
const { Content } = Layout

const MainLayout = () => {
  const navigate = useNavigate()

  useMount(() => navigate('/discover'))

  return (
    <div>
      <MyHeader />
      <Content>
        <Outlet />
      </Content>
      <MyFooter />
    </div>
  )
}

export default MainLayout
