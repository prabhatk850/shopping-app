import React, { useEffect , useState } from 'react'
import styled from 'styled-components';
import { getUserDetails } from '../../Service/Profile';

const Wrappers=styled.div`
width: 100%;
margin: 50px 0;
`;
const Heading=styled.div`
font-size:20px;
margin-top: 50px;
font-weight: 400;
`;
const Email=styled.div`
width: 40%;
padding-left: 10px;
align-items: center;
display: flex;
font-size: 15px;
height: 50px;
border: 1px solid gray;
border-radius: 5px;
margin: 20px 0;
`;
const Head=styled.div`
margin-top: 20px;
`;
const Password=styled.div`
width: 40%;
height: 50px;
display: flex;
justify-content: space-between;

`;
const Phone=styled.div`
width: 40%;
height: 50px;
display: flex;
justify-content: space-between;
`;
const Dob=styled.div`
width: 40%;
padding-left: 10px;
align-items: center;
display: flex;
font-size: 15px;
height: 50px;
border: 1px solid gray;
border-radius: 5px;
margin: 20px 0;
opacity: 0.4;
pointer-events: none;
`;

const Edit=styled.div`
display: flex;
align-items: center;
&:hover{
    cursor: pointer;
    color: gray;
}
`;
const Delete=styled.div`
height: 20px;
border:  1px solid #f5f5f5;
border-radius: 15px;
padding: 5px 15px;
&:hover{
    cursor: pointer;
    border:  1px solid #f5f5f5;
    background-color: #f5f5f5;
}
`;
const Delete1=styled.div`
height: 20px;
background-color: black;
color: white;
border:  1px solid #f5f5f5;
border-radius: 15px;
padding: 5px 15px;
&:hover{
    cursor: pointer;

    border:  1px solid gray;
    background-color: gray;
}
`;


function AccountDetails() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        phoneNumber: "",
        dob: "",
    });
    useEffect(() => {
        getUserDetails().then((result)=>{
            setUserDetails(result.data)

    })}, [])
  return (
    <Wrappers>
        <Heading>Account Details</Heading>
        <Email>{userDetails?.email}</Email>
        <Head>Password</Head>
        <Password> <input type='password' placeholder='...............' disabled style={{border:"none",outline:"none",backgroundColor:"white",fontSize:"20px"}} ></input> <Edit>Edit</Edit> </Password>
        <Head>Phone no.</Head>
        <Phone> <input type='text' disabled placeholder='Phone Number' value={userDetails?.phoneNumber} style={{border:"none",outline:"none",backgroundColor:"white"}} ></input> <Edit>Edit</Edit> </Phone>
        <Head>Date of Birth</Head>
        <Dob>{userDetails?.dob}</Dob>
        <Head>Location</Head>
        <Email> <input type='text' placeholder='Country' value={userDetails?.country} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <Email> <input type='text' placeholder='State' value={userDetails?.state} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <Email> <input type='text' placeholder='District' value={userDetails?.city} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <Email> <input type='number' placeholder='Postle Code' value={userDetails?.postalcode} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <div style={{borderBottom:"1px solid lightgray",marginBottom:"20px",width:"41%"}}></div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",width:"40%" }}>
            <div>
                Delete Account
            </div>
            <Delete>
                Delete
            </Delete>
        </div>
        <div style={{borderBottom:"1px solid lightgray",marginBottom:"20px",width:"41%"}}></div>
        <div style={{width:"40%",display:"flex",justifyContent:"end"}}>
        <Delete1 >
                Save
        </Delete1>
        </div>
        
    </Wrappers>
  )
}

export default AccountDetails