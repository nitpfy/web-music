import axios from '@/services/request'
import {addNum,subNum,decreaseNum,increaseNum,CHANGE_LIST,FETCH_HOME_MULTIDATA} 
from './constant.js'
export const AddNum = (Num)=>({type:addNum,num:Num})
export const SubNum = (Num)=>({type:subNum,num:Num})
export const DecreaseNum = ()=>({type:decreaseNum})
export const IncreaseNum = ()=>({type:increaseNum})
export const ChangeList = (List)=>({type:CHANGE_LIST,list:List})
//redux-thunk 中定义的action函数
export const getHomeMultidataAction = (dispatch,getState) => {
  axios({
    url:'http://123.207.32.32:8000/home/multidata'
  })
  .then(res=>dispatch(ChangeList([...res.data.data.banner.list,...res.data.data.recommend.list])))
}

//redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type:FETCH_HOME_MULTIDATA
}