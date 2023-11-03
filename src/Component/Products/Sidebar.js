import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown';
import { Sidebardata } from '../Service/Product';

const Wrapper=styled.div`
height: 100vh ;
margin:0 45px 50px;
padding-right: 10px;
overflow-y:scroll ;
overflow-x: hidden;
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

function Sidebar({data}) {

  const [dummyData,SetDummydata]= useState([])


  useEffect(()=>{
    Sidebardata().then((result)=>{
      SetDummydata(result.data)
    })
  },[])


  return (
    <Wrapper>
      {dummyData.map((e)=>(
        e.catagory==="Shoes"?
        <Div>
          <Content>
            {e.content}
          </Content> 
        </Div> : ""
      
      ))}

      <Dropdown />
       </Wrapper>
  )
}

export default Sidebar