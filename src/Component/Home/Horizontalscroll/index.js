import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
width: 94%;
height: 550px;
overflow-x:auto;
overflow-y: hidden;
white-space: nowrap;
margin-left: 45px;
margin-right: 45px;
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
height: 442px;
padding-bottom: 10px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`;
const Container = styled.div`

`;
const Container2 = styled.div`

`;
const Text = styled.div`
color:black;
padding-bottom: 5px;
`;

function Index(props) {
  const navigate = useNavigate();
  return (
    <Div>
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Text1,SubHeading:props.Subtext1}})}}>
        <Image src={props.img}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text}</Text>
            <Text style={{color:"gray"}}>{props.Subtext}</Text>
          </Container>
          <Container2>
            <Text style={{fontWeight:"500"}}>{props.Cost}</Text>
          </Container2>
        </Wrapper>
      </Main>
        
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Text2,SubHeading:props.Subtext2}})}}>
        <Image src={props.img2}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text2}</Text>
            <Text style={{color:"gray"}}>{props.Subtext2}</Text>
          </Container>
          <Container2>
            <Text style={{fontWeight:"500"}}>{props.Cost2}</Text>
          </Container2>
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Text3,SubHeading:props.Subtext3}})}}>
        <Image src={props.img3}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text3}</Text>
            <Text style={{color:"gray"}}>{props.Subtext3}</Text>
          </Container>
          <Container2>
            <Text style={{fontWeight:"500"}}>{props.Cost3}</Text>
          </Container2>
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Text4,SubHeading:props.Subtext4}})}}>
        <Image src={props.img4}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text4}</Text>
            <Text style={{color:"gray"}}>{props.Subtext4}</Text>
          </Container>
          <Container2>
            <Text style={{fontWeight:"500"}}>{props.Cost4}</Text>
          </Container2>
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Text5,SubHeading:props.Subtext5}})}}>
        <Image src={props.img5}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text5}</Text>
            <Text style={{color:"gray"}}>{props.Subtext5}</Text>
          </Container>
          <Container2>
            <Text style={{fontWeight:"500"}}>{props.Cost5}</Text>
          </Container2>
        </Wrapper>
      </Main>
      
      <Main onClick={()=>{navigate("/product",{state:{MHeading1:props.Text6,SubHeading:props.Subtext6}})}}>
        <Image src={props.img6}></Image>
        <Wrapper>
          <Container>
            <Text>{props.Text6}</Text>
            <Text style={{color:"gray"}}>{props.Subtext6}</Text>
          </Container>
          <Container2>
            <Text style={{fontWeight:"500"}}>{props.Cost6}</Text>
          </Container2>
        </Wrapper>
      </Main>      
    </Div>
  );
}

export default Index;
