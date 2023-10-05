import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';

const Wrapper= styled.div`
padding-left: 2px;
`;
const Heading= styled.div`
font-weight:500;
display :flex ;
justify-content: space-between;
padding-top: 10px;
margin-bottom: 20px;

font-size: 18px;
`;
const Button=styled.input`
height: 20px;
width: 20px;
  border: 4px;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover{cursor: pointer;
  }
  `;

  const BData=styled.div`
  font-size: 18px;
  width:170px;
  padding-bottom: 5px;
  `;

  const Ddown=styled.div`
  margin-bottom: 10px;
  `;
  const ColourData=styled.div`
   display: grid;
   width:100% ;
   grid-template-columns: repeat(3, minmax(0, 1fr)); 
  `;
  const Colour=styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #E8E8E8;
  border-radius: 25px;
  `;
  const Title=styled.div`
  font-size: 14px;
  `;




function Dropdown(props) {
  const [accordian,setAccordian]=useState(true)

  const handleAccordian =()=>{
    setAccordian(!accordian)
  }


 
  return (
    <Wrapper>
      <div style={{height:"1px",width:"90%",marginTop:"10px",paddingRight:"10px", backgroundColor:"gray"}} ></div>
        <Heading onClick={handleAccordian}>
            <div>{props.Title}</div>
           {accordian?<RiArrowUpSLine style={{paddingRight:"5px",height:"25px",width:"25px"}}/>:<RiArrowDownSLine style={{paddingRight:"5px",height:"25px",width:"25px"}} /> } 
        </Heading>
        
        {accordian?<Ddown>

        {props?.dummyData.map((e)=>(
            <BData>
            <Button  type='checkbox' ></Button>
            {e.data}
            </BData>   
        ))}
<ColourData>
{props?.colour.map((f)=>(
       <div style={{ padding:"10px" ,alignContent:"center"}}>
          <Colour style={{backgroundColor:`${f.color}`}}></Colour> <Title>{f.color}</Title>  
        </div>
        
        ))}
        </ColourData>

        </Ddown>:""}
        
    </Wrapper>
  )
}

export default Dropdown