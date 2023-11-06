import React from 'react'
import Header from '../../Header/Header'
import styled from 'styled-components'
import Footer from '../../Footer/Footer';
import {LiaHeart} from 'react-icons/lia';
import {GoTrash} from 'react-icons/go';
import Horizontalscroll from '../Horizontalscroll'

const Wrapper = styled.div``;
const Heading = styled.div`
font-size: 30px;
font-weight: 400;
`;
const Heading1 = styled.div`
font-size: 30px;
font-weight: 400;
margin: 50px 45px 30px 45px;
`;
const Div = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 20px;
border-bottom: 1px solid lightgray;
padding-bottom: 20px;
`;
const Img = styled.img`
height: 150px;
width: 150px;
`;

const About = styled.div`
margin-left: 20px;
`;
const InnerHeading = styled.div`
font-size: 20px;
font-weight: 400;
`;
const Product = styled.div`
color: gray;
margin-top: 10px;
margin-bottom: 10px;
font-size: 15px;

`;
const Colour = styled.div`
color: gray;
margin-bottom: 10px;
font-size: 15px;

`;
const Size = styled.div`
color: gray;
margin-right: 20px;
`;
const Quantity = styled.div`
color: gray;
`;
const Price = styled.div`
font-size: 20px;
font-weight: 400;

`;

const SubTotal = styled.div`
margin: 10px 0;
`;   
const Extra = styled.div`
margin: 10px 0;`; 
const Total = styled.div`
margin: 20px 0;`;
const Text = styled.div`
font-size: 18px;
margin: 10px 0;
`;

const dummydata = [
    {
        img: './AF1.jpeg',
        name: "Nike Full Force",
        product: "Men's Shoes",
        colour: "White/Black",
        size: "Size: 9",
        quantity: "Quantity: 1",
        price: "8950"

    },
    {
        img: './AF1.jpeg',
        name: "Nike Full Force",
        product: "Men's Shoes",
        colour: "White/Black",
        size: "Size: 9",
        quantity: "Quantity: 1",
        price: "8950",
        
       

    }
]
const Summary = [
    {
        subTotal: " ₹ 8950.00",
        extra: " ₹ 1250.00",
        total: " ₹ 10200.00"
    }]

function Index(e) {
  return (

    <Wrapper>
        <Header/>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
        <Heading>Bag</Heading>
                {dummydata.map((e) => (
                    <div style={{display:"flex", flexDirection:"column", margin:"0 30px 0 0"}}>
                        <Div>
                            <div style={{display:"flex"}}>
                                <Img src={e.img}></Img>
                                <About>
                                    <InnerHeading>
                                        {e.name}
                                    </InnerHeading>
                                    <Product>
                                        {e.product}
                                    </Product>
                                    <Colour>
                                        {e.colour}
                                    </Colour>
                                    <div style={{display:"flex",marginBottom:"20px"}}>
                         <Size>{e.size}</Size>
                         <Quantity>{e.quantity}</Quantity>
                     </div>
                     <div style={{display:"flex"}}>
                         <LiaHeart style={{height:"25px",width:"25px",marginRight:"20px"}}/>
                         <GoTrash style={{height:"25px",width:"25px"}}/>
                        </div>
                                </About>
                            </div>
                            <Price>MRP: ₹ {e.price}.00 </Price>
                        </Div>
                    </div>
                ))}
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"30%"}}>
            <Heading>Summary</Heading>
            {Summary.map((e) => (
                <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Text>Subtotal</Text>
                    <SubTotal>{e.subTotal}</SubTotal>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Text>Extra Delivery & Handling</Text>
                    <Extra>{e.extra}</Extra>
                </div>
                <div style={{borderBottom:"1px solid lightgray",marginBottom:"20px"}}></div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Text>Total</Text>
                <Total>{e.total}</Total>
                </div>
                </div>))}
            </div>
        </div>
        <Heading1>You Might Also Like </Heading1>
        
             <Horizontalscroll img={"./Aor1.jpeg"} Text={"Nike Sportswear"} Subtext={"Men's Overized T-shirt"} Cost={"$ 3 095"}
                               img2={"./Aor2.jpeg"} Text2={"Nike Air Force 1 '07"} Subtext2={"Men's Shoes"} Cost2={"$ 7 495"}
                               img3={"./Aor3.jpeg"} Text3={"NikeCourt Dri-FIT Victory"} Subtext3={"Men's 9' (23cm approx.) Tennis Shorts"} Cost3={"$ 2 395"}
                               img4={"./Aor4.jpeg"} Text4={"Nike Air Force 1 '07"} Subtext4={"Women's Shoes"} Cost4={"$ 9 695"}
                               img5={"./Aor5.jpeg"} Text5={"Nike Sportswear"} Subtext5={"Women's T-shirt"} Cost5={"$ 2 595"}
                               img6={"./Aor6.jpeg"} Text6={"Nike Sportswear Club Fleece"} Subtext6={"Women's Mid-Rise Shorts"} Cost6={"$ 2 595"}/>
         
             <Footer/>
    </Wrapper>
  )
}

export default Index