import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import Favorite from '../Home/Favorite/Index';


const Wrapper=styled.div`
margin: 50px 50px;
display: flex;
justify-content: center;
`;

const Div =styled.div`
padding: 0 20px;
font-size: 16px;
font-weight: 400;
&:hover{
    cursor: pointer;
    color: gray;
}
`;

function Head() {
  const [toggle,SetToggle]=useState(false)
  
  return (
    <div>
        <Wrapper>
            <Div>Profile</Div>
            <Div>Inbox</Div>
            <Div>Orders</Div>
            <Div onClick={()=>{SetToggle(!toggle)}}>Favorites</Div>
            <Div>Settings</Div>
        </Wrapper>
        {toggle?"":<Favorite/>}
    </div>
  )
}

export default Head