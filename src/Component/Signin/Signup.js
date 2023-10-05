import React, { useState } from 'react'
import styled from 'styled-components'
import { SiJordan,SiNike} from 'react-icons/si'
import { LuRefreshCw} from 'react-icons/lu'
import { FiEye,FiEyeOff} from 'react-icons/fi'
import { IoIosArrowDown} from 'react-icons/io'
import { FiCalendar} from 'react-icons/fi'
import { BsCheck2} from 'react-icons/bs'
import { RxCross2} from 'react-icons/rx'
import { Link,useNavigate ,useLocation } from 'react-router-dom';
import { signUp } from '../Service/Auth'


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
margin-bottom: 20px;
`;

const Title=styled.div`

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
width: 93%;
border-radius: 10px;
border: 1px solid black;
margin-bottom: 15px;
height:65px;
`;

const Select=styled.select`
border:none;
outline:none;
border-radius:10px;
height:54px;
font-size:18px;
width:93%;
padding:5px 20px;
margin:"15px 0 15px 0";
color: gray;
appearance: none;
`;
const Choice=styled.option`
color: gray;
`;
const Error=styled.div`
color: red;
display: flex;
padding-bottom: 10x;
`;
const Success=styled.div`
color: green;
display: flex;
padding-bottom: 10x;
`;
const Terms=styled.div`
display: flex;
padding-bottom: 20px;

`;
const P=styled.div`
display: flex;

`;
const Button= styled.button`
 background-color: black;
 font-weight: 500;
 font-size: 15px;
 color: white;
 width: 140px;
 height: 50px;
 border-radius: 30px;
 align-items: center;
 border: none;
 outline: none;
 margin: 10px 0;
 &:hover{
    background-color: gray;
    cursor: pointer;
}

 `;



function Signup() {
    let navigate = useNavigate();
    const {state} = useLocation();
    
    const [error,setError]=useState(false)
    const [fname,setFname]=useState("")
    const [password,setPassword]=useState("")
    const [lname,setLname]=useState("")
    const [dob,setDob]=useState("")
    const [preference,setPrefrence]=useState("Men's")
    const {email}= state
  
    
     
    const handlePassword=()=>{
        const data={
            "firstname":fname,
            "lastname":lname,
            "password":password,
            "email":email,
            "preference":preference,
            "dob":dob
        }
        signUp(data)
        navigate("/")
        
     }

     

  return (
    <Wrapper>
        <div></div>
        <div>
        <Logo>
            <SiNike style={{height:"50px",width:"50px",paddingRight:"10px"}} />
            <SiJordan style={{height:"40px",width:"40px"}} />
        </Logo>
        <Heading> Now let's make you a Nike Member. </Heading>
        <Title>We've Sent a code to</Title>
        <Email>
            <FetchedEmail>
                FetchedEmail@gmail.com
            </FetchedEmail>
            <Edit onClick={()=>{navigate("/signin")}} >
                Edit
            </Edit>
        </Email>
        <Div>
        <input type='text' placeholder='Code'  style={{marginTop:"5px",border:"none",outline:"none",borderRadius:"10px",height:"54px",fontSize:"18px",width:"80%",padding:"5px 20px",margin:"0 0 15px 0"}}/>
        <LuRefreshCw style={{height:"22px",width:"22px",padding:"0 0 0 20px",marginTop:"20px"}}/>
        </Div>
        <div style={{display:"flex", marginBottom:"15px"}}>
           <input type='text' value={fname} onChange={(e)=>{setFname(e.target.value)}} placeholder='First Name'  style={{marginTop:"5px",border:"1px solid black",outline:"none",borderRadius:"10px",height:"54px",fontSize:"18px",width:"37%",padding:"5px 20px",marginRight:"12px"}}/>
           <input type='text' value={lname} onChange={(e)=>{setLname(e.target.value)}} placeholder='Surname'  style={{marginTop:"5px",border:"1px solid black",borderRadius:"10px",height:"54px",fontSize:"18px",width:"37%",padding:"5px 20px"}}/>
        </div>
        <Div>
        <input type='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'  style={{marginTop:"5px",border:"none",outline:"none",borderRadius:"10px",height:"54px",fontSize:"18px",width:"80%",padding:"5px 20px",margin:"0 0 15px 0"}}/>
        <div style={{marginTop:"20px"}} >
            <FiEye style={{height:"22px",width:"22px",padding:"0 0 0 20px"}} />
        </div>
        </Div>
        <div style={{marginBottom:"20px"}} >
        <div style={{color:"gray",fontSize:"12px",margin:"0px 0 10px 25px"}}> {error?<Error><RxCross2 style={{height:"17px",width:"17px",marginRight:"5px"}}/> <div>Minimum of 8 characters</div></Error>:<Success><BsCheck2 style={{height:"17px",width:"17px",marginRight:"5px"}} /><div>Minimum of 8 characters</div></Success>} </div>
        <div style={{color:"gray",fontSize:"12px",marginLeft:"25px"}}> {error?<Error><RxCross2 style={{height:"17px",width:"17px",marginRight:"5px"}}/> <div>Uppercase, lowercase letters and one number</div></Error>:<Success><BsCheck2 style={{height:"17px",width:"17px",marginRight:"5px"}} /> <div>Uppercase, lowercase letters and one number"</div></Success>} </div>   
        </div> 
        <Div>
        <Select value={preference} onChange={(e)=>{setPrefrence(e.target.value)}} >
            <Choice disabled selected hidden>Shopping Prefrence</Choice>
            <Choice>Men's</Choice>
            <Choice>Women's</Choice>
        </Select>
        <IoIosArrowDown style={{height:"22px",width:"22px",marginTop:"20px"}}/>
        </Div>
        <Div>
        <input type='date' value={dob} onChange={(e)=>{setDob(e.target.value)}} placeholder='Date of Birth'  style={{marginTop:"5px",border:"none",outline:"none",borderRadius:"10px",height:"54px",fontSize:"18px",width:"100%",padding:"5px 15px",margin:"0 0 15px 0"}}/>
        {/* <FiCalendar style={{height:"22px",width:"22px",padding:"0 0 0 20px",marginTop:"20px"}}/> */}
        </Div>
        <div style={{color:"gray",fontSize:"12px",margin:"15px 25px"}}>Get a Nike Member Reward on your birthday.</div>
        <Terms>
        <input style={{height:"20px",width:"20px",margin:"0 20px 0 0"}} type='checkbox'></input>
        <div style={{width:"400px"}}>Sign up for emails to get updates from Nike on products, offers and your Member benifits </div>
        </Terms>
        <Terms>
        <input style={{height:"20px",width:"20px",margin:"0 20px 0 0"}} type='checkbox'></input>
        <P><div style={{width:"400px"}}>I agree to Nike's <Link style={{fontWeight:"500",color:"gray"}} >Privacy Policy</Link> and <Link style={{fontWeight:"500",color:"gray"}}>Terms of Use.</Link></div> </P>
        </Terms>
        <div style={{width:"460px",justifyContent:"right", display: "flex", margin:"30px 0"}}>
            <Button  onClick= {handlePassword}>Create Account</Button>
        </div>

        </div>
        <div></div>
    </Wrapper>
  )
}

export default Signup