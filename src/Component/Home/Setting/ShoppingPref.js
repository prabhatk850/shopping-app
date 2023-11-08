import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { IoIosArrowDown} from 'react-icons/io'
import { updateProfile } from '../../Service/Profile';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Wrapper=styled.div`
width: 40%;
margin-bottom: 50px;
`;
const Heading=styled.div`
font-size:25px;
margin: 50px 0;
font-weight: 400;
`;
const Ttile=styled.div`
font-size: 18px;
margin: 40px 0 20px 0;
`;

const Div=styled.div`
display: flex;
width: 100%;
border-radius: 10px;
border: 1px solid black;
margin-bottom: 15px;
height:60px;
`;
const Select=styled.select`
border:none;
outline:none;
border-radius:10px;
height:54px;
font-size:18px;
width:90%;
padding:5px 20px;
margin:"15px 0 15px 0";
color: gray;
appearance: none;
`;
const Choice=styled.option`
color: gray;
`;
const Delete1=styled.div`
height: 20px;
margin-top: 20px;
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


function ShoppingPref() {
  
  const updateaddress=()=>{
    const data={
    
        preference:preference,
    }
    updateProfile(data).then((result)=>{
        if(result.status===200){
            toast.success("Address Updated Shopping Preference")
        }else{
            toast.error("Error in updating Shopping Preference")
        }
    })

    setPreference("")
}
const [preference,setPreference]=useState("")
const [shoeSize,setShoeSize]=useState("4")

  return (
    <Wrapper>
        <Heading>Shopping Preference</Heading>
        <Ttile>Shoes Size</Ttile>
        <Div>
        <Select value={shoeSize} onChange={(e)=>{setShoeSize(e.target.value)}} >
            <Choice disabled selected hidden>Shopping Prefrence</Choice>
            <Choice>4</Choice>
            <Choice>5</Choice>
            <Choice>6</Choice>
            <Choice>7</Choice>
            <Choice>8</Choice>
            <Choice>9</Choice>
            <Choice>10</Choice>
        </Select>
        <IoIosArrowDown style={{height:"22px",width:"22px",marginTop:"20px"}}/>
        </Div>
        <Ttile>Shopping Preference</Ttile>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' onChange={(e)=>{setPreference(e.target.value)}} type='radio' defaultChecked></input><div style={{marginLeft:"15px"}}>Men's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' onChange={(e)=>{setPreference(e.target.value)}} type='radio'></input><div style={{marginLeft:"15px"}}>Women's</div></div>
        <Ttile>Additional Preferences</Ttile>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox' defaultChecked></input><div style={{marginLeft:"15px"}}>Men's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Women's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Boys's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Kids's</div></div>
        <div style={{width:"100%",display:"flex",justifyContent:"end"}}>
        <Delete1 onClick={updateaddress}>
                Save
        </Delete1>
        </div>
    </Wrapper>
  )
}

export default ShoppingPref