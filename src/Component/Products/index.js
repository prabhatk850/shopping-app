import React from 'react'
import Product from './Product'
import styled from 'styled-components'
import Header from '../Header/Header';

const Wrapper=styled.div``;

function Index() {
  
  return (
    <Wrapper>
    <Header/>

    <Product Img={"./Product1.jpeg"} Logo={"./Aor1.jpeg"} Heading={"Sustainable Material"} Name={"Nike Metcon 9"} Type={"Men's Workout Shoes"} Colourways={"4 Colours"} Price={"12 795"} />
    
    </Wrapper>
  )
}

export default Index