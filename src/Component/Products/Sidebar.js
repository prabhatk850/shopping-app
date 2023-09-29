import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown';


const Wrapper=styled.div`
height: 100vh ;
padding-left:45px;
margin-right: 45px;
padding-right: 10px;

overflow-y:scroll ;
`;
const Div=styled.div`
width: 225px;
padding-bottom: 10px;

`;

const Content=styled.div`
font-weight:500;
padding-top: 10px;
padding-left: 2px;
font-size: 18px;
`;

function Sidebar(props) {

  const dummyData=[
    {
      content:"Training & Gym"
    },
    {
      content:"Baseball"
    },
    {
      content:"Nike By you"
    },
  ]

  return (
    <Wrapper>
      {dummyData.map((e)=>(
        <Div>
          <Content>
            {e.content}
          </Content> 
        </Div>
      
      ))}
       
    <Dropdown Title={"Gender"} dummyData={[{data:"Mens"},{data:"Women"},{data:"Kids"}]} colour={[]} />
    <Dropdown Title={"Shop By Price"} dummyData={[{data:"₹ 7 501.00 - ₹ 12 999.00 "},{data:"Over ₹ 13 000.00"}]} colour={[]}/>
    <Dropdown Title={"Sale & Offers"} dummyData={[{data:"Sale"}]} colour={[]}/>
    <Dropdown Title={"Colour"} dummyData={[]} colour={[{color:"Aqua"},{color:"Red"},{color:"Yellow"},{color:"Purple"},{color:"Blue"},{color:"Black"},{color:"White"},{color:"Brown"},{color:"Green"},{color:"Pink"},{color:"Grey"}]} />
    <Dropdown Title={"Brand"} dummyData={[{data:"Nike By You"}]} colour={[]}/>
    <Dropdown Title={"Icon(1)"} dummyData={[{data:"Air Force 1"},{data:"Air Max"},{data:"Air Rift"},{data:"Blazer"}]} colour={[]}/>
    <Dropdown Title={"Technology"} dummyData={[{data:"Nike FlyEase"},{data:"Nike React"},{data:"Nike Zoom Air"}]} colour={[]}/>
    <Dropdown Title={"Closure Type"} dummyData={[{data:"Slip-On"}]} colour={[]}/>
    <Dropdown Title={"Shoe Height"} dummyData={[{data:"Low Top"}]} colour={[]}/>
    <Dropdown Title={"Width"} dummyData={[{data:"Regular"}]} colour={[]}/>
    <Dropdown Title={"Shoe Feel"} dummyData={[{data:"Agile & Flexible"}]} colour={[]}/>
    <Dropdown Title={"Benefits"} dummyData={[{data:"Easy On & Off"}]} colour={[]}/>
    
    </Wrapper>
  )
}

export default Sidebar