import { useDispatch } from 'react-redux'
import React, { memo, useCallback } from 'react'
import {getSizeImage, playCountFormat} from '@/utils'
import {SongDiv} from './style'
import { getUserPlaylist } from '../../services/recommend'
import { getRankPlayListAction, } from '../../pages/player/store/actionCreators'
export default memo(function SongCover(props) {
  const {item} = props
  const dispatch = useDispatch()
  const musicPlay = useCallback(
    (id) => {
      getUserPlaylist(id).then(res=>{
        const playlist = res.data.playlist
        dispatch(getRankPlayListAction(playlist))
      })
    },
    [dispatch],
  )
  return (
    <SongDiv>
      <span className='hotmusic'>
        <img src={getSizeImage(item.picUrl,140)} alt=''/>
        <div className='cover sprite_cover140'></div>
        <span className='playcount'>
          <span className=' headset sprite_headset'></span>
          <span className='count'>{' '+playCountFormat(item.playCount)}</span>
          <button onClick={e=>musicPlay(item.id)} className='sprite_play playicon'></button>
        </span>
        <span className='comment'>{item.name}</span>
      </span>
    </SongDiv>
    
  )
})
