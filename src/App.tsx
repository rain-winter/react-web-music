import 'antd/dist/reset.css'
import { Suspense, memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { FullSpin } from './components/lib'
import routes from './router'

// import { useAppDispatch, useAppSelector } from '@/store/index'
// import { changeNumAction } from './store/modules/counter'
const App = () => {
  // const { count, message } = useAppSelector((state) => state.counter)
  // const dispatch = useAppDispatch()
  // const handleChangeNum = () => {
  //   dispatch(changeNumAction(100))
  // }

  return (
    <Suspense fallback={<FullSpin />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}
export default memo(App)
