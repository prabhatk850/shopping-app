import React from 'react'
import { SiJordan,SiNike, } from 'react-icons/si'
import { LiaHeart } from 'react-icons/lia'
import { IoBagOutline} from 'react-icons/io5'
import { RiSearchLine} from 'react-icons/ri'
import { FiUser} from 'react-icons/fi'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container=styled.div`

`;
const Help =styled.div`
  display: none;
  border-radius: 15px;
  position: absolute;
  background-color: white;
  z-index: 1;
  color: black;
  right: 150px;
`;

const Udl=styled.div`
height: 5px;
color: black;
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
align-items: center;
font-size: 12px;
font-weight: 500;
&:hover{
    color: #6C6C6C;
    cursor: pointer;
    ${Help}{
    display: block;
    }
}
`;
const Div =styled.div`
  display: none;
  width: 60%;
  position: absolute;
  background-color: white;
  z-index: 1;
  padding: 10px 20%;
left: 0;
color: black;
`;
const Piv =styled.div`
padding: 30px 40px 20px;
`;
const Liv =styled.div`
padding: 30px 100px 20px 40px;
`;



const Title =styled.div`
padding: 12px 12px 0px 12px;
font-size: 18px;
  
&:hover{
    color: #6C6C6C;
    cursor: pointer;
    ${Div}{
    display: block;
    }
    ${Udl}{
    color: black;
    }

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

const Heading =styled.div`
font-size: 18px;
padding-bottom: 10px;
font-weight: 500;
&:hover{
    color: #6C6C6C;
    cursor: pointer;
}
`;

const Subtitle =styled.div`
color: #6C6C6C;
font-size: 15px;
line-height: 30px;
&:hover{
    color:  black;
    cursor: pointer;
}
`;

function Header() {

  const navigate=useNavigate()
  return (
    <Container>
      
      <Wrapper>
      <Hover><SiJordan onClick={()=>{navigate("/")}} style={{height:'20px',marginLeft:"50px", width:"20px"}} />
      </Hover>
       <Options1>
        <Field>Find a Store</Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field>Help
        <Help>
          <Piv>
          <Heading>Help</Heading>
          <Subtitle>Order Status</Subtitle>
          <Subtitle>Dispatch & Delivery</Subtitle>
          <Subtitle>Returns</Subtitle>
          <Subtitle>Contact Us</Subtitle>
          <Subtitle>Privacy & Policy</Subtitle>
          <Subtitle>Terms of Sales</Subtitle>
          <Subtitle>Terms of Use</Subtitle>
          <Subtitle>Send Us Feedback</Subtitle>
          </Piv>
        </Help>  
        </Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field>Hi Prabhat
        <Help style={{right:"0"}}>
          <Liv>
          <Heading>Account</Heading>
          <Subtitle onClick={()=>{navigate("/profile")}}>Profile</Subtitle>
          <Subtitle>Olders</Subtitle>
          <Subtitle>Favorites</Subtitle>
          <Subtitle>Inbox</Subtitle>
          <Subtitle>Experiences</Subtitle>
          <Subtitle>Account Settings</Subtitle>
          <Subtitle>Logout</Subtitle>
          </Liv>
        </Help> 
        </Field> <FiUser style={{height:"20px",width:"20px"}} />
        {/* <Field>Join Us</Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field onClick={()=>{navigate("/signin")}}>Sign In</Field> */}
       </Options1> 
      </Wrapper>



      <Wrapper1>

      <Hover><SiNike onClick={()=>{navigate("/")}} style={{height:'60px',marginLeft:"50px",marginRight:"1px", width:"60px"}}/>
      </Hover>


    <Options>
        
        <div>

        <Title >New & Feature
          <Div style={{width:"80%",padding:"0 10%"}} >
            <div style={{display:"flex"}}>
          <Piv>  
              <Heading>New & Feature</Heading>
                <Subtitle>New Arrival</Subtitle>
                <Subtitle>Latest Shoes</Subtitle>
                <Subtitle>Latest Clothing</Subtitle>
                <Subtitle>SNKRS Launch Calender</Subtitle>
                <Subtitle>Top Kicks Under ₹ 8000.00</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop Icons</Heading>
                <Subtitle>Air Force 1</Subtitle>
                <Subtitle>Air Jordan 1</Subtitle>
                <Subtitle>Air Max</Subtitle>
                <Subtitle>Dunk</Subtitle>
                <Subtitle>Cortez</Subtitle>
                <Subtitle>Blazer</Subtitle>
                <Subtitle>Pegasus</Subtitle>
          </Piv>
          <Piv>  
              <Heading>New for Men</Heading>
                <Subtitle>Shoes</Subtitle>
                <Subtitle>Clothing</Subtitle>
                <Subtitle>Accessories</Subtitle>
                <Subtitle>Shop All new</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>New for Women</Heading>
                <Subtitle>Shoes</Subtitle>
                <Subtitle>Clothing</Subtitle>
                <Subtitle>Accessories</Subtitle>
                <Subtitle>Shop All new</Subtitle>
          </Piv>
          <Piv>  
              <Heading>New for Kids</Heading>
                <Subtitle>Shoes</Subtitle>
                <Subtitle>Clothing</Subtitle>
                <Subtitle>Accessories</Subtitle>
                <Subtitle>Shop All new</Subtitle>
          </Piv>
            </div>
          </Div>
        </Title>
        <Udl></Udl>
        </div>

        <Title onClick={()=>{navigate("/Sections")}} >Men 
        <Udl></Udl>
        <Div>  
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Piv>  
              <Heading>Featured</Heading>
                <Subtitle>New Releases</Subtitle>
                <Subtitle>Bestseller</Subtitle>
                <Subtitle>Member Exclusive</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shoes</Heading>
                <Subtitle>All Shoes</Subtitle>
                <Subtitle>Newest Sneakers</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Lifestyle</Subtitle>
                <Subtitle>Running</Subtitle>
                <Subtitle>Basketball</Subtitle>
                <Subtitle>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Clothing</Heading>
                <Subtitle>All Clothing</Subtitle>
                <Subtitle>Tops & T-Shirts</Subtitle>
                <Subtitle>Shorts</Subtitle>
                <Subtitle>Pants & Legging</Subtitle>
                <Subtitle>Hoddies & Sweatshirt</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>Shop By Sports</Heading>
                <Subtitle>Running</Subtitle>
                <Subtitle>Basketball</Subtitle>
                <Subtitle>Football</Subtitle>
                <Subtitle>Tennis</Subtitle>
                <Subtitle>Gym</Subtitle>
                <Subtitle>Yoga</Subtitle>
                <Subtitle>Golf</Subtitle>
                <Subtitle>Skateboard</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Jordan</Heading>
                <Subtitle>All Jordan</Subtitle>
                <Subtitle>New Jordan</Subtitle>
                <Subtitle>Jordan Shoes</Subtitle>
                <Subtitle>Jordan Clothing</Subtitle>
                <Subtitle>Jordan Basketball</Subtitle>
                <Subtitle>Jordan Lifestyle</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop By Brand</Heading>
                <Subtitle>Nike Sportswear</Subtitle>
                <Subtitle>Nike Lab</Subtitle>
                <Subtitle>Nike By You</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>ACG</Subtitle>
                <Subtitle>NBA</Subtitle>
                <Subtitle>Nike SB</Subtitle>
          </Piv>
            </div>
          </Div>
        </Title>


        <Title>Women
        <Udl></Udl>
          <Div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <Piv>  
              <Heading>Featured</Heading>
                <Subtitle>New Releases</Subtitle>
                <Subtitle>Bestseller</Subtitle>
                <Subtitle>Member Exclusive</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shoes</Heading>
                <Subtitle>All Shoes</Subtitle>
                <Subtitle>Newest Sneakers</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Lifestyle</Subtitle>
                <Subtitle>Running</Subtitle>
                <Subtitle>Basketball</Subtitle>
                <Subtitle>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Clothing</Heading>
                <Subtitle>All Clothing</Subtitle>
                <Subtitle>Tops & T-Shirts</Subtitle>
                <Subtitle>Sports Bra</Subtitle>
                <Subtitle>Shorts</Subtitle>
                <Subtitle>Pants & Legging</Subtitle>
                <Subtitle>Hoddies & Sweatshirt</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>Shop By Sports</Heading>
                <Subtitle>Running</Subtitle>
                <Subtitle>Basketball</Subtitle>
                <Subtitle>Football</Subtitle>
                <Subtitle>Tennis</Subtitle>
                <Subtitle>Gym</Subtitle>
                <Subtitle>Yoga</Subtitle>
                <Subtitle>Golf</Subtitle>
                <Subtitle>Skateboard</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop By Brand</Heading>
                <Subtitle>Nike Sportswear</Subtitle>
                <Subtitle>Nike Lab</Subtitle>
                <Subtitle>Nike By You</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>ACG</Subtitle>
                <Subtitle>NBA</Subtitle>
                <Subtitle>Nike SB</Subtitle>
          </Piv>
          </div>
          </Div>
        </Title>
        
        <Title>Kids
        <Udl></Udl>
        <Div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <Piv>  
              <Heading>Featured</Heading>
                <Subtitle>New Releases</Subtitle>
                <Subtitle>Bestseller</Subtitle>
                <Subtitle>Member Exclusive</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Boy's Shoes</Heading>
                <Subtitle>All Shoes</Subtitle>
                <Subtitle>Older Boys (7 - 14 Years)</Subtitle>
                <Subtitle>Younger Boys (4 - 7 Years)</Subtitle>
                <Subtitle>Babies & Toddler (0 - 4 Years)</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Lifestyle</Subtitle>
                <Subtitle>Running</Subtitle>
                <Subtitle>Basketball</Subtitle>
                <Subtitle>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Girls's Shoes</Heading>
                <Subtitle>All Shoes</Subtitle>
                <Subtitle>Older Girls (7 - 14 Years)</Subtitle>
                <Subtitle>Younger Girls (4 - 7 Years)</Subtitle>
                <Subtitle>Babies & Toddler (0 - 4 Years)</Subtitle>
                <Subtitle>Jordan</Subtitle>
                <Subtitle>Lifestyle</Subtitle>
                <Subtitle>Running</Subtitle>
                <Subtitle>Basketball</Subtitle>
                <Subtitle>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Kids By Age</Heading>
                <Subtitle>Olders Kids (7 - 14 Years)</Subtitle>
                <Subtitle>Younger Kids (4 - 7 Years)</Subtitle>
                <Subtitle>Babies & Toddler (0 - 4 Years)</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Boy's Clothing</Heading>
                <Subtitle>Tops & T-Shirts</Subtitle>
                <Subtitle>Shorts</Subtitle>
                <Subtitle>Pants & Legging</Subtitle>
                <Subtitle>Hoddies & Sweatshirt</Subtitle>
                <Subtitle>All Boys Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Girls's Clothing</Heading>
                <Subtitle>Tops & T-Shirts</Subtitle>
                <Subtitle>Sports Bra</Subtitle>
                <Subtitle>Pants & Legging</Subtitle>
                <Subtitle>Hoddies & Sweatshirt</Subtitle>
                <Subtitle>All Boys Clothing</Subtitle>
          </Piv>
          </div>
          </Div>
        </Title>

        <Title>Sale
        <Udl></Udl>
          <Div>
          <div style={{display:"flex",flexWrap:"wrap"}}>
          <Piv>  
              <Heading>Sale</Heading>
                <Subtitle>Sale All Sale</Subtitle>
                <Subtitle>Shoes Sale</Subtitle>
                <Subtitle>Clothing Sale</Subtitle>
                <Subtitle>Accessories & Equipment Sale</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Mens's Sale</Heading>
                <Subtitle>Shoes</Subtitle>
                <Subtitle>Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Women's Sale</Heading>
                <Subtitle>Shoes</Subtitle>
                <Subtitle>Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Kids's Sale</Heading>
                <Subtitle>Shoes</Subtitle>
                <Subtitle>Clothing</Subtitle>
          </Piv>
          </div>
          </Div>
        </Title>
        <Title>SNKRS
        <Udl></Udl>
        </Title>
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