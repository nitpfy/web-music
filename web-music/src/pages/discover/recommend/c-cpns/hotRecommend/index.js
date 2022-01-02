import React, { memo, useEffect,  } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {getHotRecommendAction} from '../../store/actionCreator'
import {HotRecommednDiv,RecommendRight} from './style'
import SubBanner from '../sub_banner'
import SongCover from '../../../../../components/SongCover'
import NewAlbum from '../newAlbum'
import RankList from '../rankings'
import UserLogin from '../user-login';
import SettleSinger from '../settle-singer';
import HotAnchor from '../hot-anchor';

export default memo(function HotRecommend(props){
  const dispatch = useDispatch()
  const {hotRecommend} = useSelector(state =>
    ({ hotRecommend:state.getIn(['recommend','hotRecommend'])}),shallowEqual)
  useEffect(()=>{
    dispatch(getHotRecommendAction(8))
  },[dispatch])
  return(
    <HotRecommednDiv>
      <div className='left'>
        <SubBanner title='热门推荐' 
        keyWord={['华语','流行','摇滚','民谣','电子']}>
        </SubBanner>
        <div className='contentmusic'>
          {hotRecommend.map((item,index)=>{
            return(
              <SongCover item={item} key={index}></SongCover>
            )
          })}
        </div>
        <NewAlbum/>
        <RankList/>
      </div>
      <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotAnchor/>
      </RecommendRight>
    </HotRecommednDiv>
  )
})