import React from 'react'
import Sidebar from "./Sidebar"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
`;

const Subimage = styled.div`
display: flex;
height: 30px;
width: 30px;
`;
const Simg = styled.div`
 background-color: aqua;
`;

const Heading = styled.div`
color: #9E3401;
font-weight: 500;
padding-bottom: 8px;
`;
const Image = styled.div`
height:350px;
width: 350px;

padding-bottom: 10px;
`;
const Name = styled.div`
padding-bottom: 5px;
font-weight: 500;

`;
const Colourways = styled.div`
color: gray;
padding-bottom: 8px;

`;
const Type = styled.div`
color: gray;
padding-bottom: 5px;
`;
const Price = styled.div`
font-weight: 500;
padding-bottom: 8px;
`;
const Div = styled.div`
height: 520px;
&:hover ${Name}  {
  display: none;
}
&:hover ${Type}  {
  display: none;
}
&:hover ${Colourways}  {
  display: none;
}
`;

function Product(props) {
  return (
    
    <Wrapper>
        <Sidebar C1={"Training & Gym"} C2={"Baseball"} C3={"Nike By you"} />
        <Div>
          <Image style={{backgroundImage: `url(${props.Img})`, backgroundSize:"cover"}}></Image>
          <Subimage>
           
            <Simg  style={{backgroundImage: `url(${props.Logo})`, backgroundSize:"cover"}}></Simg>
            <Simg  style={{backgroundImage: `url(${props.Logo2})`, backgroundSize:"cover"}}></Simg>
            
            
          </Subimage>
          <Heading>{props.Heading}</Heading>
          <Name>{props.Name}</Name>
          <Type>{props.Type}</Type>
          <Colourways>{props.Colourways}</Colourways>
          <Price>MRP: ₹ {props.Price}.00</Price>
        </Div>
        
    </Wrapper>
  )
}

export default Product