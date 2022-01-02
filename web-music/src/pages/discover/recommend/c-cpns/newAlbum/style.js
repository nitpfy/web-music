import styled from "styled-components";
export const TopAlbumDiv = styled.div`
  .Content{
    margin:20px 0 0 0 ;
    width:689px;
    height:186px;
    background-color:#f5f5f5;
    border:1px solid #d3d3d3;
    text-align:center;
    /* 水平居中 */
    line-height:186px;
    /* 行高和高度一样：垂直居中 */
    position: relative;
    display:flex;
    justify-content:space-around;
    align-items:center;//弹性盒子垂直居中
    .leftbtn{
      display:inline-block;
      position:absolute;
      width:7px;
      height:13px;
      left:10px;
      cursor: pointer;
    }
    .rightbtn{
      display:inline-block;
      position:absolute;
      width:7px;
      height:13px;
      right:10px;
      cursor: pointer;
    }
    .Carouselcontent{
      display: inline-block;
      width:645px;
      height:146px;
      margin:22px 0 0 0;
    }
    
  }
`