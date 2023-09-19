import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slideshow from './Slideshow'
// import styled from 'styled-components'
import SingleImg from "./SingleImg"
import DoubleImg from "./DoubleImg"

function Home() {
  return (
    <div>
        <Header/>
        <Slideshow/>
        <SingleImg url={"./desktop.jpg"} Title={{Title:"NIKE METCON 9",SubTitle:"Durability and Stability for your Strength Training"}} />
        <DoubleImg img={"./first1.jpeg"} Title={"Available on the Nike App from:18 Sep"} SubTitle={"Nike Calm Slide"} button={"Get it First"}
                   img2={"./second.jpeg"} Title2={""} SubTitle2={"Find Your Fast"} button2={"Shop"}  />
        {/* <div style={{backgroundColor:"white"}}>Home</div> */}
        <Footer/>
        
    </div>
  )
}

export default Home