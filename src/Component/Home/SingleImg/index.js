import React from 'react'
// import { useNavigate } from "react-rosuter-dom";
import styled from 'styled-components'

 const Img =styled.img`
 width: 100%;
 height: 700px;
 `;

 const Wrapper=styled.div``;
 
 const SubTitle=styled.div`
 font-size: 18px;
 text-align: center;
 padding-bottom: 20px;
 `;
 
 const Title=styled.div`
 text-align: center;
 padding: 40px 0 30px 0;
 font-size: 80px;
 font-weight: 900;
 `;
 const Button= styled.button`
 background-color: black;
 color: white;
 width: 70px;
 height: 40px;
 border-radius: 30px;
 align-items: center;
 border: none;
 outline: none;
 margin: 20px 0;
 `;

function index(props) {
    
    // const navigate = useNavigate();
  return (
    <Wrapper>
    <div style={{display:"flex"}}>
        <div style={{width:"45px"}}></div>
          <Img src={props.url} alt='' />
        <div style={{width:"45px"}}></div>
    </div>
    <Title>
        {props.Title.Title}
    </Title>
    <SubTitle>
        {props.Title.SubTitle}    
    </SubTitle>
    <div style={{justifyContent:"center", display: "flex", marginBottom:"30px"}}><Button >Shop</Button></div>


    </Wrapper>
  )
}

export default index