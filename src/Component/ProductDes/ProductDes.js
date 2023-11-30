import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import styled from 'styled-components'
import { LiaHeart } from 'react-icons/lia'
import { GoDotFill } from 'react-icons/go'
import { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { addFavoriteProducts } from '../Service/Product';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../App/addtocartSlice';


const Wrapper=styled.div`
display:flex;
justify-content: space-between;
margin: 100px  100px;
height: 720px;

`;
const Photos=styled.div`

`;
const Img=styled.img`
width: 70px;
height: 70px;
border:1px solid #F6F6F6;
border-radius: 15px;
margin: 10px;
&:hover{
border: 1px solid black;
}
`;
const MainPic=styled.img`
height: 670px;
width: 540px;
`;
const Headding= styled.div`
font-size:25px;
margin-bottom: 5px;
`;
const SubHeadding= styled.div`
font-size:18px;
margin-bottom: 20px;
`;
const Price= styled.div`
font-weight: 500;
margin-bottom: 10px;
`;

const Include= styled.div`
color: #757575;
margin-bottom: 10px;
`;
const SelectSize=styled.div`

`;
const Add=styled.div`
text-align: center;
padding-top: 25px;
width: 375px;
height: 45px;
border: 1px solid gray;
border-radius: 35px;
margin: 10px 0;
background-color: black;
color: white;
`;
const Size=styled.div`
height: 35px;
width: 80px;
border: 1px solid #C0C0C0;
margin: 5px 5px;
border-radius: 5px;
padding: 15px 0 0 35px;

&:hover{
    border: 1px solid black;
}

`;
const SizeGuide=styled.div`
color: gray;
`;
const Description=styled.div`
margin: 40px 0 20px;
letter-spacing: 1px;
`;
const Productid=styled.div`
letter-spacing: 1px;
align-items: center;
margin-bottom: 5px;
`;
const ProductLink=styled.div`
letter-spacing: 1px;
margin: 20px 0;
text-decoration: underline;
font-weight: 500;
&:hover{
    color: gray;
}
`;

const AccHeading=styled.div`
padding-bottom: 20px;
display: flex;
justify-content: space-between;
`;

const Info=styled.div`
`;
const Acc=styled.div`
`;
const Det=styled.div`
padding-bottom: 15px;
`;



function ProductDes() {
    const dispatch = useDispatch()
    const location=useLocation()
    const {_id,
        name,
        type,
        colourways,
        price,
        offer_price,
        off_percent,
        pic,
        logo,
        heading,
        url}=location.state

    const images = [    
        {
            original: pic,
            thumbnail: pic,
            },
            {
            original: './AF1.jpeg',
            thumbnail: './AF1.jpeg',
            }
    ]
    const [accordian,SetAccordian]=useState(false)
    const handleAddtocart=()=>{
        const size= "UK 3"
        console.log("first",_id)
        const data={_id,name,type,price,pic,size}
        dispatch(addToCart(data))
    }

    const handleAccordian=()=>{
        SetAccordian(!accordian)
    }
    const handlefav=()=>{
        const data={name,type,colourways,price,offer_price,off_percent,pic,logo,heading,url}
        addFavoriteProducts(data).then((result)=>{
            console.log("result",result)
        }).catch((error)=>{
            console.log("error",error)
        })
        
    }

    const accordiandata=[
        {
          headding:"Delivery & Returns"
        }
    ]
      

  return (
    <Wrapper>
        <div className='dflex'>
            <ReactImageGallery className='product' showFullscreenButton={false} showNav={false} showPlayButton={false} items={images} thumbnailPosition='left'></ReactImageGallery>
        </div>
        <div style={{width:"400px",overflowY:"auto",}} >
        
        <div>
            <Headding>{name}</Headding>
            <SubHeadding>{type}</SubHeadding>
            <Price>MRP : ₹{price}.00</Price>
            <Include>incl. of taxes</Include>
            <Include>(Also includes all applicable duties)</Include>
        </div>
       
        <Photos style={{marginTop:"40px"}}>
            <Img src='./AF1.jpeg' alt='' ></Img>
            <Img src='./AF1.jpeg' alt='' ></Img>
            <Img src='./AF1.jpeg' alt='' ></Img>
            <Img src='./AF1.jpeg' alt='' ></Img>
       </Photos>
        
        <div className='dflex' style={{justifyContent:"space-between",margin:"30px 0 10px 0"}} >
            <SelectSize>Select Size</SelectSize>
            <SizeGuide>Size Guide</SizeGuide>
        </div>
        <div className='dflex' style={{display:"grid", gridTemplateColumns:"repeat(3,minmax(0, 1fr))"}}>
            <Size>UK 3</Size>
            <Size>UK 3.5</Size>
            <Size>UK 4</Size>
            <Size>UK 4.5</Size>
            <Size>UK 5</Size>
            <Size>UK 5.5</Size>
            <Size>UK 6</Size>
            <Size>UK 6.5</Size>
        </div>
        <Add onClick={handleAddtocart}>Add to bag</Add>
        <Add style={{backgroundColor:"white", color:"black"}} onClick={()=>{handlefav(_id,name)}}>Favorite <LiaHeart/> </Add>
        
        <Description>Kick it in comfort in the Nike Air Force 1.The feel of classic leather and details that made this shoe an icon are sure to make your sneaker style stand out on the street.</Description>
        <Productid><GoDotFill/> Colour Shown: White/Black</Productid>
        <Productid><GoDotFill/> Style: CT3839-100</Productid>
        <ProductLink> View Product Details</ProductLink>
        {accordiandata.map((e)=>(
            <AccHeading onClick={handleAccordian}>
            <div style={{fontSize:"20px",marginBottom:"20px"}} >{e.headding}</div>
            {accordian?<RiArrowUpSLine style={{paddingRight:"5px",height:"25px",width:"25px"}}/>:<RiArrowDownSLine style={{paddingRight:"5px",height:"25px",width:"25px"}} /> } 
            </AccHeading>
        ))}
        {accordian?<Info>
                <Det>All purchases are subject to delivery fees.</Det>
                <Det><GoDotFill/> Standard delivery 4–9 business days</Det>
                <Det>Orders are processed and delivered Monday–Friday (excluding public holidays)</Det>
                <Det>Nike Members enjoy free returns.</Det>
        </Info>: ""}
       


       </div>
    </Wrapper>
  )
}

export default ProductDes