import request from './request';
export function getTopBanner(){
  return request({
    url:'/banner'
  })
}
export function getHotRecommend(limit){
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}
export function getNewAlbum(limit){
  return request({
    url:'/top/album',
    params:{
      limit
    }
  })
}
export function getRankList(idx){
  return request({
    url:'/top/list',
    params:{
      idx
    }
  })
}
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}
export function getUserPlaylist(id){
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}
export function getAlbum(id){
  return request({
    url:'/album',
    params:{
      id
    }
  })
}