import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
width: 50%;
margin:50px 0 ;
`;
const Heading=styled.div`
font-size:25px;
margin: 50px 0;
font-weight: 400;
`;
const Dob=styled.div`
width: 100%;
line-height: 1.5;
letter-spacing: 0.5px;
align-items: center;
font-size: 15px;
/* border: 1px solid gray; */
border-radius: 5px;
margin: 20px 0;
`;

function Linked() {
  return (
    <Wrapper>
        <Heading>Linked Account</Heading>
        <Dob>Manage accounts and services connected to your Nike account.</Dob>
    </Wrapper>
  )
}

export default Linked