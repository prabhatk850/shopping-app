import React, { useState } from 'react'
import styled from 'styled-components'
import { SiJordan,SiNike} from 'react-icons/si'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { FiEye,FiEyeOff} from 'react-icons/fi'
import { MdErrorOutline} from 'react-icons/md'
import { Login, doLoggedIn } from '../Service/Auth';


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

const Invalid=styled.div`
display: flex;
background-color: #F5F5F5;
padding: 15px 10px;
height: 20px;
margin-bottom: 20px;
border-radius: 10px;
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
    const {state} = useLocation();


    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    
    const {email}= state

    const clearState=()=>{
        setPassword("")
            navigate("/")
      }

    
    const handleLogin=()=>{
        const data={"email":email,"password":password}
        Login(data).then((result)=>{
            console.log("login",result)
            if (result.data) {
                localStorage.setItem('token', result.data);
              } else {
                throw new Error('Token not found');
              }

            if(result.data==="Invalid password"){
                setError(true)
            }else{
                doLoggedIn(result.data,clearState)
            }
        })
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
                {email}
            </FetchedEmail>
            <Edit onClick={()=>{navigate("/signin")}} >
                Edit
            </Edit>
        </Email>
        {error? <Invalid>
            <MdErrorOutline style={{height:"20px",width:"20px",marginRight:"10px",color:"red"}} />
            <div>Your credentials are invalid</div>
        </Invalid>:""}
        
        <Div>
        <input type='Password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}  style={{marginTop:"5px",border:"none",outline:"none",borderRadius:"10px",height:"45px",fontSize:"18px",width:"100%",padding:"5px 20px",margin:"0 0 15px 0"}}/>
        <div style={{marginTop:"20px"}}>
            <FiEye style={{height:"22px",width:"22px",padding:"0 10px 0 0px"}} />
        </div>
        </Div>
            <Link style={{fontWeight:"500",color:"gray"}}>Forgot your Password?</Link>
            <div style={{justifyContent:"end", display: "flex", margin:"20px 0"}}><Button onClick={handleLogin}>Sign In</Button></div>

        </div>
        <div></div>
    </Wrapper>
  )
}

export default Password