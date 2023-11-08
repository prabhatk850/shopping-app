import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
let navigate = useNavigate();
  
  return (
    <div>
        <Wrapper>
            <Div>Profile</Div>
            <Div>Inbox</Div>
            <Div>Orders</Div>
            <Div onClick={()=>{navigate('/Favorite')}}>Favorites</Div>
            <Div onClick={()=>{navigate("/Setting")}}>Settings</Div>
        </Wrapper>
    </div>
  )
}

export default Head