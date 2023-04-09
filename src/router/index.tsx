import MainLayout from '@/layout/MainLayout'
import { lazy } from 'react'
import { createHashRouter } from 'react-router-dom'

//TODO 1.懒加载组件
const Focus = lazy(() => import('@/pages/Focus'))
const Mine = lazy(() => import('@/pages/Mine'))
const Discover = lazy(() => import('@/pages/discover/Discover'))
const AlBum = lazy(() => import('@/pages/discover/cpages/AlBum'))
const ArtList = lazy(() => import('@/pages/discover/cpages/ArtList'))
const Djradio = lazy(() => import('@/pages/discover/cpages/Djradio'))
const PlayList = lazy(() => import('@/pages/discover/cpages/PlayList'))
const Ranking = lazy(() => import('@/pages/discover/cpages/Ranking'))
const Recommend = lazy(() => import('@/pages/discover/cpages/Recommend'))
const Songs = lazy(() => import('@/pages/discover/cpages/Songs'))

const routes = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/mine',
        element: <Mine />
      },
      {
        path: '/focus',
        element: <Focus />
      },
      {
        path: '/discover',
        element: <Discover />,
        children: [
          {
            path: '/discover',
            element: <Discover />
          },
          {
            path: '/discover/album',
            element: <AlBum />
          },
          {
            path: '/discover/artlist',
            element: <ArtList />
          },
          {
            path: '/discover/playList',
            element: <PlayList />
          },
          {
            path: '/discover/djradio',
            element: <Djradio />
          },
          {
            path: '/discover/ranking',
            element: <Ranking />
          },
          {
            path: '/discover/recommend',
            element: <Recommend />
          },
          {
            path: '/discover/songs',
            element: <Songs />
          }
        ]
      }
    ]
  }
])

export default routes

/*

    */
