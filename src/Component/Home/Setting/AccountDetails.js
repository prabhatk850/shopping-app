import React from 'react'
import styled from 'styled-components';

const Wrappers=styled.div`
width: 100%;
margin-top: 100px;
`;
const Heading=styled.div`
font-size:20px;
margin-top: 50px;
font-weight: 400;
`;
const Email=styled.div`
width: 40%;
height: 50px;
border: 1px solid gray;
border-radius: 5px;
margin: 20px 0;
`;
const Head=styled.div``;
const Password=styled.div`
width: 40%;
height: 50px;
display: flex;
justify-content: space-between;
`;
const Edit=styled.div``;
const Div=styled.div``;

function AccountDetails() {
  return (
    <Wrappers>
        <Heading>Account Details</Heading>
        <Email> <input style={{width:"90%",margin:"0 0 0 10px",height:"50px",border:"none",outline:"none",fontSize:"20px"}} type='Email' placeholder='Email' ></input>  </Email>
        <Head>Password</Head>
        <Password> <input type='password' ></input> <Edit>Edit</Edit> </Password>
    </Wrappers>
  )
}

export default AccountDetails