import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { IoIosArrowDown} from 'react-icons/io'


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

function ShoppingPref() {

    const [preference,setPrefrence]=useState("4")

  return (
    <Wrapper>
        <Heading>Shopping Preference</Heading>
        <Ttile>Shoes Size</Ttile>
        <Div>
        <Select value={preference} onChange={(e)=>{setPrefrence(e.target.value)}} >
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
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' type='radio'></input><div style={{marginLeft:"15px"}}>Men's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' type='radio'></input><div style={{marginLeft:"15px"}}>Women's</div></div>
        <Ttile>Additional Preferences</Ttile>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Men's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Women's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Men's</div></div>
        <div style={{display:"flex",margin:"10px"}}> <input style={{height:"20px",width:"20px"}} type='checkbox'></input><div style={{marginLeft:"15px"}}>Women's</div></div>
        
    </Wrapper>
  )
}

export default ShoppingPref