import React, { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"
import styled from 'styled-components'
import { FetchProducts } from '../Service/Product';
import { useNavigate } from 'react-router-dom';




const Baap = styled.div`
`;
const Wrapper = styled.div`
display: flex;
overflow-y: scroll;
`;

const Subimage = styled.div`
display: flex;
height: 30px;
width: 30px;
`;
const Simg = styled.img`
 display: none;
margin:0 5px 0 0 ;
margin-top:20px;
 width: 50px;
 height: 30px;
 

`;

const Heading = styled.div`
color: #9E3401;
font-weight: 500;
padding-bottom: 8px;
`;
const Image = styled.div`
height:350px;
width: 350px;
padding-bottom: 10px;

`;
const Name = styled.div`
padding-bottom: 5px;
font-weight: 500;

`;
const Colourways = styled.div`
color: gray;
padding-bottom: 8px;

`;
const Type = styled.div`
color: gray;
padding-bottom: 5px;
`;
const Price = styled.div`
font-weight: 500;
padding-bottom: 8px;
`;
const Div = styled.div`
height: 520px;
width: 100%;
margin-right: 11px;
padding-bottom: 40px;
&:hover ${Name}  {
  display: none;
}
&:hover ${Type}  {
  display: none;
}
&:hover ${Colourways}  {
  display: none;
}
&:hover ${Simg}  {
  display: block;
}
&:hover ${Subimage}  {
  margin-bottom: 20px;
}

`;

const MHeading=styled.div`
margin-right: 5px;

`;

const MHeading1=styled.div`
margin-left:5px;

`;

const MainHeading=styled.div`
display: flex;
`;

const SubHeading=styled.div`
font-size: 25px;
font-weight: 500;
`;


const MainContent=styled.div`

`;

const Filters=styled.div`
display: flex;
padding-top: 20px;
`;

const HideFilter=styled.div`
font-size: 17px;
margin-right: 20px;
display: flex;
align-items: center;

`;

const Sort=styled.div`
font-size: 17px;
margin: 5px 0 0 0 ;
`;

const Header=styled.div`
display:flex;
justify-content: space-between;
margin: 100px 45px 45px;
`;

function Product(props) {
  const navigate=useNavigate()
  const[filter,SetFilter]=useState(true)
  const[productdata,SetProductdata]=useState([])
  
  const handleFilter=()=>{
    SetFilter(!filter)
  }

  useEffect(()=>{
    FetchProducts().then((result)=>{
        SetProductdata(result.data)
        console.log("product",productdata)
    })
  },[])
  
  return (
    
  <Baap>
    <Header>
     <MainContent>
      <MainHeading>
        <MHeading>{props.MHeading}</MHeading>/  
        <MHeading1>{props.MHeading1}</MHeading1>
      </MainHeading>
      <SubHeading>
        {props.SubHeading}
      </SubHeading>
     </MainContent>
     <Filters>
      <HideFilter onClick={handleFilter}>
        {filter ? "Hide ":"Show "}<div style={{margin:"0 5px"}} >Filter</div> <img style={{height:'30px'}} alt="icon" src='./sliders-horizontal.svg' />
      </HideFilter> 
        <Sort>
          Sort By 
        </Sort> 
     </Filters>
    </Header>
   <Wrapper>
      {filter? <Sidebar data={[{category:"Body Part",type:["Forearm","Biceps","Shoulder","Ribs","Calf"]},{category:"Style",type:["Linework","Illustrative","Blackwork","Minimalist","Text"]}]}/>:<div style={{width:"45px"}} />} 
          <div style={{  display: "grid",width:"100%" ,gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap:"1px", height:"100vh",overflowY:"scroll" }}>
          {productdata.map((e)=>(
        
         
        <Div key={e._id}  onClick={()=>{navigate("/productdescription",{state:{
          id:e._id,
          name:e.name,
          type:e.type,
          colourways:e.colourways,
          price:e.price,
          offer_price:e.offer_price,
          off_percent:e.off_percent,
          pic:e.pic,
          logo:e.logo,
          heading:e.heading,
          url:e.url}})}}>
          <Image style={{backgroundImage: `url(${e.pic})`, backgroundSize:"cover"}}></Image>
          <Subimage>
            <Simg src={e.logo}></Simg>  
            <Simg src={e.logo}></Simg>  
            <Simg src={e.logo}></Simg>  
            <Simg src={e.logo}></Simg>  
          </Subimage>
          <Heading>{e.heading}</Heading>
          <Name>{e.name}</Name>
          <Type>{e.type}</Type>
          <Colourways>{e.colourways} Colours</Colourways>
          <Price>MRP: ₹ {e.price}</Price>
       

        </Div>
        ))}
       
         </div> 
    </Wrapper>
  </Baap>
  )
}

export default Product