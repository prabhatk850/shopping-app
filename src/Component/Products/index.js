import React from 'react'
import Product from './Product'
import styled from 'styled-components'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Wrapper=styled.div`

`;

function Index() {
  
  return (
    <Wrapper>
    <Header/>

    <Product MHeading={"Shoes"} MHeading1={"Metcon"} SubHeading={"Metcon Shoes(15)"}  />
    
    <Footer/>
    </Wrapper>
  )
}

export default Index