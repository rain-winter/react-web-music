import styled from 'styled-components'
import Banner from '../components/Banner'
import HotRecommend from '../components/HotRecommend'

/**
 * 推荐
 * */
const Recommend = () => {
  // const dispatch = useAppDispatch()

  return (
    <div>
      {/* <NavBar /> */}
      <Banner />
      <div className="w-[980px] m-auto">
        <div className=" w-[720px] pb-[15px] border-solid border-[1px] border-[#d3d3d3] overflow-hidden flex flex-wrap justify-between">
          <HotRecommend />
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
export default Recommend

export const RecommendWrapper = styled.div`
  > .content {
    width: 980px;
    border: 1px solid #d3d3d3;
    background-image: url('assets/img/wrap-bg.png');
    display: flex;
  }
`
