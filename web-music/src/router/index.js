import React, { memo } from 'react'
import { useRoutes ,Navigate } from "react-router";
import { lazy } from "react";
const Discover = lazy(()=> import('../pages/discover'));
const Friend = lazy(()=> import('../pages/friend'))
const Mine = lazy(()=> import('../pages/mine'))
const Recommend = lazy(()=> import('../pages/discover/recommend'))
const RankList = lazy(()=> import('../pages/discover/rank'))
const SongSheet = lazy(()=> import('../pages/discover/sheet'))
const AnchorStation = lazy(()=> import('../pages/discover/anchor_station'))
const Singer = lazy(()=> import('../pages/discover/singer'))
const NewDisk = lazy(()=> import('../pages/discover/newdisk'))

export default memo(function Router() {
  let element = useRoutes([
    { path: "/", element:<Discover/> ,children:[//当‘发现’按钮的链接是'/'表明名称为空的链接，
    //path:'discover'与'/'同级，所以即使path:'discover'写在path: "/"路由的children里也不能算它的子类
    //路由写在children里表示被父类渲染，父类文件里<Outlet/>写在哪就渲染在哪
      {path:'/',element: <Navigate to='/discover'/>},
      {path:'discover',element:<Navigate to='/discover/recommend'/>},
      {path:'discover/recommend',element:<Recommend></Recommend>},
      {path:'discover/rank',element:<RankList></RankList>},
      {path:'discover/sheet',element:<SongSheet></SongSheet>},
      {path:'discover/anchor_station',element:<AnchorStation></AnchorStation>},
      {path:'discover/singer',element:<Singer></Singer>},
      {path:'discover/newdisk',element:<NewDisk></NewDisk>}
    ]},
    { path: "friend", element:<Friend/> },
    { path: "mine", element:<Mine/> },
  ]);
  // <NavLink to='/discover'>推荐</NavLink> discover后面不加'/'表示discover父链接，后面的链接是子类
  // <NavLink to='/discover/'>推荐</NavLink> discover后面加'/'表示名称为空的discover的子链接
  // <NavLink to='/discover/rank'>排行榜</NavLink> 所以discover不加'/'时点击这些子链接推荐都会激活
  // <NavLink to='/discover/rank'>排行榜</NavLink>
  // <NavLink to='/discover/recommend'>推荐</NavLink>
  // <NavLink to='/discover/rank'>排行榜</NavLink>
  return element
})
