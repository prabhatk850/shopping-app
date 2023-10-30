import React from 'react'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'

const W =styled.div`
border-radius: 15px;
width:30%;
background-color: white;
border: solid 1px black ;
top: 0;
bottom: 0;
left: 0;
right: 0;
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
border: solid 1px black;
border-radius:25px;
margin: 10px;
font-size: 18px;
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

function Intrest() {
  return (
    <W>
        <div style={{margin:"30px 50px",display:"flex",justifyContent:"space-between"}}>
        <Headding>Select Your Interests</Headding>
        <Close><AiOutlineClose style={{width:"20px",height:"20px",padding:"5px 5px"}} /></Close>
        </div>
        <div style={{display:"flex",overflowX:"auto"}}>
            <Div>All</Div>
            <Div>Sports</Div>
            <Div>Products</Div>
            <Div>Teams</Div>
            <Div>Athletes</Div>
            <Div>Cities</Div>
        </div>

        <div style={{height:"1px",backgroundColor:"gray"}}></div>
        
        <div style={{margin:"0px 50px",overflowY:"scroll",height:"310px"}}>
        <Flex>
            <Flex>
            <Img src='./AF1.jpeg'></Img>
            <Title>Basketball</Title>
            </Flex>
            <input type='checkbox'/>
        </Flex>
        <div style={{height:"1px",backgroundColor:"gray"}}></div>
        <Flex>
            <Flex>
            <Img src='./AF1.jpeg'></Img>
            <Title>Jordans</Title>
            </Flex>
            <input type='checkbox'/>
        </Flex>
        <div style={{height:"1px",backgroundColor:"gray"}}></div>
        <Flex>
            <Flex>
            <Img src='./AF1.jpeg'></Img>
            <Title>SNKRS</Title>
            </Flex>
            <input type='checkbox'/>
        </Flex>
        <div style={{height:"1px",backgroundColor:"gray"}}></div>
        <Flex>
            <Flex>
            <Img src='./AF1.jpeg' ></Img>
            <Title>Training & Gym</Title>
            </Flex>
            <input type='checkbox'/>
        </Flex>
        <div style={{height:"1px",backgroundColor:"gray"}}></div>
        </div>
        <div style={{display:"flex",justifyContent:"end",margin:"20px 50px"}}>
            <Button>Cancel</Button>
            <Button style={{backgroundColor:"black", color:"white"}}>Save</Button>  
        </div>
    </W>
  )
}

export default Intrest