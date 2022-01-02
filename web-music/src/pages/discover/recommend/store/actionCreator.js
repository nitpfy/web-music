import { CHANGE_RECOMMEND,
  CHANGE_HOTRECOMMEDN, CHANGE_NEW_ALBUM,
  CHANGE_RANKLIST0, CHANGE_RANKLIST1,
  CHANGE_RANKLIST2, CHANGE_SETTLE_SONGER } from './constant'
import {getTopBanner, getHotRecommend, getNewAlbum,
  getRankList, getArtistList} from '@/services/recommend'

const TopBannerAction = res=> 
({type:CHANGE_RECOMMEND,topBanners:res})
const HotRecommendAction = res=>
({type:CHANGE_HOTRECOMMEDN,hotRecommend:res.data.result})
//axios把取过来的数据放在了data里
const NewAlbumAction = res=>
({type:CHANGE_NEW_ALBUM,newAlbum:res.data.albums})

const RankListAction0 = res=>
({type:CHANGE_RANKLIST0,rankList0:res.data.playlist})

const RankListAction1 = res=>
({type:CHANGE_RANKLIST1,rankList1:res.data.playlist})

const RankListAction2 = res=>
({type:CHANGE_RANKLIST2,rankList2:res.data.playlist})

const changeSettleSingsAction = (res) => ({
  type: CHANGE_SETTLE_SONGER,
  settleSings: res.data.artists
})

export const getTopBannerAction = ()=>{
  //dispatch()传入函数的调用，函数调用返回一个函数，
  //返回的函数执行diapatch(action)
  return dispatch =>{ 
    getTopBanner().then(res=>
      dispatch(TopBannerAction(res.data.banners))
    )
  }
}
export const getHotRecommendAction = (limit)=>{
  return dispatch=>{
    getHotRecommend(limit).then(res=>
      dispatch(HotRecommendAction(res)))
  }
}
export const getNewAlbumAction = (limit)=>{
  return dispatch=>{
    getNewAlbum(limit).then(res=>
      dispatch(NewAlbumAction(res)))
  }
}

export const getRankListAction0 = (idx)=>{
  return dispatch=>{
    getRankList(idx).then(res=>
      dispatch(RankListAction0(res)))
  }
}
export const getRankListAction1 = (idx)=>{
  return dispatch=>{
    getRankList(idx).then(res=>
      dispatch(RankListAction1(res)))
  }
}
export const getRankListAction2 = (idx)=>{
  return dispatch=>{
    getRankList(idx).then(res=>
      dispatch(RankListAction2(res)))
  }
}

export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}