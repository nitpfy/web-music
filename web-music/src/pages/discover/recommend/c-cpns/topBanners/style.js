import styled from "styled-components";
export const TopBannersDiv = styled.div`
  display:flex;
  height:285px;
  justify-content:center;
  align-items:center;
  background:url(${props=>(props.bgImage+'?imageView&blur=40x20')}) center/6000px;
  .leftbtn{
    display:inline-block;
    margin:0 30px 0 30px;
    width:37px;
    height:63px;
    cursor: pointer;
    &:hover{
      background-color:#3a3a38;
    }
  }
  .rightbtn{
    display:inline-block;
    margin:0 30px 0 30px;
    width:37px;
    height:63px;
    cursor: pointer;
    &:hover{
      background-color:#3a3a38;
    }
  }
  .content{
    width:983px;
    height:285px;
    .left{
      display:inline-block;
      width:730px;
      height:285px;
      img{
        width:730px;
        height:285px;
      }
    }
    .right{
      display:inline-block;
      position:absolute;
      width:253px;
      height:285px;
      background-position:0 0;
    }
  }
`