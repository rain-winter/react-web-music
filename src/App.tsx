import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'antd/dist/reset.css'
import { Suspense, memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { FullSpin } from './components/lib'
import routes from './router'
const queryClient = new QueryClient()
// import { useAppDispatch, useAppSelector } from '@/store/index'
// import { changeNumAction } from './store/modules/counter'
const App = () => {
  // const { count, message } = useAppSelector((state) => state.counter)
  // const dispatch = useAppDispatch()
  // const handleChangeNum = () => {
  //   dispatch(changeNumAction(100))
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FullSpin />}>
        <RouterProvider router={routes} />
      </Suspense>
    </QueryClientProvider>
  )
}
export default memo(App)
