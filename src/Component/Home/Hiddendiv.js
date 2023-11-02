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
            <Heading onClick={()=>{navigate("/product")}}>
                Icons
            </Heading>
            <Content onClick={()=>{navigate("/product")}}>
                Air Force 1
            </Content >
            <Content onClick={()=>{navigate("/product")}}>
                Huarahe     
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Air Force 90
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
        Air Force 95
    </Content>
        </Main>
        <Main>
            <Heading>
                Shoes
            </Heading>
            <Content onClick={()=>{navigate("/product")}}>
                All Shoes
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Custom Shoes
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Jordan Shoes
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
        Running Shoes
    </Content>
        </Main>
        <Main>
            <Heading>
                Clothing
            </Heading>
            <Content onClick={()=>{navigate("/product")}}>
                All Clothing
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Modest Wear
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Hoodies & Pullovers
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
        Shirt & Tops
    </Content>
        </Main>
        <Main>
            <Heading>
               Kids'
            </Heading>
            <Content onClick={()=>{navigate("/product")}}>
                Infant & Toddler Shoes
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Kids' Shoes
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
                Kids' Jordan Shoes
            </Content>
            <Content onClick={()=>{navigate("/product")}}>
        Kids' Basketball Shoes
    </Content>
        </Main>

    </Wrapper>



<Wrapper1>
<div style={{display:"flex",justifyContent:"center"}}>
<div style={{minWidth:"10%"}}></div>
<Main >
    
    <Content1 onClick={()=>{navigate("/product")}}>
        Air Max 97
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        Air Max 270
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        Air Max 720
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        All Air Max
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        Vapormax
    </Content1>
</Main>
<Main>
    
    <Content1 onClick={()=>{navigate("/product")}}>
       Basketball Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        Football Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        Gym & Trainging Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
        Lifestyle Shoes
    </Content1>
</Main>
<Main>
    
    <Content1 onClick={()=>{navigate("/product")}}>
        Jackets
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
    Compression & Nike Pro
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
    Trousers & Leggings
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
       Shorts
    </Content1>
</Main>
<Main>
    <Content1 onClick={()=>{navigate("/product")}}>
       Kid's Running Shoes
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
       Kids' Clothing
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
    Kids' Backpacks
    </Content1>
    <Content1 onClick={()=>{navigate("/product")}}>
    Kids' Socks
    </Content1>    
</Main>

</div>

</Wrapper1>
</Baap>
  )
}

export default Hiddendiv