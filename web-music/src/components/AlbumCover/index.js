import React, { memo,useCallback } from 'react'
import {useDispatch} from 'react-redux'
import {getSizeImage} from '@/utils'
import { AlbumSpan } from './style'
import { getSongDetailAction } from '../../pages/player/store/actionCreators'
import { getAlbum } from '../../services/recommend'

export default memo(function AlbumCover(props) {
  const {item,size=100} = props
  const dispatch = useDispatch()
  const musicPlay =  useCallback(
    (id) => {
      getAlbum(id).then(res=>{
        dispatch(getSongDetailAction(res.data.songs[0].id)) 
      })
    },
    [dispatch],
  )
  return (
      <AlbumSpan>
        <img src={getSizeImage(item.picUrl,size)} alt=''/>
        <div className='cover sprite_Albumcover'></div>
        <button onClick={e=>musicPlay(item.id)} className='sprite_play playicon'></button>
        <span className='albumName'>{item.name}</span>
        <span className='artist'>{item.artist.name}</span>
      </AlbumSpan>
  )
})
