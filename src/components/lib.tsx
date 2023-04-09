import { Spin } from 'antd'

// export const FullPage = () => {
//   return <div className=" w-screen h-screen"></div>
// }

export const FullSpin = () => {
  return (
    <div className=" flex justify-center items-center mt-40">
      <Spin size="large" />
    </div>
  )
}
