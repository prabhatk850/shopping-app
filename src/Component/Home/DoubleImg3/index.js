import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const Image= styled.div`
height: 700px;

`;
const Main= styled.div`
margin-bottom: 80px;
display: flex;
justify-content: space-between;

`;
const Wrapper= styled.div`
width: 100%;
&:hover{
   
    cursor: pointer;
}

`;
const SubTitle=styled.div`
font-size: 20px;
padding-left: 47px;
padding-bottom: 30px;
color: black;
&:hover{
    
    cursor: pointer;
}

`;

const Title=styled.div`
padding: 40px 0 8px 49px;
font-size: 18px;
color: black;
&:hover{

    cursor: pointer;
}

`;
const Button= styled.button`
background-color: black;
color: white;
width: auto;
height: 42px;
border-radius: 30px;
border: none;
outline: none;

&:hover{
    background-color: gray;
    cursor: pointer;
}

`;

function Index(props) {

    const navigate=useNavigate();
  return (
    <Main>
    <div style={{width:"90px"}}></div>
    <Wrapper onClick={()=>{navigate("/product",{state:{MHeading1:"MH1",SubHeading:"SH1"}})}}>
    <Image style={{backgroundImage: `url(${props.img})`, backgroundSize:"cover"}}>
       <div style={{paddingTop:"500px"}}>
         <Title>
        {props.Title}
        </Title>
        <SubTitle>
        {props.SubTitle}    
        </SubTitle>
            <div style={{ marginBottom:"30px", marginLeft:"48px"}}><Button style={{padding:"0 29px 0 29px",fontSize:"15px"}} >{props.button}</Button></div>
            </div>
    </Image>
    </Wrapper>
    <div style={{width:"30px"}}></div>
    <Wrapper onClick={()=>{navigate("/product",{state:{MHeading1:"MH2",SubHeading:"SH2"}})}}>
    <Image style={{backgroundImage: `url(${props.img2})`, backgroundSize:"cover"}}>
       <div style={{paddingTop:"500px"}}> <Title>
        {props.Title2}
        </Title>
        <SubTitle>
        {props.SubTitle2}    
        </SubTitle>
            <div style={{marginBottom:"30px",marginLeft:"48px"}}><Button style={{padding:"0 30px 0 30px",fontSize:"15px"}} >{props.button2}</Button></div>
            </div>
        </Image>
    </Wrapper>
    <div style={{width:"90px"}}></div>
    </Main>
  )
}

export default Index