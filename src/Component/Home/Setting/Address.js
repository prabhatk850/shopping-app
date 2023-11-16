import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { updateAdd } from '../../Service/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bap=styled.div`
`;

const Wrappers=styled.div`
width: 100%;
margin: 50px 0;
`;

const Heading=styled.div`
display: flex;
width:100%;
justify-content: space-between;
align-items: center;
font-size:25px;
margin-top: 20px;
font-weight: 400;
`;



const Dob=styled.div`
margin-top: 10px;
width: 60%;
align-items: center;
font-size: 15px;
height: 50px;
/* border: 1px solid gray; */
border-radius: 5px;
margin: 20px 0;
opacity: 0.4;
pointer-events: none;
`;



const Delete1=styled.div`
height: 25px;
display: flex;
justify-content: end;
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
// page 2 

const Div=styled.div`
margin: 10px 30px 10px 20px;



`;
const Div1=styled.div`
margin: 10px 20px;

`;
const Input=styled.input`
width: 100%;
height: 50px;
font-size: 15px;
padding-left: 10px;
border: 1px solid black;
border-radius: 10px;
`;
const Input1=styled.input`
width: 240px;
height: 50px;
font-size: 15px;
padding-left: 10px;
border: 1px solid black;
border-radius: 10px;
`;
const Button=styled.input`
height: 20px;
width: 20px;
margin-right: 10px;
  border: 4px;
  border-color: gray;
  border-radius: 4px;
  font-size: 17px;
  padding: 0 2px 4px 2px;
  margin-right: 8px;
  &:hover{cursor: pointer;
  }
  `;
const Button1=styled.div`
height: 30px;
background-color: black;
color: white;
border:  1px solid #f5f5f5;
border-radius: 30px;
padding: 10px 15px 0;
&:hover{
    cursor: pointer;

    border:  1px solid gray;
    background-color: gray;
}
`;

const Cross= styled(AiOutlineClose)`
&:hover{
    
    cursor: pointer;
    color: black;
}
`;
const Form=styled.div`
/* position:absolute; */
display: flex;
align-items: center;
padding: 0px 50px;
margin-bottom: 20px;
border-radius: 25px;
background-color: white;
`;

function Address() {
    const updateaddress=()=>{
        const data={
            firstName:fname,
            lastName:lname,
            addressline1:street,
            addressline2:apt,
            town:town,
            city:city,
            state:state,
            country:country,
            postalcode:postal,
            phoneNumber:phone,
        }
        updateAdd(data).then((result)=>{
            if(result.status===200){
                toast.success("Address Updated Successfully")
            }else{
                toast.error("Error in updating Address")
            }
        })
        setFname("")
        setLname("")
        setStreet("")
        setApt("")
        setTown("")
        setCity("")
        setState("")
        setCountry("")
        setPostal("")
        setPhone("")
        setAddress(!address)
    }
    const [address,setAddress]=useState(false)
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [street,setStreet]=useState("")
    const [apt,setApt]=useState("")
    const [town,setTown]=useState("")
    const [city,setCity]=useState("")
    const [postal,setPostal]=useState("")
    const [state,setState]=useState("")
    const [country,setCountry]=useState("")
    const [phone,setPhone]=useState("")

  return (
  <Bap>
    <ToastContainer />
    {address?"":
    <Wrappers>
       
        <div style={{width:"70%"}}>

        <Heading>Saved Delivery Address</Heading>
        <Dob>You currently don't have any saved delivery addresses.Add an address here to be pre-filled for quicker checkout.</Dob>
        <div style={{width:"65%",display:"flex",justifyContent:"end"}}>
        <Delete1 onClick={()=>{setAddress(!address)}}>
                Add Address
        </Delete1>
        </div>
        </div>
    </Wrappers>}
    {address?
    <Form><div>
            <div style={{display:"flex",justifyContent:"space-between",padding:"4% 4%"}}>
            <Heading>Add Address <Cross onClick={()=>{setAddress(!address)}} style={{width:"20px",height:"20px",padding:"5px 5px"}} /></Heading>
            </div>
            <div style={{width:"100%",display:"flex"}}>
            <Div1>
            <Input1 value={fname} placeholder="First Name" onChange={(e)=>{setFname(e.target.value)}}/>
            </Div1>
            <Div1>
            <Input1 value={lname} placeholder="Last Name" onChange={(e)=>{setLname(e.target.value)}}/>
            </Div1>
            </div>
            <Div >
            <Input value={street} placeholder="Street Address" onChange={(e)=>{setStreet(e.target.value)}}/>
            </Div> 
            <Div style={{margin: "20px 30px 10px 20px"}}>
            <Input value={apt} placeholder="Apt, Suits, Building" onChange={(e)=>{setApt(e.target.value)}}/>
            </Div>
            <div style={{width:"100%",display:"flex"}}>
            <Div1>
            <Input1 value={town} placeholder="Town/Village" onChange={(e)=>{setTown(e.target.value)}}/>
            </Div1>
            <Div1>
            <Input1 value={city} placeholder="Town/City" onChange={(e)=>{setCity(e.target.value)}}/>
            </Div1>
            </div>
            <div style={{width:"100%",display:"flex"}}>
            <Div1>
            <Input1 value={postal} type='number' placeholder="Postal Code" onChange={(e)=>{setPostal(e.target.value)}}/>
            </Div1>
            <Div1>
            <Input1 value={state} placeholder="State" onChange={(e)=>{setState(e.target.value)}}/>
            </Div1>
            </div>
            <div style={{width:"100%",display:"flex"}}>
            <Div1>
            <Input1 value={country} placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
            </Div1>
            <Div1>
            <Input1 value={phone} type='number' placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
            </Div1>
            </div>
            <Div style={{display:"flex"}}>
            <Button  type='checkbox' ></Button>
                <div style={{fontSize:"20px"}}>Set as default delivery address</div>
            </Div>
            <div style={{width:"95%",display:"flex",justifyContent:"end"}}>
        <Button1 onClick={updateaddress}>
                Save Address
        </Button1>
        </div>
        </div>
        </Form>:""}
   
  </Bap>
  )
}

export default Address