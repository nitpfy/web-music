import React, { memo } from 'react'
import TopBanners from './c-cpns/topBanners'
import HotRecommend from './c-cpns/hotRecommend'

export default memo(function Recommend(props) {
  return (
    <div>
      <TopBanners></TopBanners>
      <HotRecommend></HotRecommend>
    </div>
  )
})


//不适用useDispatch的写法
// function Recommend(props) {
//   const {setState} = props
//   useEffect(()=>{
//     setState()
//   },[setState])
//   console.log(props.topBanners);//useEffect(这里要求传入一个函数而不是函数调用)
//   return (
//     <div>
//       {props.topBanners.map((item,index)=>{
//         return (
//           <img src={item.imageUrl} key={item.targetId} alt='加载出错'></img>
//         )
//       })}
//       <Outlet></Outlet>
//     </div>
//   )
// }

// const mapStateToProps = state=>({topBanners:state.recommend.topBanners})
// //combineReducers包括多个reducer，state里以reducer名分类，
// //所以需要加上对应的名称取出对应数据 state.recommend.topBanners
// const mapDispatchToProps = dispatch =>{
//   return {
//     setState:function(){
//       dispatch(getTopBannerAction())
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))