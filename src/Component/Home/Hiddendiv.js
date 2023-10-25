import React from 'react'
import styled from 'styled-components'

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
padding-bottom: 50px;
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
  return (
    <Baap>
    <Wrapper>
        <div style={{minWidth:"10%"}} ></div>
        <Main>
            <Heading>
                Icons
            </Heading>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Huarahe     
            </Content>
            <Content>
                Air Force 90
            </Content>
            <Content>
        Air Force 95
    </Content>
        </Main>
        <Main>
            <Heading>
                Shoes
            </Heading>
            <Content>
                All Shoes
            </Content>
            <Content>
                Custom Shoes
            </Content>
            <Content>
                Jordan Shoes
            </Content>
            <Content>
        Running Shoes
    </Content>
        </Main>
        <Main>
            <Heading>
                Clothing
            </Heading>
            <Content>
                All Clothing
            </Content>
            <Content>
                Modest Wear
            </Content>
            <Content>
                Hoodies & Pullovers
            </Content>
            <Content>
        Shirt & Tops
    </Content>
        </Main>
        <Main>
            <Heading>
               Kids'
            </Heading>
            <Content>
                Infant & Toddler Shoes
            </Content>
            <Content>
                Kids' Shoes
            </Content>
            <Content>
                Kids' Jordan Shoes
            </Content>
            <Content>
        Kids' Basketball Shoes
    </Content>
        </Main>

    </Wrapper>



<Wrapper1>
<div style={{display:"flex",justifyContent:"center"}}>
<div style={{minWidth:"10%"}}></div>
<Main >
    
    <Content1>
        Air Max 97
    </Content1>
    <Content1>
        Air Max 270
    </Content1>
    <Content1>
        Air Max 720
    </Content1>
    <Content1>
        All Air Max
    </Content1>
    <Content1>
        Vapormax
    </Content1>
</Main>
<Main>
    
    <Content1>
       Basketball Shoes
    </Content1>
    <Content1>
        Football Shoes
    </Content1>
    <Content1>
        Gym & Trainging Shoes
    </Content1>
    <Content1>
        Lifestyle Shoes
    </Content1>
</Main>
<Main>
    
    <Content1>
        Jackets
    </Content1>
    <Content1>
    Compression & Nike Pro
    </Content1>
    <Content1>
    Trousers & Leggings
    </Content1>
    <Content1>
       Shorts
    </Content1>
</Main>
<Main>
    <Content1>
       Kid's Running Shoes
    </Content1>
    <Content1>
       Kids' Clothing
    </Content1>
    <Content1>
    Kids' Backpacks
    </Content1>
    <Content1>
    Kids' Socks
    </Content1>    
</Main>

</div>

</Wrapper1>
</Baap>
  )
}

export default Hiddendiv