import React, { useEffect , useState } from 'react'
import styled from 'styled-components';
import { getUserDetails } from '../../Service/Profile';
import { updateProfile } from '../../Service/Profile';

const Wrappers=styled.div`
width: 100%;
margin: 50px 0;
`;
const Heading=styled.div`
font-size:20px;
margin-top: 50px;
font-weight: 400;
`;
const Email=styled.div`
width: 40%;
padding-left: 10px;
align-items: center;
display: flex;
font-size: 15px;
height: 50px;
border: 1px solid gray;
border-radius: 5px;
margin: 20px 0;
`;
const Head=styled.div`
margin-top: 20px;
`;
const Password=styled.div`
width: 40%;
padding-left: 10px;
align-items: center;
display: flex;
justify-content: space-between;
height: 50px;
border: 1px solid gray;
border-radius: 5px;
margin: 20px 0;

`;
const Phone=styled.div`
padding-left: 10px;
width: 40%;
height: 50px;
display: flex;
justify-content: space-between;
`;
const Dob=styled.div`
width: 40%;
padding-left: 10px;
align-items: center;
display: flex;
font-size: 15px;
height: 50px;
border: 1px solid gray;
border-radius: 5px;
margin: 20px 0;
opacity: 0.4;
pointer-events: none;
`;

const Edit=styled.div`
margin-right: 10px;
display: flex;
align-items: center;
&:hover{
    cursor: pointer;
    color: gray;
}
`;
const Delete=styled.div`
height: 20px;
border:  1px solid #f5f5f5;
border-radius: 15px;
padding: 5px 15px;
&:hover{
    cursor: pointer;
    border:  1px solid #f5f5f5;
    background-color: #f5f5f5;
}
`;
const Delete1=styled.div`
height: 20px;
background-color: black;
color: white;
border:  1px solid #f5f5f5;
border-radius: 15px;
padding: 5px 15px;
&:hover{
    cursor: pointer;

    border:  1px solid gray;
    background-color: gray;
}
`;


function AccountDetails() {
    const [isPassDisabled, setIsPassDisabled] = useState(true);
    const [isMobDisabled, setMobIsDisabled] = useState(true);
    const [isDivClicked, setIsDivClicked] = useState(false);
    const [userDetails, setUserDetails] = useState({
        email: "",
        dob: "",
    });

    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('.........')
    const [phone, setPhone] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')

    const handleClick = () => {
        setIsDivClicked(true)
    }   
  

  const update = () => {
    const data = {
      country: country,
      state: state,
      city: city,
      postalcode: zip,
        phoneNumber: phone,
        password: password
    }
    updateProfile(data).then((result)=>{
      if(result.status === 200){
        alert('Profile Updated')
      }
    }).catch((err)=>{
        alert(err)
      }
  )}

    useEffect(() => {
        getUserDetails().then((result)=>{
            console.log("result",result)
            setUserDetails(result.data)
            setPhone(result.data.phoneNumber)
            setState(result.data.state)
            setCountry(result.data.country)
            setCity(result.data.city)
            setZip(result.data.postalcode)


    })}, [])
  return (
    <Wrappers>
        <Heading>Account Details</Heading>
        <Email>{userDetails?.email}</Email>
        <Head>Password</Head>
        <Password onClick={handleClick} style={{border: isDivClicked ? '1px solid gray' : 'none' }}> <input onChange={(e)=>{setPassword(e.target.value)}} type={isPassDisabled?"password":"text"} placeholder='••••••' disabled={isPassDisabled}  style={{border:'none' ,outline:"none",backgroundColor:"white",fontSize:"20px"}} ></input> <Edit onClick={()=>{setIsPassDisabled(!isPassDisabled)}}>Edit</Edit> </Password>
        <Head>Phone no.</Head>
        <Phone> <input onChange={(e)=>{setPhone(e.target.value)}} type='text' disabled={isMobDisabled} placeholder='Phone Number' value={phone} style={{border:"none",outline:"none",backgroundColor:"white"}} ></input> <Edit onClick={()=>{setMobIsDisabled(!isMobDisabled)}}>Edit</Edit> </Phone>
        <Head>Date of Birth</Head>
        <Dob>{userDetails?.dob}</Dob>
        <Head>Location</Head>
        <Email> <input onChange={(e)=>{setCountry(e.target.value)}} type='text' placeholder='Country' value={country} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <Email> <input onChange={(e)=>{setState(e.target.value)}} type='text' placeholder='State' value={state} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <Email> <input onChange={(e)=>{setCity(e.target.value)}} type='text' placeholder='District' value={city} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <Email> <input onChange={(e)=>{setZip(e.target.value)}} type='number' placeholder='Postle Code' value={zip} style={{width:"90%",padding:"0 0 0 10px",height:"50px",border:"none",outline:"none"}}></input></Email>
        <div style={{borderBottom:"1px solid lightgray",marginBottom:"20px",width:"41%"}}></div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",width:"40%" }}>
            <div>
                Delete Account
            </div>
            <Delete>
                Delete
            </Delete>
        </div>
        <div style={{borderBottom:"1px solid lightgray",marginBottom:"20px",width:"41%"}}></div>
        <div style={{width:"40%",display:"flex",justifyContent:"end"}}>
        <Delete1 onClick={update}>
                Save
        </Delete1>
        </div>
        
    </Wrappers>
  )
}

export default AccountDetails