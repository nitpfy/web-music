import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {getTopBannerAction} from '../../store/actionCreator'
import {TopBannersDiv} from './style'
import { Carousel } from 'antd';

export default memo(function TopBanners(props) {
  const [currentIdx, setcurrentIdx] = useState(0)
  const dispatch = useDispatch()
  const carouselRef = useRef()
  const changeIdx = useCallback(
    (from,to) => {
      setcurrentIdx(to)
    },
    [],
  )
 
  const {topBanners} = useSelector(state =>
    ({ topBanners:state.getIn(['recommend','topBanners'])}),shallowEqual)
  //这里的state就是仓库store里的state,useSelector会返回‘回调函数的返回值’
  const bgImage = topBanners[currentIdx]&&topBanners[currentIdx].imageUrl

  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])//useEffect(这里要求传入一个函数而不是函数调用)
  return (
    <TopBannersDiv bgImage={bgImage}>
      <button className='sprite_leftBtn leftbtn' 
      onClick={e=>carouselRef.current.prev()}></button>
      <Carousel ref={carouselRef} effect="fade" className='content' 
      autoplay={true} beforeChange={changeIdx}>
        {topBanners.map((item,index)=>{
          return (
            <div key = {item.targetId}>
              <img className='left' src={item.imageUrl} alt='加载出错'>
              </img>
              <span className='right sprite_download'></span>
            </div>
          )
        })}
      </Carousel>
      <button className='sprite_rightBtn rightbtn' 
      onClick={e=>carouselRef.current.next()}></button>
    
    </TopBannersDiv>
  )
})