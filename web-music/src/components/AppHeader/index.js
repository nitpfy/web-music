import React, { memo, Suspense } from 'react'
import {HeaderWrapper, LeftWrappr, RightWrappr} from './style'
import { SearchOutlined } from '@ant-design/icons';
import { HashRouter, NavLink, } from 'react-router-dom'
import Router from '@/router'
import { headerLinks } from '../../common/local-data'
export default memo(function AppHeader() {
  function showLinks(item,index){
    if(index<3){
      return <NavLink to={item.link} className='select' key={item.title}>{item.title}
      <i className='sprite_01 icon'></i>
      </NavLink>
    }
    else{
      return <a href={item.link} className='select' key={item.title}>{item.title}</a>
    }
  }
  return (
    <HashRouter>
      <HeaderWrapper>
        <div className='wrap-v1 content'>
          <LeftWrappr>
           <NavLink to='/' className='logo sprite_01'></NavLink>
           {headerLinks.map((item,index)=>{
              return showLinks(item,index)
            })}
            <span className='sprite_01 hot'></span>
          </LeftWrappr>
          <RightWrappr>
            <div className='search'>
              <SearchOutlined style={{fontSize:'130%'}}/>
              <input type='text' placeholder='音乐/视频/电台用户' ></input>
            </div>
            <div className='author'>
              <a href='https://music.163.com/#/login?targetUrl=%2Fcreatorcenter' target='_blank' rel="noreferrer">创作者中心</a>
            </div>
            <div>
               <a className='login' href='#/'>登录</a>
            </div>
          </RightWrappr>
        </div>
        <div className='divide'></div>
      </HeaderWrapper>
      <Suspense fallback={<div>page loading</div>}><Router></Router></Suspense>
    </HashRouter>
  )
})
