import styled from 'styled-components'
export const SongDiv = styled.div`
  .hotmusic{
    position:relative;
    display: inline-block;
    margin:0 0 94px 0;
    .cover{
      position:absolute;
      width:140px;
      height:140px;
      top:0;
      left:0;
    }
    .playcount{
      display:inline-block;
      position:absolute;
      left:0;
      bottom: 0px;
      width:140px;
      height:25px;
      line-height:25px;
      border-bottom:1px solid;
      border-top:1px solid;
      background-color:black;
      opacity:0.5;
      .headset{
        display:inline-block;
        width: 14px;
	      height: 11px;
        margin-left:10px;
        opacity:1;
      }
      .count{
        opacity:1;
        color:white;
        font-size:12px;
      }
      .playicon{
        display:inline-block;
        width: 20px;
	      height: 20px;
        position:absolute;
        right:10px;
        top:2px;
        opacity:1;
        cursor: pointer;
        &:hover{
          background-position:0 -111px;
          width: 21px;
          height: 21px;
        }
      }
    }
    .comment{
      display:inline-block;
      width: 140px;
	    height: 39.19px;
      position:absolute;
      right:0;
      top:150px;
      font-size:14px;
    }
  }
`