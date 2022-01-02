import styled from "styled-components";
export const SubBannerDiv = styled.div`
  width:689px;
  padding:0 10px 0 34px;
  position:relative;
  border-bottom:2px #c10d0c solid;
  .hotCircle{
    position:absolute;
    left:10px;
    top:8px;
  }
  .arrow{
    position:absolute;
    right:12px;
    top:12px;
  }
  a{
    display:inline-block;
    padding:0 14px 0 14px;
  }
  a.title{
    font-size:20px;
    padding:0 5px 0 0;
    color:black;
  }
  a.more{
    display:inline-block;
    position:absolute;
    right:12px;
    top:8px;
  }
`