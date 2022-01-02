import React, { memo ,useState,useEffect,useRef, useCallback } from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import { PlayerWraper } from './style'
import { Slider, message } from 'antd';
import {getSongDetailAction, PlayMusicAction,
  CurrentIndexAction, changeCurrentLyricIndexAction,
  getLyricAction } from '../store/actionCreators'
import {getSizeImage, formatMinuteSecond, getPlaySong} from '@/utils'
export default memo(function Player() {
  const dispatch = useDispatch()
  const Ref = useRef()
  const [isPlay, setisPlay] = useState(false)
  const [currentTime, setcurrentTime] = useState(0)
  const [percent, setpercent] = useState(0)
  const [isChange, setisChange] = useState(false)
  const [count, setcount] = useState(0)
  const [switchover, setswitchover] = useState(0)


  const {currentMusic} = useSelector(state => 
    ({currentMusic:state.getIn(['player','currentMusic'])}),shallowEqual)
  const {currentIndex} = useSelector(state => 
    ({currentIndex:state.getIn(['player','currentIndex'])}),shallowEqual)
  const {playList,lyricList,currentLyricIndex} = useSelector(state => 
    ({playList:state.getIn(['player','playList']),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }),shallowEqual)
  
  const picUrl = currentMusic.al&&(currentMusic.al.picUrl)
  const duration = currentMusic&&(currentMusic.dt)
  const musicName = currentMusic&&(currentMusic.name)
  const singerName = currentMusic.ar&&(currentMusic.ar[0].name)
  const id = currentMusic&&(currentMusic.id)

  useEffect(() => {
    dispatch(getSongDetailAction(1901371647))
    return () => {
      dispatch(getSongDetailAction(1901371647))
    }
  }, [dispatch])
  useEffect(() => {
    Ref.current.src = getPlaySong(id)
    if(count>0){
      Ref.current.play()
      setisPlay(true)
    }
    if(id){
      setcount(count+1)
    }
    
  }, [id])

  const timeUpdate = e=>{
    const curTime = e.target.currentTime
    if(!isChange){
      setcurrentTime(curTime*1000)
      setpercent((curTime*1000/duration)*100)
    }
    if(e.target.ended){
      const length = playList.length
      if(currentIndex<length-1&&currentIndex>=0){
        dispatch(PlayMusicAction(playList[currentIndex+1]))
        dispatch(CurrentIndexAction(currentIndex+1))
      }
      else if(currentIndex===length-1){
        dispatch(PlayMusicAction(playList[0]))
        dispatch(CurrentIndexAction(0))
      }
    }

    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime  < lyricItem.time) {
        break;
      }
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        key: "lyric",
        content: content,
        duration: 0,
        className: "lyric-class"
      })
    }
  }
  const play = useCallback(
    ()=>{
      if(!isPlay){
        Ref.current.play()
        setisPlay(!isPlay)
      }
      else{
        Ref.current.pause()
        setisPlay(!isPlay)
      }
    },[isPlay]
  ) 
  const sliderChange = useCallback(
    (value) => {
      setisChange(true)
      const curTime = (value/100)*duration
      setcurrentTime(curTime)
      setpercent(value)
    },
    [duration],
  )
  const sliderAfterChange = useCallback((value) => {
    const curTime = value/100*duration
    setcurrentTime(curTime)
    setpercent(value)
    Ref.current.currentTime = curTime/1000
    if(!isPlay){
      play()
    }
    setisChange(false)
  }, [duration, isPlay, play]);
  const prevMusic = useCallback(
    () => {
      const length = playList.length
      if(length===1){
        Ref.current.currentTime = 0
      }
      else if(switchover===0){
        if(currentIndex<=length-1&&currentIndex>0){
          dispatch(PlayMusicAction(playList[currentIndex-1]))
          dispatch(CurrentIndexAction(currentIndex-1))
          dispatch(getLyricAction(playList[currentIndex-1].id))
        }
        else if(currentIndex===0){
          dispatch(PlayMusicAction(playList[length-1]))
          dispatch(CurrentIndexAction(length-1))
          dispatch(getLyricAction(playList[length-1].id))
        }
      }
      else if(switchover===1){
        const length = playList.length
        const index = Math.floor(Math.random()*length)
        dispatch(PlayMusicAction(playList[index]))
        dispatch(CurrentIndexAction(index))
        dispatch(getLyricAction(playList[index].id))
      }
      else{
        Ref.current.currentTime = 0
      }
    },
    [dispatch,playList,currentIndex,switchover],
  )
  const nextMusic = useCallback(
    () => {
      const length = playList.length
      if(length===1){
        Ref.current.currentTime = 0
      }
      else if(switchover===0){
        if(currentIndex<length-1&&currentIndex>=0){
          dispatch(PlayMusicAction(playList[currentIndex+1]))
          dispatch(CurrentIndexAction(currentIndex+1))
          dispatch(getLyricAction(playList[currentIndex+1].id))
        }
        else if(currentIndex===length-1){
          dispatch(PlayMusicAction(playList[0]))
          dispatch(CurrentIndexAction(0))
          dispatch(getLyricAction(playList[0].id))
        }
      }
      else if(switchover===1){
        const length = playList.length
        const index = Math.floor(Math.random()*length)
        dispatch(PlayMusicAction(playList[index]))
        dispatch(CurrentIndexAction(index))
        dispatch(getLyricAction(playList[index].id))
      }
      else{
        Ref.current.currentTime = 0
      }
    },
    [dispatch,playList,currentIndex,switchover],
  )
  const playOrder = useCallback(
    () => {
      if(switchover===0){
        setswitchover(1)
      }
      else if(switchover===1){
        setswitchover(2)
      }
      else{
        setswitchover(0)
      }
    },
    [switchover]
  )
  return (
    <PlayerWraper className='sprite_player'  isPlaying={isPlay}
    switchover={switchover}>
      {/*styled-components中若要接收props，自定义属性要写在styled组件上*/}
      <div className='content'>
        <div className='left'>
          <button onClick={e=>prevMusic()} className='sprite_player prevmusic'></button>
          <button className='sprite_player playorpause'
           onClick={e=>play()}></button>
          <button onClick={e=>nextMusic()} className='sprite_player nextmusic'></button>
        </div>
        <div className='middle'>
          <button className='pic'><img src={getSizeImage(picUrl,34)} alt='error'>
            </img></button>
          <div className='bar'>
            <div className='bartop'>
              <div>{musicName}</div>
              <div>{singerName}</div>
            </div>
            <div className='barbottom'>
              <Slider value={percent}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div>{formatMinuteSecond(currentTime)}/{formatMinuteSecond(duration)}</div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='Collect_share_lyrics'>
            <button className='sprite_lyrics inpiclyrics'></button>
            <button className='sprite_player collect'></button>
            <button className='sprite_player share'></button>
          </div>
          <div className='sprite_player shu'></div>
          <div className='Sound_play_list'>
            <button className='sprite_player sound'></button>
            <button onClick={e=>playOrder(switchover)} 
            className='sprite_player play'></button>
            <button className='sprite_player list'>
              <span className='listCount'>{playList.length}</span>
            </button>
          </div>
        </div>
      </div>
      <audio ref={Ref}
              onTimeUpdate={e=>timeUpdate(e)}></audio>
    </PlayerWraper>
  )
})
