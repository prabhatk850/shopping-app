import React from 'react'
import styled from 'styled-components'


const Image= styled.div`
height: 700px;
background-color:aqua;
`;
const Main= styled.div`
display: flex;
justify-content: space-between;

`;
const Wrapper= styled.div`

`;
const SubTitle=styled.div`
font-size: 18px;
padding-left: 30px;
padding-bottom: 20px;
`;

const Title=styled.div`
padding: 40px 0 30px 30px;
font-size: 15pxpx;

`;
const Button= styled.button`
background-color: White;
color: black;
width: auto;
height: 40px;
border-radius: 30px;
/* align-items: center; */
border: none;
outline: none;
margin: 20px 0;
`;

function index(props) {
  return (
    <Main>
    <div style={{width:"45px"}}></div>
    <Wrapper>
    <Image style={{backgroundImage:(props.img)}}>
        <Title>
        {props.Title}
        </Title>
        <SubTitle>
        {props.SubTitle}    
        </SubTitle>
            <div style={{ marginBottom:"30px", marginLeft:"30px"}}><Button style={{padding:"0 20px 0 20px"}} >{props.button}</Button></div>
    </Image>
    </Wrapper>
    <div style={{width:"20px"}}></div>
    <Wrapper>
    <Image style={{backgroundImage:(props.img2)}}>
        <Title>
        {props.Title2}
        </Title>
        <SubTitle>
        {props.SubTitle2}    
        </SubTitle>
            <div style={{marginBottom:"30px",marginLeft:"30px"}}><Button style={{padding:"0 20px 0 20px"}} >{props.button2}</Button></div>
        </Image>
    </Wrapper>
    <div style={{width:"45px"}}></div>
    </Main>
  )
}

export default index