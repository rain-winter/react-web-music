import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-[#c40c0c] h-[34px]">
      <div className="flex w-[740px] m-auto">
        {discoverMenu.map((item) => (
          <div
            className="  text-white text-[12px] mx-[17px] mt-[7px] no-underline"
            key={item.link}
          >
            <NavLink
              className=" h-[20px] px-[13px] leading-[20px] hover:no-underline  hover:rounded-[20px]  hover:bg-[#9b0909] text-white"
              to={item.link}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavBar
