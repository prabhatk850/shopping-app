import React, { useState } from 'react'
import styled from 'styled-components'
import { SiJordan,SiNike} from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom';
import { FiEye,FiEyeOff} from 'react-icons/fi'


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
width: 450px;
`;
const Email=styled.div`
display: flex;
margin-top: 10px;
margin-bottom: 25px;
`;
const FetchedEmail=styled.div`
padding-right: 10px;
`;
const Edit=styled.div`
color: gray;
text-decoration-line: underline;

&:hover{
    cursor: pointer;
}
`;
const Div=styled.div`
display: flex;
width: 100%;
border-radius: 10px;
border: 1px solid black;
margin-bottom: 15px;
height:60px;
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

function Password() {
    let navigate = useNavigate();

    const [password,setPassword]=useState(true)
     
    const handlePassword=()=>{
        setPassword(!password)
     }


  return (
    <Wrapper>
        <div></div>
        <div>
            <Logo>
              <SiNike style={{height:"50px",width:"50px",paddingRight:"10px"}} />
              <SiJordan style={{height:"40px",width:"40px"}} />
            </Logo>
            <Heading>What's Your Password </Heading>
            <Email>
            <FetchedEmail>
                FetchedEmail@gmail.com
            </FetchedEmail>
            <Edit onClick={()=>{navigate("/signin")}} >
                Edit
            </Edit>
        </Email>
        <Div>
        <input type='Password' placeholder='Password'  style={{marginTop:"5px",border:"none",outline:"none",borderRadius:"10px",height:"45px",fontSize:"18px",width:"100%",padding:"5px 20px",margin:"0 0 15px 0"}}/>
        <div style={{marginTop:"20px"}}  onClick= {handlePassword}>
            {password ?<FiEye style={{height:"22px",width:"22px",padding:"0 10px 0 0px"}} />: <FiEyeOff style={{height:"22px",width:"22px",padding:"0 10px 0 20px"}} />}
        </div>
        </Div>
            <Link style={{fontWeight:"500",color:"gray"}}>Forgot your Password?</Link>
            <div style={{justifyContent:"end", display: "flex", margin:"20px 0"}}><Button onClick={()=>{navigate("/")}}>Sign In</Button></div>

        </div>
        <div></div>
    </Wrapper>
  )
}

export default Password