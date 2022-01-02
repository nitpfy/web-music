import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import SubBanner from '../sub_banner';
import {getNewAlbumAction} from '../../store/actionCreator';
import {TopAlbumDiv} from './style';
import { Carousel } from 'antd';
import AlbumCover from '../../../../../components/AlbumCover';

export default memo(function NewAlbum() {
  const {newAlbum} = useSelector(state => 
    ({newAlbum:state.getIn(['recommend','newAlbum'])}),
  shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(20))
    return () => {
      dispatch(getNewAlbumAction(20))
    }
  }, [dispatch])
  const carouselRef = useRef()
  const Album1_5 = newAlbum.slice(10, 15)
  const Album6_10 = newAlbum.slice(15)
  return (
    <TopAlbumDiv>
      <SubBanner title='新碟上架' keyWord={[]}> </SubBanner>
      <div className='Content'>
        <button onClick={e=>carouselRef.current.prev()} 
        className='sprite_newleft leftbtn'></button>
        <Carousel className='Carouselcontent' ref={carouselRef} 
        dots={false}>
          {/* 标签里非字符串传值都要用插值符{} */}
          <div>
          {
            Album1_5.map((item,index)=>{
              return (
                <AlbumCover key={item.id} item={item} size={100} margin={'0 11px 0 0'}></AlbumCover>
              )
            })
          }
          </div>
          <div>
          {
            Album6_10.map((item,index)=>{
              return (
                <AlbumCover key={item.id} item={item} size={100}  margin={'0 11px 0 0'}></AlbumCover>
              )
            })
          }
          </div>
        </Carousel>
        <button onClick={e=>carouselRef.current.next()}
         className='sprite_newright rightbtn'></button>
      </div>
      
      
      
    </TopAlbumDiv>
  )
})
