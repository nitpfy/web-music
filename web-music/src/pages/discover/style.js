import styled from 'styled-components';
export const DiscoverWrapper = styled.div`
  
`
export const Bar = styled.div`
  width:100%auto;
  height:35px;
  background-color:#c20c0c;
  text-align:center;
  .content{
    width:1100px;
    height:34px;
    margin:auto;
    .nav{
      display:flex;
      justify-content:space-around;
      align-items:center;
      width:744px;
      height:34px;
      padding:0 0 0 180px;
      font-size:13px;
      a{
        display:inline-block;
        height:20px;
        text-decoration:none;
        color:white;
        padding:0 17px 0 17px;
        &:hover{
          height:22px;
          background-color:#9b0909;
          border:1px solid #c20c0c;
          border-radius:10px;
        }
      }
      a.active{
        background-color:#9b0909;
        border:1px solid #c20c0c;
        border-radius:10px;
      }
      
    }
  }
`