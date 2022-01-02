import { CHANGE_PLAYMUSIC, CHANGE_PLAYLIST, CHANGE_CURRENTINDEX,
  CHANGE_LYRIC_LIST, CHANGE_CURRENT_LYRIC_INDEX } from "./constant";
import { getPlayMusic, getLyric } from "../../../services/player";
import { parseLyric } from '@/utils/parse-lyric';

export const PlayMusicAction = currentMusic=>(
  {type:CHANGE_PLAYMUSIC,currentMusic}
)
const PlayListAction = playList=>({
  type:CHANGE_PLAYLIST,playList
})
export const CurrentIndexAction = currentIndex=>({
  type:CHANGE_CURRENTINDEX,currentIndex
})

export const getPlayMusicAction = ids =>{
  return dispatch=>{
    getPlayMusic(ids).then(res=>dispatch(PlayMusicAction(res.data.songs[0])))
  }
}

const changLyricListAction = (lyricList) => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const addSongAction = ids =>{
  return (dispatch,getState)=>{
    let song=null
    const playList = getState().getIn(['player','playList'])
    const index = playList&&playList.findIndex(song=>song.id===ids)
    if(index===-1){
      getPlayMusic(ids).then(res=>{
        const newPlayList = [...playList]
        song = res.data.songs&&res.data.songs[0]
        if(!song)
        return
        newPlayList.push(song)
        dispatch(PlayListAction(newPlayList))
      })
    }
  }
}

export const getSongDetailAction = ids =>{
  return (dispatch,getState)=>{
    let currentMusic=null
    const playList = getState().getIn(['player','playList'])
    const index = playList&&playList.findIndex(song=>song.id===ids)
    if(index>-1){
      currentMusic = playList[index]
      dispatch(PlayMusicAction(currentMusic))
      dispatch(CurrentIndexAction(index))
      dispatch(getLyricAction(currentMusic.id))
    }
    else{
      getPlayMusic(ids).then(res=>{
        const newPlayList = [...playList]
        currentMusic = res.data.songs&&res.data.songs[0]
        if(!currentMusic)
        return
        newPlayList.push(currentMusic)
        dispatch(PlayListAction(newPlayList))
        dispatch(PlayMusicAction(currentMusic))
        dispatch(CurrentIndexAction(newPlayList.length-1))
        dispatch(getLyricAction(currentMusic.id))
      })
    }
  }
}
export const getRankPlayListAction = rankList => {
  return dispatch => {
    const tracks = rankList&&rankList.tracks
    tracks.map((item,index)=>{
      let song = {}
      getPlayMusic(item.id).then(res=>{
        song = res.data.songs&&res.data.songs[0]
      })
      return song
    })
    dispatch(PlayListAction(tracks))
    dispatch(PlayMusicAction(tracks[0]))
    dispatch(CurrentIndexAction(0))
    dispatch(getLyricAction(tracks[0].id))
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.data.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    })
  }
}