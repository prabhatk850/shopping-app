import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

 const Img =styled.img`
 width: 100%;
 height: 700px;
 &:hover{
    
    cursor: pointer;
}

 `;

 const Wrapper=styled.div`
 &:hover{
    cursor: pointer;
}
`;
 
 const SubTitle=styled.div`
 font-size: 18px;
 text-align: center;
 padding-bottom: 20px;
 &:hover{
   
    cursor: pointer;
}

 `;
 
 const Title=styled.div`
 text-align: center;
 padding: 40px 0 30px 0;
 font-size: 80px;
 font-weight: 900;
 &:hover{
    
    cursor: pointer;
}

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
 &:hover{
    background-color: gray;
    cursor: pointer;
}

 `;

function Index(props) {
    
  let navigate = useNavigate();
  return (
    <Wrapper onClick={()=>{navigate("/product")}}>
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
    <div style={{justifyContent:"center", display: "flex", marginBottom:"30px"}}><Button>Shop</Button></div>


    </Wrapper>
  )
}

export default Index