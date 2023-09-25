import React from 'react'
import styled from 'styled-components'

const Content1=styled.div`
margin-right: 150px;
padding-bottom: 15px;

`;

const Baap=styled.div`
&:hover{
    height: 350px;
    
}
&:hover ${Content1}{
    color: gray;
}
`;
const Content=styled.div`
margin-right: 150px;
padding-bottom: 15px;
color: gray;
&:hover{
    
    cursor: pointer;
}

`;

const Wrapper=styled.div`
display: flex;
justify-content: center;

position: relative; 
overflow: hidden; 


`;

const Wrapper1=styled.div`
display: flex;
justify-content: center;
position: absolute;
width: 100%;
`;

const Main=styled.div`

`;

const Heading=styled.div`
padding-bottom: 20px;
margin-right: 150px;
`;



function Hiddendiv() {
  return (
    <Baap>
    <Wrapper>
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
<Main >
    
    <Content1>
        Air Force 2
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
</Main>
<Main>
    
    <Content1>
        Air Force 2
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
</Main>
<Main>
    
    <Content1>
        Air Force 2
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
</Main>
<Main>
   
    <Content1>
        Air Force 2
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
    <Content1>
        Air Force 1
    </Content1>
</Main>

</Wrapper1>
</Baap>
  )
}

export default Hiddendiv