import React from 'react'
import Header from '../../Header/Header'
import styled from 'styled-components';
import Footer from '../../Footer/Footer';
import {FiUser} from 'react-icons/fi';
import {PiPackageLight} from 'react-icons/pi';
import {LuPencilRuler} from 'react-icons/lu';
import {LuMail} from 'react-icons/lu';
import {FiUserCheck} from 'react-icons/fi';
import {FiLink} from 'react-icons/fi';
import {BsShare} from 'react-icons/bs';
import AccountDetails from './AccountDetails';
// import { useNavigate } from 'react-router-dom';

const Wrapper =styled.div`
margin: 0 50px;
`;

const Page=styled.div`
font-size:25px;
margin: 50px 0;
font-weight: 500;
`;
const Div=styled.div`
display:flex;
margin: 30px 0;

`;
const Heading=styled.div`
font-size: 20px;
margin-left: 20px;
`;


function Index() {
  // const navigate = useNavigate();
  return (
    <div>
        <Header/>
            <Wrapper>
            <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"40%",padding:"0 0 0 50px"}}>
        <Page>Settings</Page>
            <Div>
              <FiUser style={{height:"20px",width:"20px"}}/>
              <Heading > Account Details</Heading>
            </Div>
            <Div>
              <PiPackageLight style={{height:"20px",width:"20px"}}/>
              <Heading> Delivery Address</Heading>
            </Div>
            <Div>
              <LuPencilRuler style={{height:"20px",width:"20px"}}/>
              <Heading> Shop Prefrence</Heading>
            </Div>
            <Div>
              <LuMail style={{height:"20px",width:"20px"}}/>
              <Heading> Communication Prefrence</Heading>
            </Div>
            <Div>
              <FiUserCheck style={{height:"20px",width:"20px"}}/>
              <Heading> Privacy</Heading>
            </Div>
            <Div>
              <BsShare style={{height:"20px",width:"20px"}}/>
              <Heading> Profile Visibility</Heading>
            </Div>
            <Div>
              <FiLink style={{height:"20px",width:"20px"}}/>
              <Heading> Linked Accounts</Heading>
            </Div>
            </div>
            <div style={{display:"flex",justifyContent:"",alignItems:"center",width:"70%"}}>
              <AccountDetails/>
            </div>
            </div>
            </Wrapper>

        <Footer/>
    </div>
  )
}

export default Index