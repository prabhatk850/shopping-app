import React from "react";
import styled from "styled-components";
import {FaLocationDot} from 'react-icons/fa6'
import {SiTwitter,SiFacebook,SiInstagram} from 'react-icons/si'
import {TfiYoutube} from 'react-icons/tfi'

const Baap = styled.div`
/* display: flex; */
/* justify-content: space-between; */
background-color: black;
`;

const Main = styled.div`
display: flex;
justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: black;
  padding: 50px 50px 10px 50px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  
`;

const Wrapper1 = styled.div`
  background-color: black;
  padding: 50px 50px 10px 50px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
 
`;

const Wrapper2 = styled.div`
  background-color: black;
  padding: 50px 50px 10px 50px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
 justify-content: flex-end;
`;


const Container = styled.div``;

const Content = styled.div`
  font-weight: 600;
  color: white;
  padding-bottom: 20px;
  font-size:11px;
  &:hover {
    cursor: pointer;
  }
`;

const SubContent = styled.div`
  color: gray;
  padding-bottom: 20px;
  font-size:11px;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const SubContents = styled.div`
  color: gray;
  padding-bottom: 20px;
  font-size:11px;
  padding: 0 15px ;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <Baap>
    <Main>
      <Wrapper>
        <Container>
          <Content>FIND A STORE</Content>
          <Content>BECOME A MEMBER</Content>
          <Content>Send Us Feedback</Content>
          <Content>STUDENT DISCOUNT</Content>
        </Container>

        <Container>
          <Content>GET HELP</Content>
          <SubContent>Order Status</SubContent>
          <SubContent>Delivery</SubContent>
          <SubContent>Returns</SubContent>
          <SubContent>Payment Options</SubContent>
          <SubContent>Contact Us On Nike.com Inquiries</SubContent>
          <SubContent>Contact Us All Other Inquiries</SubContent>
        </Container>

        <Container>
          <Content>ABOUT NIKE</Content>
          <SubContent>News</SubContent>
          <SubContent>Careers</SubContent>
          <SubContent>Investors</SubContent>
          <SubContent>Sustainability</SubContent>
        </Container>
      </Wrapper>
            
        <Wrapper2>
            <SiTwitter style={{color:"white",paddingRight:"15px",height:"24px",width:"24px"}}/>
            <SiFacebook style={{color:"white",paddingRight:"15px",height:"24px",width:"24px"}}/>
            <TfiYoutube style={{color:"white",paddingRight:"15px",height:"24px",width:"24px"}}/>
            <SiInstagram style={{color:"white",paddingRight:"15px",height:"24px",width:"24px"}}/>
        </Wrapper2> 
    </Main>
    <Main>
    <Wrapper1>
        <FaLocationDot style={{color:"white",paddingRight:"10px",height:"12px",width:"12px"}} />
        <div style={{color:"white",paddingRight:"20px",fontSize:"12px"}}>India</div>
        <SubContent style={{marginTop:"2px"}}>
        © 2023 Nike, Inc. All Rights Reserved
        </SubContent>
      </Wrapper1>
      <Wrapper2>
            <SubContents>Guides</SubContents>
            <SubContents>Terms of Sales</SubContents>
            <SubContents>Terms of Use</SubContents>
            <SubContents>Nike Privacy Policy</SubContents>
        </Wrapper2>
    </Main>
    </Baap>
  );
}

export default Footer;
