import React from 'react'
import Sidebar from "./Sidebar"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
`;
const Div = styled.div`

`;
const Heading = styled.div`

`;
const Image = styled.img`

`;
const Name = styled.div`

`;
const Colourways = styled.div`

`;
const Type = styled.div`

`;
const Price = styled.div`

`;


function Product(props) {
  return (
    
    <Wrapper>
        <Sidebar/>
        <Div>
          <Image style={{backgroundImage: `url(${props.img})`, backgroundSize:"cover"}}></Image>
          <Heading>{props.Heading}</Heading>
          <Name>{props.Name}</Name>
          <Type>{props.Type}</Type>
          <Colourways>{props.Colourways}</Colourways>
          <Price>MRP: {props.Price}</Price>
        </Div>
        
    </Wrapper>
  )
}

export default Product