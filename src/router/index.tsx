import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

//TODO 1.懒加载组件
const Focus = lazy(() => import('@/pages/Focus'))
const Mine = lazy(() => import('@/pages/Mine'))
const Discover = lazy(() => import('@/pages/discover/Discover'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: []
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  }
])

export default routes
