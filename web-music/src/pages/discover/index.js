import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {DiscoverWrapper,Bar} from './style'
export default memo(function Discover() {
  // useEffect(() => {
  //   request({
  //     url:'/banner'
  //   }).then(res=>console.log(res.data.banners))
  //   return () => {
  //     request({
  //       url:'/banner'
  //     }).then(res=>console.log(res.data.banners))
  //   }
  // }, [])
  return (
    <div>
      <DiscoverWrapper>
        <Bar>
          <div className='content'>
            <div className='nav'>
              <NavLink to='/discover/recommend'>推荐</NavLink>
              <NavLink to='/discover/rank'>排行榜</NavLink>
              <NavLink to='/discover/sheet'>歌单</NavLink>
              <NavLink to='/discover/anchor_station'>主播电台</NavLink>
              <NavLink to='/discover/singer'>歌手</NavLink>
              <NavLink to='/discover/newdisk'>新碟上架</NavLink>
            </div>
          </div>
        </Bar>
        <Outlet></Outlet>
      </DiscoverWrapper>
    </div>
    
  )
})
