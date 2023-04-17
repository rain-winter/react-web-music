import { Carousel } from 'antd'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const Banner = () => {
  return (
    <div className=" m-auto">
      <Carousel></Carousel>
      <div>right</div>
    </div>
  )
}

export default Banner
