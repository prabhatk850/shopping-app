import React from 'react'
import styled from 'styled-components'

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
  return (
    <div>
        <Wrapper>
            <Div>Profile</Div>
            <Div>Inbox</Div>
            <Div>Orders</Div>
            <Div>Favorites</Div>
            <Div>Settings</Div>
        </Wrapper>
    </div>
  )
}

export default Head