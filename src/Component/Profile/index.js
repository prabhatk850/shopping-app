import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from './Head';
import Intrest from './Intrest';


const Wrapper=styled.div`
/* filter: blur(${({toggle})=>(toggle?("0px"):("5px"))}); */
`;
const Name=styled.div`
font-size: 35px;
`;
const Member=styled.div`
color: gray;
font-size: 18px;
`;
const Img=styled.div`
border-radius: 50px;
height: 100px;
width: 100px;
background-color: aqua;
margin: 0 20px 0 5px;
`;

function Index() {
    const [toggle,SetToggle]=useState(false)
    const toggleIntrest=()=>{
        SetToggle(!toggle)
    }
  return (
    <Wrapper>
        <Header/>
        {toggle?<Intrest/>:""}
        <div style={{margin:" 50px"}}>
            <Head/>
            <div style={{display:"flex",alignItems:"center"}}>
                <Img></Img>
                <div>
                    <Name onClick={toggleIntrest} >Prabhat Kumar verma</Name>
                    <Member>Nike Member Since July 2022</Member>
                </div>
            </div>
        </div>
        <Footer/>
    </Wrapper>
  )
}

export default Index