import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Content1=styled.div`
margin-right: 150px;
padding-bottom: 15px;
color: gray;
&:hover{
     color: black;
    cursor: pointer;
}

`;
const Wrapper1=styled.div`
display: none;
width: 100%;
`;

const Baap=styled.div`
width: 100%;
margin-bottom: 50px;
&:hover{
    height: 350px;
    
}
&:hover ${Wrapper1}{
   display: block;
}
`;
const Content=styled.div`
margin-right: 150px;
padding-bottom: 15px;
color: gray;
&:hover{
    color: black;
    cursor: pointer;
}

`;


const Wrapper=styled.div`
display: flex;
justify-content: center;
/* position: relative; 
overflow: hidden;  */

`;



const Main=styled.div`
width: 25%;
`;

const Heading=styled.div`
padding-bottom: 20px;
/* margin-right: 150px; */
`;



function Hiddendiv() {
    const navigate = useNavigate();
  return (
    <Baap>
    <Wrapper>
        <div style={{minWidth:"10%"}} ></div>
        <Main>
            <Heading >
                Icons
            </Heading>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Air Force 1"}})}}>
                Air Force 1
            </Content >
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Huarahe "}})}}>
                Huarahe     
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Air Force 90"}})}}>
                Air Force 90
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Air Force 95"}})}}>
        Air Force 95
    </Content>
        </Main>
        <Main>
            <Heading>
                Shoes
            </Heading>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"All Shoes"}})}}>
                All Shoes
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Custom Shoes"}})}}>
                Custom Shoes
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Jordan Shoes"}})}}>
                Jordan Shoes
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Running Shoes"}})}}>
        Running Shoes
    </Content>
        </Main>
        <Main>
            <Heading>
                Clothing
            </Heading>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"All Clothing"}})}}>
                All Clothing
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Modest Wear"}})}}>
                Modest Wear
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Hoodies & Pullovers "}})}}>
                Hoodies & Pullovers
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Shirt & Tops"}})}}>
        Shirt & Tops
    </Content>
        </Main>
        <Main>
            <Heading>
               Kids'
            </Heading>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Infant & Toddler Shoes"}})}}>
                Infant & Toddler Shoes
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Shoes"}})}}>
                Kids' Shoes
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Jordan Shoes"}})}}>
                Kids' Jordan Shoes
            </Content>
            <Content onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Basketball Shoes"}})}}>
        Kids' Basketball Shoes
    </Content>
        </Main>

    </Wrapper>



<Wrapper1>
<div style={{display:"flex",justifyContent:"center"}}>
<div style={{minWidth:"10%"}}></div>
<Main >
    
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Air Max 97"}})}}>
        Air Max 97
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Air Max 270"}})}}>
        Air Max 270
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Air Max 720"}})}}>
        Air Max 720
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"All Air Max"}})}}>
        All Air Max
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Icons",SubHeading:"Vapormax"}})}}>
        Vapormax
    </Content1>
</Main>
<Main>
    
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Basketball Shoes"}})}}>
       Basketball Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Football Shoes"}})}}>
        Football Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Gym & Training Shoes"}})}}>
        Gym & Trainging Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Shoes",SubHeading:"Lifestyle Shoes"}})}}>
        Lifestyle Shoes
    </Content1>
</Main>
<Main>
    
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Jackets"}})}}>
        Jackets
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Compression & Nike Pro"}})}}>
    Compression & Nike Pro
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Trouser and Leggings"}})}}>
    Trousers & Leggings
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Clothing",SubHeading:"Shorts"}})}}>
       Shorts
    </Content1>
</Main>
<Main>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Running Shoes"}})}}>
       Kid's Running Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Clothing "}})}}>
       Kid's Clothing
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Backpacks"}})}}>
    Kid's Backpacks
    </Content1>
    <Content1 onClick={()=>{navigate("/product",{state:{MHeading1:"Kids",SubHeading:"Kid's Socks"}})}}>
    Kid's Socks
    </Content1>    
</Main>

</div>

</Wrapper1>
</Baap>
  )
}

export default Hiddendiv