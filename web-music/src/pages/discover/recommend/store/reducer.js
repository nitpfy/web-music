import * as actionType from './constant'
import {Map} from 'immutable'
const defaultState = Map({
  topBanners:[],
  hotRecommend:[],
  newAlbum:[],
  rankList0:[],
  rankList1:[],
  rankList2:[],
  settleSings: [],
  
})
export default function reducer(state=defaultState,action){
  switch(action.type){
    case actionType.CHANGE_RECOMMEND:
      return state.set('topBanners',action.topBanners)
    case actionType.CHANGE_HOTRECOMMEDN:
      return state.set('hotRecommend',action.hotRecommend)
    case actionType.CHANGE_NEW_ALBUM:
      return state.set('newAlbum',action.newAlbum)
    case actionType.CHANGE_RANKLIST0:
      return state.set('rankList0',action.rankList0)
    case actionType.CHANGE_RANKLIST1:
      return state.set('rankList1',action.rankList1)
    case actionType.CHANGE_RANKLIST2:
      return state.set('rankList2',action.rankList2)
    case actionType.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings)
    default:
      return state
  }
}