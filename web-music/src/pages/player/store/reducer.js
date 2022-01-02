import { CHANGE_PLAYMUSIC, CHANGE_PLAYLIST, CHANGE_CURRENTINDEX,
  CHANGE_LYRIC_LIST,CHANGE_CURRENT_LYRIC_INDEX } from "./constant";
import { Map } from "immutable";

const defaultState = Map({
  currentMusic:{},
  playList:[],
  currentIndex:0,
  lyricList: [],
  currentLyricIndex: 0
})

export default function reducer(state=defaultState,action){
  switch(action.type){
    case CHANGE_PLAYMUSIC:
      return state.set('currentMusic',action.currentMusic)
    case CHANGE_PLAYLIST:
      return state.set('playList',action.playList)
    case CHANGE_CURRENTINDEX:
      return state.set('currentIndex',action.currentIndex)
      case CHANGE_LYRIC_LIST:
        return state.set("lyricList", action.lyricList);
      case CHANGE_CURRENT_LYRIC_INDEX:
        return state.set("currentLyricIndex", action.index);
    default:
      return state
  }
}
