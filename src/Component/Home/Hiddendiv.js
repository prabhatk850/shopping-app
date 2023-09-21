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
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
        Air Force 1
    </Content>
        </Main>
        <Main>
            <Heading>
                Icons
            </Heading>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
        Air Force 1
    </Content>
        </Main>
        <Main>
            <Heading>
                Icons
            </Heading>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
        Air Force 1
    </Content>
        </Main>
        <Main>
            <Heading>
                Icons
            </Heading>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
                Air Force 1
            </Content>
            <Content>
        Air Force 1
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