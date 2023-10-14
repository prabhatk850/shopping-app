import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ProductDes from './ProductDes'
import Horizontalscroll from '../Home/Horizontalscroll'
import SingleImg from './Image'
import styled from 'styled-components'


const Headings = styled.div`
margin: 0 0 30px 45px;
font-size: 25px;
`;
const Title=styled.div`
 font-size: 22px;
 text-align: center;
 padding-bottom: 50px;
 padding-top: 50px;
 &:hover{
   
    cursor: pointer;
}

 `;

function index() {
  return (
    <div>
        <Header/>
        <ProductDes/>
        <Headings>
        You Might Also Like
        </Headings>
        <Horizontalscroll img={"./Aor1.jpeg"} Text={"Nike Sportswear"} Subtext={"Men's Overized T-shirt"} Cost={"$ 3 095"}
                          img2={"./Aor2.jpeg"} Text2={"Nike Air Force 1 '07"} Subtext2={"Men's Shoes"} Cost2={"$ 7 495"}
                          img3={"./Aor3.jpeg"} Text3={"NikeCourt Dri-FIT Victory"} Subtext3={"Men's 9' (23cm approx.) Tennis Shorts"} Cost3={"$ 2 395"}
                          img4={"./Aor4.jpeg"} Text4={"Nike Air Force 1 '07"} Subtext4={"Women's Shoes"} Cost4={"$ 9 695"}
                          img5={"./Aor5.jpeg"} Text5={"Nike Sportswear"} Subtext5={"Women's T-shirt"} Cost5={"$ 2 595"}
                          img6={"./Aor6.jpeg"} Text6={"Nike Sportswear Club Fleece"} Subtext6={"Women's Mid-Rise Shorts"} Cost6={"$ 2 595"}/>
<Title>
Explore the Nike Air Force 1 '07 Men's Shoes
</Title>
<SingleImg url={"./desktop.jpg"} Title={{SubTitle:"Real and synthetic leather are durable and easy to clean."}} />
<SingleImg url={"./desktop.jpg"} Title={{SubTitle:"An Air-Sole unit gives you lightweight cushioning."}} />
<SingleImg url={"./desktop.jpg"} Title={{SubTitle:"Rubber sole gives you durable traction."}} />
       

        
        <Footer/>
    </div>
  )
}

export default index