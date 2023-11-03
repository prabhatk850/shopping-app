import React from 'react'
import styled from 'styled-components'
import Header from './../../../Component/Header/Header'
import Horizontalscroll from '../Horizontalscroll'
import Footer from '../../Footer/Footer';

const Wrapper=styled.div`
`;
const Heading=styled.div`
font-size: 30px;
`;
const Heading1=styled.div`
font-size: 30px;
margin: 100px 0 45px 0 ;
`;
const Img=styled.img`
height: 450px;
width: 100%;

`;
const Div=styled.div`
height: 450px;
`;
const Edit=styled.div`
font-size: 20px;
padding: 8px 20px;
border: 1px solid #f5f5f5;
border-radius: 15px;
&:hover{
    border: 1px solid gray;
    cursor: pointer;
}
`;
const Text = styled.div`
color:black;
padding-bottom: 5px;
font-weight: 500;
`;
const Container = styled.div`
display: flex;
justify-content: space-between;
`;

 const dummyData=[
    {
        img:"./AF1.jpeg",
        Text:"Nike Air Force 1 '07 EasyOn",
        Subtext:"Shoes",
        Cost:"$189.00"
    },
    {
        img:"./AF1.jpeg",
        Text:"Nike Air Force 1 '07 EasyOn",
        Subtext:"Shoes",
        Cost:"$189.00"
    },
    {
        img:"./AF1.jpeg",
        Text:"Nike Air Force 1 '07 EasyOn",
        Subtext:"Shoes",
        Cost:"$189.00"
    }
  

]
function Index(e) {

  return (
    <Wrapper>
        <Header/>
        <div style={{margin:" 0 45px"}}>
        <div style={{display:"flex",justifyContent:"space-between",margin:"20px 0"}}>
        <Heading>
            Favorite
        </Heading>
        <Edit>
            Edit
        </Edit>
        </div>

        <div style={{  display: "grid",margin: "30px 0",width:"100%" ,gridTemplateColumns: "31% 31% 31%", gap:"45px",rowGap:"85px", height:"auto"}}>
         
        {dummyData.map((e)=>(        
        <Div>
            <Img src={e.img} ></Img>
            <Container>
            <Text>{e.Text}</Text>
            <Text style={{fontWeight:"500"}}>{e.Cost}</Text>
           </Container>
          <Text style={{color:"gray"}}>{e.Subtext}</Text>
        </Div>
        ))}
        </div>
        <Heading1>
            Find What's Next For You
        </Heading1>
        </div>
        <Horizontalscroll img={"./Aor1.jpeg"} Text={"Nike Sportswear"} Subtext={"Men's Overized T-shirt"} Cost={"$ 3 095"}
                          img2={"./Aor2.jpeg"} Text2={"Nike Air Force 1 '07"} Subtext2={"Men's Shoes"} Cost2={"$ 7 495"}
                          img3={"./Aor3.jpeg"} Text3={"NikeCourt Dri-FIT Victory"} Subtext3={"Men's 9' (23cm approx.) Tennis Shorts"} Cost3={"$ 2 395"}
                          img4={"./Aor4.jpeg"} Text4={"Nike Air Force 1 '07"} Subtext4={"Women's Shoes"} Cost4={"$ 9 695"}
                          img5={"./Aor5.jpeg"} Text5={"Nike Sportswear"} Subtext5={"Women's T-shirt"} Cost5={"$ 2 595"}
                          img6={"./Aor6.jpeg"} Text6={"Nike Sportswear Club Fleece"} Subtext6={"Women's Mid-Rise Shorts"} Cost6={"$ 2 595"}/>
     
        <Footer/>
    </Wrapper>
  )
}

export default Index