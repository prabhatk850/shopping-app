import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from './Head';
import Intrest from './Intrest';
import Horizontalscroll from '../Home/Horizontalscroll/Index2';
import {BsPlusCircle} from 'react-icons/bs'
import { getUserDetails } from '../Service/Profile';
import { useNavigate } from 'react-router-dom';

const Bap=styled.div`
`;
const Wrapper=styled.div`

`;
const Name=styled.div`
font-size: 35px;
`;
const Member=styled.div`
color: gray;
font-size: 18px;
`;
const Img=styled.div`
border-radius: 50px;
height: 100px;
width: 100px;
background-color: aqua;
margin: 0 20px 0 5px;
`;

const Intrests=styled.div`
margin-top: 30px;
`;
const Headings=styled.div`
font-size: 30px;
`;
const Grid=styled.div`
display: grid;
gap: 30px;
grid-template-columns: 23% 23% 23% 23%;
margin: 30px 0;
`;
const Gdiv=styled.div`
height: 150px;
top: 0;
padding-top: 35%;
text-align: center;
background-color: #F5F6F7;
&:hover{
transform: scale(1.1); 
transition: .2s;
}
/* &:active{
    ${Wrapper}{
        display: none;
    }
} */
`;


const Title=styled.div`
padding-top: 180px;
`;
const Button= styled.button`
display: none;
position:relative;
background-color: White;
color: black;
width: auto;
height: 30px;
border-radius: 25px;
padding: 0 20px;
border: none;
outline: none;
font-size: 15px;
font-weight: 500;

&:hover{
    background-color: gray;
    cursor: pointer;
}

`;

const Pdiv=styled.div`
height: 258px;
overflow: hidden;
border: solid 1px black;
&:hover{
    ${Button}{
        display: block;
    
    }
    
}
`;



const Edit=styled.div`
/* &:active{
    ${Wrapper}{
        filter: blur(5px);
    }
} */
`;

const Image=styled.div``;

function Index() {

    const dummyData=[
        {
            pic:"./AF1.jpeg",
            title:"ACG"
        },
        {
            pic:"./first.jpeg",
            title:"Nike Air Max"
        }
    ]
    const navigate=useNavigate()
    const [toggle,SetToggle]=useState(false)
    const [classs,setClasss]=useState("unblur")
    const [name,setName]=useState("Member")
    const [userSince,setUserSince]=useState("")

    const toggleIntrest=()=>{
        SetToggle(!toggle)
        {toggle?setClasss("unblur"):setClasss("blur")}
        
    }
    useEffect(()=>{
        getUserDetails().then((res)=>{
            console.log("mem",res)
            let name = res.data?.firstname + " " + res.data?.lastname
            setName(name)
            setUserSince(res.data?.createdAt)
        }).catch((err)=>console.log(err))
    },[])
    const isoDate = userSince; // Replace with your ISO date
    const date = new Date(isoDate);
    const month = date.getMonth() + 1; // getMonth() returns a zero-based month
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month - 1];
    const year = date.getFullYear();

    
  return (<Bap>
<div>{toggle?<Intrest SetToggle={SetToggle} toggle={toggle} setClasss={setClasss} classs={classs}/>:""}</div>
    <Wrapper className={classs} >
        
        <Header/>
        <div style={{margin:" 50px"}}>
            <Head/>
            <div style={{display:"flex",alignItems:"center"}}>
                <Img></Img>
                <div>
                    <Name>{name}</Name>
                    <Member>Nike Member Since {monthName} {year}</Member>
                </div>
            </div>
            <Intrests style={{display:"flex",justifyContent:"space-between"}}>
                <Headings>
                    Interests
                </Headings>
                <Edit style={{cursor:"pointer"}} onClick={toggleIntrest}>
                    Edit
                </Edit>
            </Intrests>
            <Grid>
                <Gdiv  onClick={toggleIntrest}><div style={{fontSize:"20px",paddingBottom:"10px"}}>Add an Item</div><BsPlusCircle style={{height:"20px",width:"20px"}}/></Gdiv>
                   {dummyData.map((e)=>(
                <Pdiv onClick={()=>{navigate("/product")}}>
                <Image style={{backgroundImage: `url(${e.pic})`, backgroundSize:"cover", backgroundPosition:"center" }}>
                    <Title>
                        <div style={{  marginLeft:"20px",color:"white",marginBottom:"20px",fontSize:"20px",fontWeight:"500"}}>{e.title}</div>
                        <Button>Shop</Button>
    
                    </Title>
                </Image>
                </Pdiv>   
                   ))}
            </Grid>
        
        <Headings style={{margin:"70px 0 30px 0"}}>
            Interests
        </Headings>
        <Horizontalscroll img={"./Aor1.jpeg"} Text={"Nike Sportswear"} 
                          img2={"./Aor2.jpeg"} Text2={"Nike Air Force 1 '07"}
                          img3={"./Aor3.jpeg"} Text3={"NikeCourt Dri-FIT Victory"} 
                          img4={"./Aor4.jpeg"} Text4={"Nike Air Force 1 '07"} 
                          img5={"./Aor5.jpeg"} Text5={"Nike Sportswear"} 
                          img6={"./Aor6.jpeg"} Text6={"Nike Sportswear Club Fleece"}/>
       </div>
        <Footer/>
    </Wrapper>
    </Bap>
  )
}

export default Index