import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { SubBannerDiv } from './style'
export default memo(function Sub_Banner(props) {
  return (
    <SubBannerDiv>
      <i className='sprite_hotCircle hotCircle'></i>
      <NavLink to='/#' className='title'>{props.title}</NavLink>
      {props.keyWord&&props.keyWord.map((item,index)=>{
        return (
          <span key={item}><NavLink to='/#'>{item}</NavLink>
          {index<props.keyWord.length-1 ? <span>|</span>:null}
          </span>
        )
      })}
      <NavLink to='/#' className='more'>更多</NavLink>
      <i className='sprite_arrow arrow'></i>
    </SubBannerDiv>
  )
})
