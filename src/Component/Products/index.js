import React from 'react'
import Product from './Product'
import styled from 'styled-components'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

const Wrapper=styled.div`

`;

function Index() {
  const location = useLocation();
  const {MHeading1,SubHeading} = location.state || {};
  console.log("first",location)

  
  return (
    <Wrapper>
    <Header/>

    <Product MHeading={"Shoes"} MHeading1={MHeading1} SubHeading={SubHeading}  />
    
    <Footer/>
    </Wrapper>
  )
}

export default Index