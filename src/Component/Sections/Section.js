import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import Slideshow from '../Home/Slideshow'
import SingleImg from '../Home/SingleImg'
import DoubleImg from '../Home/DoubleImg'
import HorizontalScroll from '../Home/Horizontalscroll'
import Footer from '../Footer/Footer'
import Hiddendiv from '../Home/Hiddendiv'

const Wrapper =styled.div``;
const SubSection =styled.div``;
const Div =styled.div`
font-size: 25px;
padding: 30px 0;
`;
const Headings = styled.div`
margin: 0 0 30px 45px;
font-size: 25px;
`;

function index(props) {
  return (
    <Wrapper>
        <Header/>
        <Slideshow/>

        <div style={{display:"flex",justifyContent:"space-between",margin:"0 50px"}}>
        <Div>
            {props.Gender}
        </Div>
        <SubSection style={{display:"flex"}}>
            <div style={{fontSize:"16px",fontWeight:"500",padding:"30px 25px"}} >{props.T1}</div>
            <div style={{fontSize:"16px",fontWeight:"500",padding:"30px 25px"}} >{props.T2}</div>
            <div style={{fontSize:"16px",fontWeight:"500",padding:"30px 25px"}} >{props.T3}</div>
        </SubSection>
        <div></div>
        </div>

        <SingleImg url={"./desktop.jpg"} Title={{Title:"NIKE ZOOM TR1",SubTitle:"Light And reponsive. Built for your workout and beyond"}} />
        <DoubleImg img={"./first.jpeg"} Title={"Nike Running"} SubTitle={"RUN FOR RUN"} button={"Shop Running"}
                   img2={"./second.jpeg"} Title2={"Nike Full Force Low"} SubTitle2={"Throw Them On And Go Full Force"} button2={"Shop"}  />
         <Headings>
            Trend Alert
        </Headings>
        <HorizontalScroll img={"./Aor1.jpeg"} Text={"Nike Sportswear"} Subtext={"Men's Overized T-shirt"} Cost={"$ 3 095"}
                          img2={"./Aor2.jpeg"} Text2={"Nike Air Force 1 '07"} Subtext2={"Men's Shoes"} Cost2={"$ 7 495"}
                          img3={"./Aor3.jpeg"} Text3={"NikeCourt Dri-FIT Victory"} Subtext3={"Men's 9' (23cm approx.) Tennis Shorts"} Cost3={"$ 2 395"}
                          img4={"./Aor4.jpeg"} Text4={"Nike Air Force 1 '07"} Subtext4={"Women's Shoes"} Cost4={"$ 9 695"}
                          img5={"./Aor5.jpeg"} Text5={"Nike Sportswear"} Subtext5={"Women's T-shirt"} Cost5={"$ 2 595"}
                          img6={"./Aor6.jpeg"} Text6={"Nike Sportswear Club Fleece"} Subtext6={"Women's Mid-Rise Shorts"} Cost6={"$ 2 595"}/>
        
        <Hiddendiv/>
        <Footer/>

    </Wrapper>
  )
}

export default index