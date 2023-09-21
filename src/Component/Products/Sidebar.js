import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
padding:0 45px;
`;
const Div=styled.div`
height: 100vh;
width: 300px;
background-color:aqua;
`;

function Sidebar() {
  return (
    <Wrapper>
        <Div></Div>
    </Wrapper>
  )
}

export default Sidebar