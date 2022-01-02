import styled from 'styled-components'
export const HotRecommednDiv = styled.div`
  margin:auto;
  width:983px;
  display:flex;
  justify-content:center;
  .left{
    padding:20px 20px 40px 20px;
    position:relative;
    width:732px;
    height:1425px;
    background-color:#ffffff;
    border:#d3d3d3 1px solid;
  }
  .right{
    width:251px;
    height:1425px;
    background-color:#ffffff;
  }
  .contentmusic{
    width:689px;
    margin:20px 0 20px 0;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    
  }
`

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`