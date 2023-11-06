import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
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
font-size:20px;
margin-top: 20px;
font-weight: 400;
`;



const Dob=styled.div`
width: 100%;
line-height: 1.5;
letter-spacing: 0.5px;
align-items: center;
font-size: 15px;
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

function Privacy() {
  return (
    <Wrapper>
        <Heading>Privacy</Heading>
        <Subheaing>Nike Run Club and Nike Training Club</Subheaing>
        <Dob>Use my workout data to give me adaptive training plans, personalised product recommendations and special event invitations.</Dob>
        <div style={{display:"flex",margin:"30px 10px 30px 10"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Use Workout Data</div></div>
        <Dob style={{color:"gray"}}>Your privacy settings apply across all Nike apps. When you change your settings in one app, they will change in the others. For more information visit our Privacy Policy page.</Dob>
        <div style={{width:"100%",display:"flex",justifyContent:"end"}}>
        <Delete1>
                Save
        </Delete1>
        </div>
    </Wrapper>
  )
}

export default Privacy