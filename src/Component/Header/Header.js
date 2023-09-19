import React from 'react'
import { SiJordan,SiNike, } from 'react-icons/si'
import { LiaHeart } from 'react-icons/lia'
import { IoBagOutline} from 'react-icons/io5'
import { RiSearchLine} from 'react-icons/ri'
import styled from 'styled-components'

const Container=styled.div`

`;

const Wrapper=styled.div`
display: flex;
justify-content: space-between;
background-color: #F5F5F5;
padding: 8px 0;
`;

const Wrapper1=styled.div`
display: flex;
justify-content: space-between;
padding: 0px 0;
height:60px;
`;



const Options =styled.div`
display: flex;
padding-right: 35px;
margin-top: 10px;

`;


const Options1 =styled.div`
display: flex;
padding-right: 35px;
margin-top: 5px;

`;

const Field =styled.div`
padding: 2px 12px;
font-size: 12px;
font-weight: 500;
&:hover{
    color: #6C6C6C;
    cursor: pointer;
}
`;
const Title =styled.div`
padding: 12px 12px 0px 12px;
font-size: 18px;
&:hover{
    color: #6C6C6C;
    cursor: pointer;
}
`;

const Search=styled.div`
height:40px ;
width: 180px;
display: flex;
border-radius: 30px;
background-color: #F5F5F5;
`;

const Hover =styled.div`

&:hover{
    color: #6C6C6C;
    cursor: pointer;
}
`;

function Header() {
  return (
    <Container>
      
      <Wrapper>
      <Hover><SiJordan style={{height:'20px',marginLeft:"50px", width:"20px"}} />
      </Hover>
       <Options1>
        <Field>Find a Store</Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field>Help</Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field>Join Us</Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field>Sign In</Field>
       </Options1> 
      </Wrapper>



      <Wrapper1>

      <Hover><SiNike style={{height:'60px',marginLeft:"50px",marginRight:"1px", width:"60px"}}/>
      </Hover>
    <Options>
        <Title >New & Feature</Title>
        <Title>Men</Title>
        <Title>Women</Title>
        <Title>Kids</Title>
        <Title>Sale</Title>
        <Title>SNKRS</Title>
    </Options>

    <Options>

       <Search>
       <Hover><RiSearchLine style={{margin:"8px 10px 0 10px",height:"24px",width:"24px"}}/>
       </Hover>
        <input type='text' placeholder='Search'  style={{backgroundColor:"#F5F5F5",marginTop:"5px",border:"none",outline:"none",height:"30px",fontSize:"18px",width:"120px"}}/>
       </Search>

       <Hover><LiaHeart style={{height:'24px',marginRight:"20px",marginLeft:"20px",paddingTop:"10px", width:"24px"}}/>
       </Hover>
       <Hover><IoBagOutline  style={{height:'24px',marginRight:"15px",paddingTop:"10px", width:"24px"}}/>
       </Hover>
    </Options>

    </Wrapper1>

    </Container>
  )
}

export default Header