import AreaHeader from '@/components/AreaHeader'
import SongItem from '@/components/SongItem'
import { useHotRecommend } from '@/hook/recommend'

const HotRecommend = () => {
  const { data } = useHotRecommend()

  return (
    <div>
      <AreaHeader
        title="热门推荐"
        moreText="更多"
        moreLink="/discover/songs"
        keywords={['华语', '流行']}
      />
      <div className="w-[720px] flex flex-wrap justify-around">
        {data?.result.map((item: any) => (
          <SongItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default HotRecommend
