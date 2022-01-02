import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  height:70px;
  background:#242424;
  .content{
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .divide{
    height:1px;
    background:black;
  }
`
export const LeftWrappr = styled.div`
  position:relative;
  display:flex;
  justify-content:space-around;
  width:685px;
  .logo{
    display:inline-block;
    width:176px;
    height:69px;
    background-position:0 0;
  }
  .select{
    position:relative;
    display:inline-block;
    padding:0 19px 0 19px;
    height:100%;
    width:auto;
    font-size:14px;
    line-height:70px;
    color:white;
    /* &.active{
      background:black;
    } */
    &:hover,&.active{
      background:black;
      text-decoration:none;
    }
    &.active .icon {
      position:absolute;
      display:inline-block;
      width:12px;
      height:7px;
      bottom:-1px;
      left:50%;
      transform:translate(-50%,0);
      background-position:-226px 0;
    }
    
  }
  .hot{
      position:absolute;
      display:inline-block;
      margin:0;
      width:26px;
      height:13px;
      top:22px;
      right:-30px;
      transform:translate(-50%,0);
      background-position:-192px 0;
  }
`
export const RightWrappr = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  width:341px;
  
  .search{
    display:flex;
    justify-content:space-around;
    padding:2px;
    width:158px;
    height:32px;
    background-color:white;
    align-items:center;
    border-radius:15px;
    input{
      display:inline-block;
      width:126px;
      background-color:white;
    }
  }
  .author{
    width:90px;
    height:32px;
    line-height:32px;
    color:#4f4f4f;
    border:1px solid ;
    border-radius:16px;
    text-align:center;
  }
  a{
    color:#cccccc;
  }
  .author:hover{
    color:white;
    a{
      color:white;
      text-decoration:none;
    }
  }
  a.login{
    margin:0 13px 0 10px;
  }
`