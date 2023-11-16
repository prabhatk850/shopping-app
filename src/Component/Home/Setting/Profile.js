import React from 'react'
import styled from 'styled-components'
import {LiaEditSolid} from 'react-icons/lia'
import { useState } from 'react'
import Img from './Img'
import { updateProfile } from '../../Service/Profile'

const Wrapper =styled.div`
width: 50%;
margin:50px 0 ;
`;
const Heading=styled.div`
font-size:25px;
margin: 50px 0;
font-weight: 400;
`;
const Dob=styled.div`
width: 100%;
line-height: 1.5;
letter-spacing: 0.5px;
align-items: center;
font-size: 15px;
/* border: 1px solid gray; */
border-radius: 5px;
margin: 20px 0;
`;
const Div=styled.img`
margin: 10px;
cursor: pointer;
height: 150px;
width: 150px;
border-radius: 80%;
background-size:cover;
`;
const Subheaing=styled.div`
display: flex;
width:100%;
justify-content: space-between;
align-items: center;
font-size:20px;
margin: 35px 0;
font-weight: 400;
`;

const Delete1=styled.div`
height: 25px;
width: 50px;
margin-top: 20px;
display: flex;
justify-content: center;
background-color: black;
color: white;
border:  1px solid #f5f5f5;
border-radius: 30px;
padding: 6px 15px 0;
&:hover{
    cursor: pointer;

    border:  1px solid gray;
    background-color: gray;
}
`;

function Index() {

  const [toggle,SetToggle]=useState(true)
  const [uploadImg , setUploadImg] = useState(new Blob())
  

  return (
    <Wrapper>
      
      <Heading>Profile Visibility</Heading>
      <Dob>Your Nike profile represents you on product reviews and across the Nike family of apps.</Dob>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div onClick={()=>{SetToggle(!toggle)}} style={{display:"flex"}}>
            <Div src={URL.createObjectURL(uploadImg)}></Div>
            <LiaEditSolid style={{height:"25px",width:"25px",marginTop:"10px",cursor:"pointer"}}/>
        </div>
        <div style={{marginRight:"50px"}}>
          <Subheaing>Profile Display</Subheaing>
          <Dob style={{color:"gray"}}>User4367281</Dob>
          <Delete1>
                Edit
        </Delete1>
        </div>
      </div>
      {!toggle && <Img setUploadImg={setUploadImg}/>}
      <div style={{borderBottom:"1px solid lightgray",margin:"30px 0"}}></div>
      <Subheaing>Product Review Visibility</Subheaing>
      <Dob>Choose how you will appear on any Nike product reviews you complete. Changing these settings will also affect your visibility for connecting with friends on the Nike Training Club and Nike Run Club apps.<div style={{textDecoration:"underline",fontWeight:'500',fontSize:'18px'}}>Learn More</div></Dob>
       <div style={{margin:'50px 0'}}>
        <div style={{display:"flex",margin:"15px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' type='radio' defaultChecked></input><div style={{marginLeft:"15px"}}>Private: Profile visible to only you</div></div>
        <div style={{display:"flex",margin:"15px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' type='radio'></input><div style={{marginLeft:"15px"}}>Social: Profile visible to friends</div></div>
        <div style={{display:"flex",margin:"15px"}}> <input style={{height:"20px",width:"20px"}} name='Preference' type='radio'></input><div style={{marginLeft:"15px"}}>Public: Everyone can view profile</div></div>
       </div>
       <Subheaing>Location Sharing</Subheaing>
       <div style={{margin:'50px 0'}}>
        <div style={{display:"flex",margin:"15px"}}> <input style={{height:"20px",width:"20px"}} name='Location' type='radio' defaultChecked></input><div style={{marginLeft:"15px"}}>Share my location with friends only</div></div>
        <div style={{display:"flex",margin:"15px"}}> <input style={{height:"20px",width:"20px"}} name='Location' type='radio'></input><div style={{marginLeft:"15px"}}>Don't share my location</div></div>
       </div>
       <div style={{display:"flex",justifyContent:"end"}}>
       <Delete1 >
                Save
        </Delete1>
       </div>
    </Wrapper>
  )
}

export default Index