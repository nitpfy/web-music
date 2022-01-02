import styled from "styled-components";
export const AlbumSpan = styled.span`
  display:inline-block;
  position:relative;
  width:118px;
  height:140px;
  margin:0 11px 0 0;
  &:hover{
    .playicon{
      display:block;
  }
  }
  .cover{
    position:absolute;
    width:118px;
    height:100px;
    top:0;
    left:0;
  }
  .playicon{
    display:none;
    position:absolute;
    right:23px;
    bottom:43px;
    cursor: pointer;
  }
  .albumName{
    position:absolute;
    width:100px;
    left:0;
    bottom:15px;
    font-size:12px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align:start;
  }
  .artist{
    position:absolute;
    width:100px;
    left:0;
    bottom:0px;
    font-size:12px;
    color:#666666;
    text-align:start;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`