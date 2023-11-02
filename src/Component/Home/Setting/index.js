import React from 'react'
import Header from '../../Header/Header'
import styled from 'styled-components';
import Footer from '../../Footer/Footer';


const Wrapper =styled.div`
margin: 0 50px;
`;

const Headding=styled.div`
font-size:25px;
margin-top: 50px;
font-weight: 500;
`;


function Index() {
  return (
    <div>
        <Header/>
            <Wrapper>
        <Headding>Settings</Headding>
            <div style={{display:"flex"}}>
            <div>

            </div>
            <div>
                
            </div>

            </div>
            </Wrapper>

        <Footer/>
    </div>
  )
}

export default Index