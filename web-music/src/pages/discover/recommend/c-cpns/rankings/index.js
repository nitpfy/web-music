import React, { memo, useEffect, useCallback } from 'react'
import { Rankwrapped, Rankdiv } from './style'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import SubBanner from '../sub_banner'
import {getRankListAction0,getRankListAction1,
  getRankListAction2} from '../../store/actionCreator';
import {getSongDetailAction, getRankPlayListAction,addSongAction
} from '@/pages/player/store/actionCreators'
import {getSizeImage} from '@/utils'

export default memo(function RankList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankListAction0(0))
    dispatch(getRankListAction1(1))
    dispatch(getRankListAction2(2))
    return () => {
      dispatch(getRankListAction0(0))
      dispatch(getRankListAction1(2))
      dispatch(getRankListAction2(3))
    }
  }, [dispatch])
  const {rankList0,rankList1,rankList2} = useSelector(state =>
    ({rankList0:state.getIn(['recommend','rankList0']),
      rankList1:state.getIn(['recommend','rankList1']),
      rankList2:state.getIn(['recommend','rankList2']),}),shallowEqual)
  return (
    <Rankwrapped>
      <SubBanner title='榜单' keyWord={[]}/>
      <div className='content sprite_rank'>
        <Rank rankList={rankList0}/>
        <Rank rankList={rankList1}/>
        <Rank rankList={rankList2}/>
      </div>
    </Rankwrapped>
  )
})

const Rank = memo(function(props){
  const {rankList} = props
  const dispatch = useDispatch()
  const musicPlay = useCallback(
    (id) => {
      dispatch(getSongDetailAction(id))
    },
    [dispatch],
  )
  const getPlayList = useCallback(
    (rankList) => {
      dispatch(getRankPlayListAction(rankList))
    },
    [dispatch],
  )
  const addToList = useCallback(
    (id) => {
      dispatch(addSongAction(id))
    },
    [dispatch],
  )

  return(
    <Rankdiv>
      <div className='top'>
        <span><img src={getSizeImage(rankList.coverImgUrl,80)} alt=''></img></span>
        <span>
          <span className='title'>{rankList.name}</span>
          <button onClick={e=>getPlayList(rankList)}
          className='sprite_02 newcover'></button>
          <button className='sprite_02 newcover1'></button>
          </span>
        <div className='cover sprite_covor'></div>
      </div>
      <div className='list'>
        {rankList.tracks&&(rankList.tracks.map((item,index)=>{
          return (index<10? true:null)&&(
            <div className='li' key={item.id}>
              <span className='music'>{index+1}</span>
              <a href='/#'>{item.name}</a>
              <div className="operate">
                    <button onClick={e=>musicPlay(item.id)} className="btn sprite_02 play"></button>
                    <button onClick={e=>addToList(item.id)} className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
            </div>
          )
        }))}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </Rankdiv>
  )
})
