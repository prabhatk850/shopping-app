import React from 'react'
import styled from 'styled-components'

const Wrapper= styled.div`
width: 50%;
`;
const Heading=styled.div`
display: flex;
width:100%;
justify-content: space-between;
align-items: center;
font-size:25px;
margin-top: 20px;
font-weight: 400;
`;

const Subheaing=styled.div`
display: flex;
width:100%;
justify-content: space-between;
align-items: center;
font-size:18px;
margin-top: 20px;
font-weight: 500;
`;



const Dob=styled.div`
width: 100%;
align-items: center;
font-size: 15px;
height: 50px;
/* border: 1px solid gray; */
border-radius: 5px;
margin: 10px 0;

`;


const Delete1=styled.div`
height: 25px;
margin-top: 20px;
display: flex;
justify-content: end;
background-color: black;
color: white;
border:  1px solid #f5f5f5;
border-radius: 30px;
padding: 6px 15px 0;
&:hover{
    cursor: pointer;

    border:  1px solid gray;
    background-color: gray;
}
`;

function Communicationpref() {
  return (
    <Wrapper>
        <Heading>Communication Preferences</Heading>
        <Subheaing>General Communication</Subheaing>
        <Dob>Get updates on products, offers and your Member benefits.</Dob>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Yes, Send Me Emails</div></div>
        <div style={{width:"100%",display:"flex",justifyContent:"end"}}>
        <Delete1>
                Save
        </Delete1>
        </div>
    </Wrapper>
  )
}

export default Communicationpref