import styled from "styled-components";
export const Rankwrapped = styled.div`
  margin-top:43px;
  .content{
    margin-top:20px;
    display:flex;
    justify-content:space-around;
  }
`

export const Rankdiv = styled.div`
  width:205px;
  padding:20px 0 0 2px;
  .top{
    position: relative;
    margin-left:7px;
    height:80px;
    width:100%;
    .title{
      position:absolute;
      left:97px;
      top:8px;
      font-weight:bold;
      font-size:14px;
    }
    .newcover{
      position:absolute;
      background-position:-267px -205px;
      width: 22px;
      height: 22px;
      left:97px;
      top:33px;
      margin-right:10px;
      }
    .newcover:hover{
      background-position:-267px -235px;
      cursor: pointer;
    }
    .newcover1{
      position:absolute;
      background-position:-300px -207px;
      width: 20px;
      height: 19px;
      left:129px;
      top:35px;
      margin-right:10px;
      }
    .newcover1:hover{
      background-position:-300px -237p;
      cursor: pointer;
    }
    .cover{
      position:absolute;
      background-position:-145px -57px;
      width:80px;
      height:80px;
      left:0;
      top:0;
    }
  }
  .list{
    position: relative;
    height:320px;
    width:100%;
    margin:23px 0 0 0;
    font-size:16px;
    .li{
      height:32px;
      position: relative;
      
      .operate {
        position:absolute;
        top:2px;
        display: flex;
        align-items: center;
        display: none;
        width: 82px;
        right:10px;
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
      }
      &:hover {
        .operate {
          display: block;
        }
        a{
          width:83px;
        }
      }
    }
    .music{
      display: inline-block;
      position:absolute;
      top:0;
      left:0;
      width:35px;
      height:32px;
      text-align:center;
    }
    div a{
      display:inline-block;
      position:absolute;
      width:165px;
      height:32px;
      top:4px;
      left:35px;
      color:black;
      font-size:12px;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      /* margin-top:7px; */
    }
    
    div:nth-child(-n+3){
      color:#c90d0c;
    }
  }
  .footer{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    margin-top:2px;
    a{
      color:black;
      font-size:12px;
    }
  }
`