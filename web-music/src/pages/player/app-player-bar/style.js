import styled from "styled-components";

export const PlayerWraper = styled.div`
  height:52px;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  background-position:0 -1px;
  background-repeat:repeat;
  color:white;
  button{
    cursor: pointer;
  }
  .content{
    margin:auto;
    width:983px;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .left{
      padding-top: 7px;
      width:104px;
      height:34px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .prevmusic{
        display:inline-block;
        background-position:-2px -131px;
        width: 24px;
        height: 25px;
        &:hover{
          background-position:-32px -131px;
          width: 24px;
          height: 25px;
        }
      }
      .playorpause{
        display:inline-block;
        background-position:-2px ${props=>props.isPlaying ? '-166px':'-205px'};
        width: 32px;
        height: 33px;
        &:hover{
          background-position:-42px ${props=>props.isPlaying ? '-166px':'-205px'};
          width: 32px;
          height: 33px;
        }
      }
      .nextmusic{
        display:inline-block;
        background-position:-82px -131px;
        width: 24px;
        height: 25px;
        &:hover{
          background-position:-112px -131px;
          width: 24px;
          height: 25px;
        }
      }
    }
    .middle{
      width:598px;
      height:35px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .bar{
        width:555px;
        height:35px;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        .bartop{
          display:flex;
          flex-direction:row;
          justify-content:start;
          height:14px;
          font-size:11px;
          color:white;
          padding-left:5px;
          div{
            margin-right:13px;
          }
        }
        .barbottom{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          width:555px;
          height:19px;
          .ant-slider{
            width:468px;
            .ant-slider-handle{
              width: 22px;
              height: 24px;
              border: none;
              margin-top:-7px;
              background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -252px;
            }
            .ant-slider-rail{
              background:url(${require("@/assets/img/progress_bar.png").default}) repeat 0 -30px;
            }
            .ant-slider-track{
              background:url(${require("@/assets/img/progress_bar.png").default}) repeat 0 -66px;
            }
          }
        }
      }
      .pic{
        display:block;
        position: relative;
        width:35px;
        height:35px;
        border:1px solid;
        border-radius:4px;
        img{
          display:inline-block;
          position: absolute;
          width:34px;
          height:34px;
          left:0px;
          top:0px;
          border:1px solid;
          border-radius:4px;
        }
      }
      
      
    }
    .right{
      margin:13px 0 0 0;
      width:208px;
      height:50px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .Collect_share_lyrics{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:71px;
        height:50px;
        .inpiclyrics{
          background-position:-4px -4px;
          width: 17px;
          height: 17px;
          &:hover{
            background-position:-4px -29px;
            width: 17px;
            height: 17px;
          }
        }
        .collect{
          background-position:-92px -166px;
          width: 18px;
          height: 19px;
          &:hover{
            background-position:-92px -192px;
            width: 18px;
            height: 19px;
          }
        }
        .share{
          background-position:-118px -167px;
          width: 17px;
          height: 18px;
          &:hover{
            background-position:-118px -193px;
            width: 17px;
            height: 18px;
          }
        }
      }
      .shu{
        background-position:-149px -248px;
        width: 2px;
        height: 27px;
      }
      .Sound_play_list{
        width:109px;
        height:50px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .sound{
          background-position:-5px -250px;
          width: 19px;
          height: 21px;
          &:hover{
            background-position:-34px -250px;
            width: 19px;
            height: 21px;
          }
        }
        .play{
          background-position:${props=>{
            switch(props.switchover){
              case 1:
              return "-69px -251px"
              case 2:
                return "-69px -346px"
                default:
                  return "-6px -346px"
            }
          }};
          width: 20px;
          height: 19px;
          &:hover{
            background-position:${props=>{
            switch(props.switchover){
              case 1:
              return "-96px -251px"
              case 2:
                return "-96px -346px"
                default:
                  return "-36px -346px"
            }
          }};
          }
        }
        .list{
          background-position:-45px -71px;
          width: 56px;
	        height: 23px;
          position: relative;
          .listCount{
            color:#5c5c5c;
            position:absolute;
            height:16px;
            left:23px;
            top:1px;
          }
          &:hover{
            background-position: -45px -101px;
            width: 56px;
	          height: 23px;
          }
        }
      }
    }
  }
`