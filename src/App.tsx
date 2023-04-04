import { Button } from 'antd'
import 'antd/dist/reset.css'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './router'

import { useAppDispatch, useAppSelector } from '@/store/index'
import { changeNumAction } from './store/modules/counter'

const App = () => {
  const { count, message } = useAppSelector((state) => state.counter)

  const dispatch = useAppDispatch()
  const handleChangeNum = () => {
    dispatch(changeNumAction(100))
  }

  return (
    <div>
      <div>
        计数：{count}
        {message}
      </div>
      <Button onClick={() => handleChangeNum()}>修改counter</Button>
      <Suspense fallback="loading……">
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  )
}
export default App
