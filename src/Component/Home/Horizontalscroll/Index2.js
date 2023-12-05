import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
width: 100%;
height: 290px;
overflow-x:auto;
overflow-y: hidden;
white-space: nowrap;
/* margin-left: 45px; */
/* margin-right: 45px; */
display: flex;
margin-bottom: 90px;
&:hover{
  cursor: pointer;
}

`;
const Main = styled.div`
padding-right: 15px;
`;
const Image = styled.img`
background-size: cover;
height: 242px;
padding-bottom: 10px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`;
const Container = styled.div`

`;

const Text = styled.div`
color:black;
padding-bottom: 5px;
`;

function Index(props) {
  const navigate = useNavigate();
  return (
    <Div>
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Subtitle,SubHeading:props.Text}})}}>
        <Image src={props.img}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text}</Text>
           
          </Container>
          
        </Wrapper>
      </Main>
        
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Subtitle2,SubHeading:props.Text2}})}}>
        <Image src={props.img2}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text2}</Text>
            
          </Container>
          
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Subtitle3,SubHeading:props.Text3}})}}>
        <Image src={props.img3}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text3}</Text>
            
          </Container>
         
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product" ,{state:{MHeading1:props.Subtitle4,SubHeading:props.Text4}})}}>
        <Image src={props.img4}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text4}</Text>
            
          </Container>
          
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Subtitle5,SubHeading:props.Text5}})}}>
        <Image src={props.img5}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text5}</Text>
          </Container>
         
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Subtitle6,SubHeading:props.Text6}})}}>
        <Image src={props.img6}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text6}</Text>
          </Container>
        </Wrapper>
      </Main>      
    </Div>
  );
}

export default Index;
