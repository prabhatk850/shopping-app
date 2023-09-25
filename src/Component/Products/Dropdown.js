import React from 'react'
import styled from 'styled-components'

const Wrapper= styled.div`
padding-left: 2px;
`;
const Heading= styled.div`
font-weight:500;
padding-top: 10px;

font-size: 18px;
`;
const Button=styled.button`
height: 20px;
width: 20px;
  border: 4px;
  border-color: aqua;
  border-radius: 4px;
  cursor: pointer;
  
`;

function Dropdown(props) {
  return (
    <Wrapper>
        <Heading>
            Gender
        </Heading>
        <Button type='checkbox' ></Button>
    </Wrapper>
  )
}

export default Dropdown