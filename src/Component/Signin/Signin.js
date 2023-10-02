import React from 'react'
import styled from 'styled-components'
import { SiJordan,SiNike} from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom';


const Wrapper=styled.div`
display: flex;
justify-content: space-between;
`;
const Logo=styled.div`
display: flex;
margin: 25px 0;
`;
const Heading=styled.div`
font-size: 30px;
`;
const C=styled.div`
display: flex;
margin-top: 15px;
margin-bottom: 35px;
`;
const Contry=styled.div`
padding-right: 10px;
`;
const Change=styled.div`
color: gray;
`;
const Privacy=styled.div`
color: gray;
`;


const P=styled.div`
display: flex;
margin-top: 50px;
`;

const Button= styled.button`
 background-color: black;
 font-weight: 500;
 font-size: 15px;
 color: white;
 width: 110px;
 height: 45px;
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


function Signin() {
    let navigate = useNavigate();
  return (
    <Wrapper>
        <div></div>
        <div>
            <Logo>
              <SiNike style={{height:"50px",width:"50px",paddingRight:"10px"}} />
              <SiJordan style={{height:"40px",width:"40px"}} />
            </Logo>
            <Heading> Enter your email to join us or sign in. </Heading>
           <C>
            <Contry> India </Contry> 
            <Change>Change</Change> 
           </C> 
           <input type='email' placeholder='Email'  style={{marginTop:"5px",border:"1px solid black",borderRadius:"10px",height:"55px",fontSize:"18px",width:"90%",padding:"5px 20px"}}/>
            <P><Privacy>By continuing, I agree to Nike's <Link style={{fontWeight:"500",color:"gray"}} >Privacy Policy</Link> and</Privacy></P>
            <Link style={{fontWeight:"500",color:"gray"}}>Terms of Use.</Link>
            <div style={{justifyContent:"end", display: "flex", margin:"30px 0"}}><Button onClick={()=>{navigate("/Password")}}>Continue</Button></div>

        </div>
        <div></div>
    </Wrapper>
  )
}

export default Signin