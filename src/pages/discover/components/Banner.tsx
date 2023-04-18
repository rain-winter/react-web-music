import { useBanner } from '@/hook/recommend'
import { Carousel } from 'antd'
import { ElementRef, useRef, useState } from 'react'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const Banner = () => {
  const { data } = useBanner()
  const [currentIndex, setCurrentIndex] = useState(0)
  /** 获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0) {
    bgImageUrl = data?.banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  return (
    <div
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
      className="flex justify-center bg-[url(`${bgImageUrl}`)] "
    >
      <div className="w-[730px] ">
        <Carousel
          ref={bannerRef}
          autoplay
          dots={true}
          autoplaySpeed={10000}
          effect="fade"
          afterChange={handleAfterChange}
        >
          {data?.banners.map((item) => (
            <div key={item.encodeId} className=" h-[270px]">
              <img src={item.imageUrl} className="w-full" alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <a
        className=" w-[254px] h-[270px] bg-[url('assets/img/download.png')]"
        href="https://music.163.com/#/download"
        target="_blank"
      ></a>
    </div>
  )
}

export default Banner
