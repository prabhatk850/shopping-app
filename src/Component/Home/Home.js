import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slideshow from './Slideshow'
import styled from 'styled-components'
import SingleImg from "./SingleImg"
import SingleImg2 from "./SingleImg2"
import DoubleImg from "./DoubleImg"
import DoubleImg2 from "./DoubleImg2"
import DoubleImg3 from "./DoubleImg3"
import TripleImg from "./TrippleImg"
import Horizontalscroll from "./Horizontalscroll"
import Hiddendiv from './Hiddendiv'


const Headings = styled.div`
margin: 0 0 30px 45px;
font-size: 25px;
`;

function Home() {
  return (
    <div>
        <Header/>
        <Slideshow/>
        <SingleImg url={"./desktop.jpg"} Title={{Title:"NIKE METCON 9",SubTitle:"Durability and Stability for your Strength Training"}} />
        <Headings>
          The Latest
        </Headings>
        <DoubleImg img={"./first.jpeg"} Title={""} SubTitle={"Nike Calm Slide"} button={"Get it First"}
                   img2={"./second.jpeg"} Title2={""} SubTitle2={"Find Your Fast"} button2={"Shop"}  />
        <Headings>
          Trending
        </Headings>
        <DoubleImg2 img={"./first.jpeg"} Title={""} SubTitle={"Shop the Retro Edit"} button={"Shop the Look"}
                   img2={"./first.jpeg"} Title2={""} SubTitle2={"On-Trend Retro Sneakers"} button2={"Shop Sneakers"}  />
        <Headings>
          Trending
        </Headings>
        <SingleImg url={"./Justin.jpeg"} Title={{Title:"EA$Y. ALL DAY.",SubTitle:"Take your game to the next level in the new KD 16. "}} />
        <Headings>
          Featured
        </Headings>
        <DoubleImg3 img={"./second.jpeg"} Title={"Make Your Move"} SubTitle={"Say Hello To Brand New Dunk Low"} button={"Shop"}
                   img2={"./second.jpeg"} Title2={"Own The Floor"} SubTitle2={"Sneaker That Shine Beyond Repair"} button2={"Shop"}  />
        <Headings>
          Always On Repeat
        </Headings>
        <Horizontalscroll img={"./Aor1.jpeg"} Text={"Nike Sportswear"} Subtext={"Men's Overized T-shirt"} Cost={"$ 3 095"}
                          img2={"./Aor2.jpeg"} Text2={"Nike Air Force 1 '07"} Subtext2={"Men's Shoes"} Cost2={"$ 7 495"}
                          img3={"./Aor3.jpeg"} Text3={"NikeCourt Dri-FIT Victory"} Subtext3={"Men's 9' (23cm approx.) Tennis Shorts"} Cost3={"$ 2 395"}
                          img4={"./Aor4.jpeg"} Text4={"Nike Air Force 1 '07"} Subtext4={"Women's Shoes"} Cost4={"$ 9 695"}
                          img5={"./Aor5.jpeg"} Text5={"Nike Sportswear"} Subtext5={"Women's T-shirt"} Cost5={"$ 2 595"}
                          img6={"./Aor6.jpeg"} Text6={"Nike Sportswear Club Fleece"} Subtext6={"Women's Mid-Rise Shorts"} Cost6={"$ 2 595"}/>
        <Headings>
          Don't Miss
        </Headings>
        <SingleImg2 url={"./Dontmiss.jpeg"} Text={"Jordan Apparel"} Title={{Title:"BROOKLYN FLEECE",SubTitle:"Stay fly this season in fleece featuring a cotton blend and gradiant colour palettes inspired by Chicago skyline  "}} />
        <Headings>
          The Essentials
        </Headings>
        <TripleImg img={"./Essential1.jpeg"} button={"Men's"}
                   img2={"./Essential2.jpeg"} button2={"Women's"}  
                   img3={"./Essential3.jpeg"} button3={"Kid's"}  />
                  
        <Hiddendiv/>
        <Footer/>
        
    </div>
  )
}

export default Home