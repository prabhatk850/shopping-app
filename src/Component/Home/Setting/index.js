import React,{useState} from 'react'
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
import Address from './Address';
import ShoppingPref from './ShoppingPref';
import Communicationpref from './Communicationpref';
import Privacy from './Privacy';  
import Profile from './Profile';
import Linked from './Linked';
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
&:hover{
    cursor: pointer;
    color: gray;
}
`;


function Index() {
  // const navigate = useNavigate();
  const [toggle,SetToggle]=useState("account-Detail")
  const SideBar=(display)=>{
      SetToggle(display)
  }
  return (
    <div>
        <Header/>
            <Wrapper>
            <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"40%",padding:"0 0 0 50px"}}>
        <Page>Settings</Page>
            <Div>
              <FiUser style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar("account-Detail")}}> Account Details</Heading>
            </Div>
            <Div>
              <PiPackageLight style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar('Delivery-Address')}}> Delivery Address</Heading>
            </Div>
            <Div>
              <LuPencilRuler style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar('Shop-Prefrence')}}> Shop Prefrence</Heading>
            </Div>
            <Div>
              <LuMail style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar('Communication-Prefrence')}}> Communication Prefrence</Heading>
            </Div>
            <Div>
              <FiUserCheck style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar('Privacy')}}> Privacy</Heading>
            </Div>
            <Div>
              <BsShare style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar('Profile-Visibility')}}> Profile Visibility</Heading>
            </Div>
            <Div>
              <FiLink style={{height:"20px",width:"20px"}}/>
              <Heading onClick={()=>{SideBar('Linked-Accounts')}}> Linked Accounts</Heading>
            </Div>
            </div>
            <div style={{display:"flex",justifyContent:"",alignItems:"center",width:"70%"}}>
              {(toggle==="account-Detail")?<AccountDetails/>:""}
              {(toggle==="Delivery-Address")?<Address/>:""}
              {(toggle==="Shop-Prefrence")?<ShoppingPref/>:""}
              {(toggle==="Communication-Prefrence")?<Communicationpref/> :""}
              {(toggle==="Privacy")?<Privacy/>:""}
              {(toggle==="Profile-Visibility")?<Profile/>:""}
              {(toggle==="Linked-Accounts")?<Linked/>:""}
              
              

              

            </div>
            </div>
            </Wrapper>

        <Footer/>
    </div>
  )
}

export default Index