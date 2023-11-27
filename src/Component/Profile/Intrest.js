import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'

const W =styled.div`
border-radius: 15px;
width:30%;
height: 550px;
background-color: white;
top: auto;
bottom: 0;
left: 0;
right: 0;
z-index: 20;
border :solid .5px #f5f6f7; 
margin:7% auto;
position: absolute;
::-webkit-scrollbar{
    display: none;
}

`;

const Div =styled.div`
padding: 10px 15px;
font-size: 20px;
`;
const Flex =styled.div`
margin: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Title =styled.div`
padding-left: 20px;
`;
const Img =styled.img`
height:50px;
width: 50px;
`;
const Button =styled.div`
padding: 10px 15px;
border: solid 1px #F5F6F7;
border-radius:25px;
margin: 10px;
font-size: 18px;
&:hover{
    border: solid 1px black;
    background-color: #F5F6F7;
}
`;




const Headding=styled.div`
font-size:25px;
font-weight: 500;
`;
const Close = styled.div`
border-radius: 15px;
width: 30px;
height: 30px;
&:hover{
    background-color: gray;
}
`;

function Intrest({SetToggle,toggle,setClasss}) {

    const dummyData=[
        {
            pic:"./AF1.jpeg",
            tittle:"ACG",
            category:"Products"
    
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Basketball",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Air Force 1",
            category:"Products"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Jordan",
            category:"Products"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"SNKRS",
            category:"Products"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Vollyball",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Football",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Soccer",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Baseball",
            category:"Sports"
    
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Skateboarding",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Golf",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Tennis",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Training & Gym",
            category:"Cities"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Yoga",
            category:"Sports"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Boxing",
            category:"Teams"
        },
        {
            pic:"./AF1.jpeg",
            tittle:"Track & Field",
            category:"Athletes"
        }
    ]

    const [filteredData,setfilteredData]=useState(dummyData)
    const [dataToFilter,setDataToFilter]=useState("All")
    

    const handleClose =()=>{
        SetToggle(!toggle)
        {toggle?setClasss("unblur"):setClasss("blur")}
    }
    const filterFunction=(data)=>{
        console.log("first",filteredData)
        setDataToFilter(data)
    }
    useEffect(()=>{
        
        dataToFilter==="All"?setfilteredData(dummyData):setfilteredData(dummyData.filter((e)=>e.category===dataToFilter))
    },[filterFunction])
  return (
    <W>
        <div style={{margin:"30px 50px",display:"flex",justifyContent:"space-between"}}>
        <Headding>Select Your Interests</Headding>
        <Close><AiOutlineClose  onClick={handleClose} style={{width:"20px",height:"20px",padding:"5px 5px"}} /></Close>
        </div>
        <div style={{display:"flex",overflowX:"auto"}}>
            <Div onClick={()=>{filterFunction("All")}}>All</Div>
            <Div onClick={()=>{filterFunction("Sports")}}>Sports</Div>
            <Div onClick={()=>{filterFunction("Products")}}>Products</Div>
            <Div onClick={()=>{filterFunction("Teams")}}>Teams</Div>
            <Div onClick={()=>{filterFunction("Athletes")}}>Athletes</Div>
            <Div onClick={()=>{filterFunction("Cities")}}>Cities</Div>
        </div>

        <div style={{height:"1px",backgroundColor:"#F5F5F5"}}></div>
        <div style={{margin:"0px 50px",overflowY:"scroll", height:"300px"}}>
        {filteredData.map((e)=>(
            <div>
        <Flex>
            <Flex>
            <Img src={e.pic}></Img>
            <Title>{e.tittle}</Title>
            </Flex>
            <input type='checkbox'/>
        </Flex>
        <div style={{height:"1px",backgroundColor:"#F5F6F7"}}></div>
        </div>
        ))}
        </div>
        <div style={{display:"flex",justifyContent:"end",margin:"20px 50px"}}>
            <Button onClick={handleClose} >Cancel</Button>
            <Button onClick={handleClose}  style={{backgroundColor:"black", color:"white"}}>Save</Button>  
        </div>
    </W>
  )
}

export default Intrest