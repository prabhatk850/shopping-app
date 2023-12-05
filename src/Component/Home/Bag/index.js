import React from 'react'
import Header from '../../Header/Header'
import styled from 'styled-components'
import Footer from '../../Footer/Footer';
import {LiaHeart} from 'react-icons/lia';
import {GoTrash} from 'react-icons/go';
import Horizontalscroll from '../Horizontalscroll'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../App/addtocartSlice';
import { addFavoriteProducts } from '../../Service/Product';
import { updateQuantity } from '../../App/addtocartSlice';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Wrapper = styled.div``;
const Heading = styled.div`
font-size: 30px;
font-weight: 400;
`;
const Heading1 = styled.div`
font-size: 30px;
font-weight: 400;
margin: 50px 45px 30px 45px;
`;
const Div = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 20px;
border-bottom: 1px solid lightgray;
padding-bottom: 20px;
`;
const Img = styled.img`
height: 150px;
width: 150px;
`;

const About = styled.div`
margin-left: 20px;
`;
const InnerHeading = styled.div`
font-size: 20px;
font-weight: 400;
`;
const Product = styled.div`
color: gray;
margin-top: 10px;
margin-bottom: 10px;
font-size: 15px;

`;
const Colour = styled.div`
color: gray;
margin-bottom: 10px;
font-size: 15px;

`;
const Size = styled.div`
color: gray;
margin-right: 20px;
`;

const Price = styled.div`
font-size: 20px;
font-weight: 400;

`;

const SubTotal = styled.div`
margin: 10px 0;
`;   
const Extra = styled.div`
margin: 10px 0;`; 
const Total = styled.div`
margin: 20px 0;`;
const Text = styled.div`
font-size: 18px;
margin: 10px 0;
`;
const Minus = styled.div`
height: 25px;
width: 25px;
display: flex;
align-items: center;
color: gray;
justify-content: center;
font-size: 20px;
cursor: pointer;
&:hover{
    cursor: pointer;
  }
`;
const Plus = styled.div`
height: 25px;
width: 25px;
color: gray;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
cursor: pointer;
  &:hover{
    cursor: pointer;;
  }
`;
const Countq = styled.div`
height: 25px;
width: 25px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
`;
const Quantity = styled.div`
display: flex;
align-items: center;

`;

function Index() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const product = useSelector((state) => state.cart)
    const total = useSelector((state) => state.total)
    const totalItems =  parseInt(useSelector((state) => state.totalItems)) || 0

        const handlefav=(name,type,price,pic)=>{
             const data={name,type,price,pic}
            addFavoriteProducts(data).then((result)=>{
                console.log("result",result)
            }).catch((error)=>{
                console.log("error",error)
            })
            console.log("ttt",data)
            
        }  

    const handleRemoveFromCart = (_id)=>{
        console.log("id",_id)
        
        dispatch(removeFromCart(_id))
    
      }
      const handleQuantityMinus = (_id)=>{
        const data ={"quantity":-1,_id}    
          dispatch(updateQuantity(data))
      }
      const handleQuantityPlus = (_id)=>{
        const data ={"quantity":1,_id}    
        dispatch(updateQuantity(data))
      }
    

  

 
    return (

    <Wrapper>
        <Header/>
        {totalItems===0 ? <div style={{display:"flex",justifyContent:"center",margin:"50px 0"}}>No Items in Bag</div>:
        <div>

        <div style={{display:"flex", justifyContent:"center",margin:"50px 0"}}>
            <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
        <Heading>Bag</Heading>
        
                {product.map((e) => (
                    <div key={e._id} style={{display:"flex", flexDirection:"column", margin:"0 50px 0 0"}}>
                        <Div>
                            <div style={{display:"flex"}}>
                                <Img onClick={()=>{navigate('/product',{state:{MHeading:e.type,SubHeading:e.name}})}} src={e.pic}></Img>
                                <About>
                                    <InnerHeading>
                                        {e.name}
                                    </InnerHeading>
                                    <Product>
                                        {e.type}
                                    </Product>
                                    <div style={{display:"flex",marginBottom:"20px"}}>
                         <Size>{e.size}</Size>
                         <Quantity>
              <Minus onClick={()=>{handleQuantityMinus(e._id)}}>-</Minus>
              <Countq>{e.quantity}</Countq>
              <Plus onClick={()=>{handleQuantityPlus(e._id)}}>+</Plus>
            </Quantity>
                     </div>
                     <div style={{display:"flex"}}>
                         <div onClick={()=>{handlefav(e.name,e.type,e.price,e.pic)}} ><LiaHeart style={{height:"25px",width:"25px",marginRight:"20px"}}/></div>
                         <div  onClick={()=>{handleRemoveFromCart(e._id)}}><GoTrash style={{height:"25px",width:"25px"}}/></div>
                        </div>
                                </About>
                            </div>
                            <Price>MRP: ₹ {e.price} </Price>
                        </Div>
                    </div>
                ))}
            </div>
            
            <div style={{display:"flex", flexDirection:"column", width:"30%"}}>
            <Heading>Summary</Heading>
            
                <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Text>Subtotal</Text>
                    <SubTotal>₹ {total}</SubTotal>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Text>Extra Delivery & Handling</Text>
                    <Extra>₹ 1250</Extra>
                </div>
                <div style={{borderBottom:"1px solid lightgray",marginBottom:"20px"}}></div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Text>Total</Text>
                <Total>₹ {total + 1250}</Total>
                </div>
                </div>
            </div>
                
        </div>
        </div>}

        <Heading1>You Might Also Like </Heading1>
        
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