import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown';

const Wrapper=styled.div`
padding:0 45px;
`;
const Div=styled.div`
height: 100vh;
width: 225px;
/* background-color:aqua; */
`;

const Content=styled.div`
font-weight:500;
padding-top: 10px;
padding-left: 2px;
font-size: 18px;
`;

function Sidebar(props) {
  return (
    <Wrapper>
        <Div>
          <Content>
            {props.C1}
          </Content>
          <Content>
            {props.C2}
          </Content>
          <Content>
            {props.C3}
          </Content>
          <div style={{height:"2px",width:"90%",margin:"40px 0 0 10px", backgroundColor:"gray"}} ></div>
        <Dropdown/>
        
        </Div>
    </Wrapper>
  )
}

export default Sidebar