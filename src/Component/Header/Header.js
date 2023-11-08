import React, { useEffect,useState } from 'react'
import { SiJordan,SiNike, } from 'react-icons/si'
import { LiaHeart } from 'react-icons/lia'
import { IoBagOutline} from 'react-icons/io5'
import { RiSearchLine} from 'react-icons/ri'
import { FiUser} from 'react-icons/fi'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { doLoggedOut } from '../Service/Auth'
import { getUserDetails } from '../Service/Profile'

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
const Tiv =styled.div`
display: flex;
&:hover{
    color: #6C6C6C;
    cursor: pointer;
    ${Help}{
    display: block;
    }
}
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

// const Overlay=styled.div`
// height: 100%;
// position: fixed;
// left: 0;
// right: 0;
// width:100%;
// display:flex;
// justify-content: center;
// backdrop-filter: blur(5px);


// `;

function Header() {
 const [userDetail,setUserDetail]=useState({}) 
 const [isLoggedOut,setIsLoggedOut]=useState(true)

  const navigate=useNavigate()

  const handleHover=(event)=>{
    event.stopPropagation();
    navigate("/product");
  }

  useEffect(()=>{
    const token=localStorage.getItem("token")
    setIsLoggedOut(token?false:true)
    getUserDetails().then((result)=>{
      console.log("user",result.data)
      setUserDetail(result.data)
    }).catch((err)=>{
      console.log("error for getuserDetails",err)
    })
  },[],[isLoggedOut])
  
  
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
       {isLoggedOut?"":
       <Tiv style={{display:"flex"}} >
        <Field>Hi {userDetail.firstname}
        <Help style={{right:"0"}}>
          <Liv>
          <Heading>Account</Heading>
          <Subtitle onClick={()=>{navigate("/profile")}}>Profile</Subtitle>
          <Subtitle>Orders</Subtitle>
          <Subtitle onClick={()=>{navigate("/favorite")}}>Favorites</Subtitle>
          <Subtitle>Inbox</Subtitle>
          <Subtitle>Experiences</Subtitle>
          <Subtitle onClick={()=>{navigate("/setting")}}>Account Settings</Subtitle>
          <Subtitle onClick={()=>{doLoggedOut()}}>Logout</Subtitle>
          </Liv>
        </Help> 
        </Field>
        <FiUser style={{height:"20px",width:"20px"}} />
        </Tiv>}
        {isLoggedOut?
        <div style={{display:"flex"}}>
        <Field>Join Us</Field><div style={{fontSize:"10px",marginTop:"3px"}}>|</div>
        <Field onClick={()=>{navigate("/signin")}}>Sign In</Field>
        </div>:""}
       </Options1> 
      </Wrapper>



      <Wrapper1>

      <Hover><SiNike onClick={()=>{navigate("/")}} style={{height:'60px',marginLeft:"50px",marginRight:"1px", width:"60px"}}/>
      </Hover>


    <Options>
        
        <div>
        <Title >New & Feature
  {/* <Overlay> */}
          <Div style={{width:"80%",padding:"0 10%"}} >
            <div style={{display:"flex"}}>
          <Piv>  
              <Heading>New & Feature</Heading>
                <Subtitle onClick={handleHover} >New Arrival</Subtitle>
                <Subtitle onClick={handleHover}>Latest Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Latest Clothing</Subtitle>
                <Subtitle onClick={handleHover}>SNKRS Launch Calender</Subtitle>
                <Subtitle onClick={handleHover}>Top Kicks Under ₹ 8000.00</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop Icons</Heading>
                <Subtitle onClick={handleHover}>Air Force 1</Subtitle>
                <Subtitle onClick={handleHover}>Air Jordan 1</Subtitle>
                <Subtitle onClick={handleHover}>Air Max</Subtitle>
                <Subtitle onClick={handleHover}>Dunk</Subtitle>
                <Subtitle onClick={handleHover}>Cortez</Subtitle>
                <Subtitle onClick={handleHover}>Blazer</Subtitle>
                <Subtitle onClick={handleHover}>Pegasus</Subtitle>
          </Piv>
          <Piv>  
              <Heading>New for Men</Heading>
                <Subtitle onClick={handleHover}>Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Clothing</Subtitle>
                <Subtitle onClick={handleHover}>Accessories</Subtitle>
                <Subtitle onClick={handleHover}>Shop All new</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>New for Women</Heading>
                <Subtitle onClick={handleHover}>Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Clothing</Subtitle>
                <Subtitle onClick={handleHover}>Accessories</Subtitle>
                <Subtitle onClick={handleHover}>Shop All new</Subtitle>
          </Piv>
          <Piv>  
              <Heading>New for Kids</Heading>
                <Subtitle onClick={handleHover}>Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Clothing</Subtitle>
                <Subtitle onClick={handleHover}>Accessories</Subtitle>
                <Subtitle onClick={handleHover}>Shop All new</Subtitle>
          </Piv>
            </div>
          </Div>
  {/* </Overlay>       */}
        </Title>
        <Udl></Udl>
        </div>

        <Title onClick={()=>{navigate("/Sections",{state:{"Gender":"Men","T1":"Shoes","T2":"Cloths","T3":"Gears"}})}}>Men 
        <Udl></Udl>
        <Div>  
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Piv>  
              <Heading>Featured</Heading>
                <Subtitle onClick={handleHover}>New Releases</Subtitle>
                <Subtitle onClick={handleHover}>Bestseller</Subtitle>
                <Subtitle onClick={handleHover}>Member Exclusive</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shoes</Heading>
                <Subtitle onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Newest Sneakers</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle onClick={handleHover}>Running</Subtitle>
                <Subtitle onClick={handleHover}>Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Clothing</Heading>
                <Subtitle onClick={handleHover}>All Clothing</Subtitle>
                <Subtitle onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle onClick={handleHover}>Shorts</Subtitle>
                <Subtitle onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>Shop By Sports</Heading>
                <Subtitle onClick={handleHover}>Running</Subtitle>
                <Subtitle onClick={handleHover}>Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Football</Subtitle>
                <Subtitle onClick={handleHover}>Tennis</Subtitle>
                <Subtitle onClick={handleHover}>Gym</Subtitle>
                <Subtitle onClick={handleHover}>Yoga</Subtitle>
                <Subtitle onClick={handleHover}>Golf</Subtitle>
                <Subtitle onClick={handleHover}>Skateboard</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Jordan</Heading>
                <Subtitle onClick={handleHover}>All Jordan</Subtitle>
                <Subtitle onClick={handleHover}>New Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Jordan Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Jordan Clothing</Subtitle>
                <Subtitle onClick={handleHover}>Jordan Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Jordan Lifestyle</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop By Brand</Heading>
                <Subtitle onClick={handleHover}>Nike Sportswear</Subtitle>
                <Subtitle onClick={handleHover}>Nike Lab</Subtitle>
                <Subtitle onClick={handleHover}>Nike By You</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>ACG</Subtitle>
                <Subtitle onClick={handleHover}>NBA</Subtitle>
                <Subtitle onClick={handleHover}>Nike SB</Subtitle>
          </Piv>
            </div>
          </Div>
        </Title>


        <Title onClick={()=>{navigate("/Sections",{state:{"Gender":"Womens","T1":"Shoes","T2":"Cloths","T3":"Gears"}})}}>Women
        <Udl></Udl>
          <Div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <Piv>  
              <Heading>Featured</Heading>
                <Subtitle onClick={handleHover}>New Releases</Subtitle>
                <Subtitle onClick={handleHover}>Bestseller</Subtitle>
                <Subtitle onClick={handleHover}>Member Exclusive</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shoes</Heading>
                <Subtitle onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Newest Sneakers</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle onClick={handleHover}>Running</Subtitle>
                <Subtitle onClick={handleHover}>Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Clothing</Heading>
                <Subtitle onClick={handleHover}>All Clothing</Subtitle>
                <Subtitle onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle onClick={handleHover}>Sports Bra</Subtitle>
                <Subtitle onClick={handleHover}>Shorts</Subtitle>
                <Subtitle onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>Shop By Sports</Heading>
                <Subtitle onClick={handleHover}>Running</Subtitle>
                <Subtitle onClick={handleHover}>Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Football</Subtitle>
                <Subtitle onClick={handleHover}>Tennis</Subtitle>
                <Subtitle onClick={handleHover}>Gym</Subtitle>
                <Subtitle onClick={handleHover}>Yoga</Subtitle>
                <Subtitle onClick={handleHover}>Golf</Subtitle>
                <Subtitle onClick={handleHover}>Skateboard</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop By Brand</Heading>
                <Subtitle onClick={handleHover}>Nike Sportswear</Subtitle>
                <Subtitle onClick={handleHover}>Nike Lab</Subtitle>
                <Subtitle onClick={handleHover}>Nike By You</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>ACG</Subtitle>
                <Subtitle onClick={handleHover}>NBA</Subtitle>
                <Subtitle onClick={handleHover}>Nike SB</Subtitle>
          </Piv>
          </div>
          </Div>
        </Title>
        
        <Title onClick={()=>{navigate("/Sections",{state:{"Gender":"Kids","T1":"Shoes","T2":"Cloths","T3":"Gears"}})}}>Kids
        <Udl></Udl>
        <Div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <Piv>  
              <Heading>Featured</Heading>
              <Subtitle onClick={handleHover}>New Releases</Subtitle>
                {/* <Subtitle onClick={handleHover}>New Releases</Subtitle> */}
                <Subtitle onClick={handleHover}>Bestseller</Subtitle>
                <Subtitle onClick={handleHover}>Member Exclusive</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Boy's Shoes</Heading>
                <Subtitle onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Older Boys (7 - 14 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Younger Boys (4 - 7 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Babies & Toddler (0 - 4 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle onClick={handleHover}>Running</Subtitle>
                <Subtitle onClick={handleHover}>Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Girls's Shoes</Heading>
                <Subtitle onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Older Girls (7 - 14 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Younger Girls (4 - 7 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Babies & Toddler (0 - 4 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Jordan</Subtitle>
                <Subtitle onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle onClick={handleHover}>Running</Subtitle>
                <Subtitle onClick={handleHover}>Basketball</Subtitle>
                <Subtitle onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Kids By Age</Heading>
                <Subtitle onClick={handleHover}>Olders Kids (7 - 14 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Younger Kids (4 - 7 Years)</Subtitle>
                <Subtitle onClick={handleHover}>Babies & Toddler (0 - 4 Years)</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Boy's Clothing</Heading>
                <Subtitle onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle onClick={handleHover}>Shorts</Subtitle>
                <Subtitle onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                <Subtitle onClick={handleHover}>All Boys Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Girls's Clothing</Heading>
                <Subtitle onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle onClick={handleHover}>Sports Bra</Subtitle>
                <Subtitle onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                <Subtitle onClick={handleHover}>All Boys Clothing</Subtitle>
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
                <Subtitle onClick={handleHover}>Sale All Sale</Subtitle>
                <Subtitle onClick={handleHover}>Shoes Sale</Subtitle>
                <Subtitle onClick={handleHover}>Clothing Sale</Subtitle>
                <Subtitle onClick={handleHover}>Accessories & Equipment Sale</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Mens's Sale</Heading>
                <Subtitle onClick={handleHover}>Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Women's Sale</Heading>
                <Subtitle onClick={handleHover}>Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Kids's Sale</Heading>
                <Subtitle onClick={handleHover}>Shoes</Subtitle>
                <Subtitle onClick={handleHover}>Clothing</Subtitle>
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

       <Hover onClick={()=>{navigate("/favorite")}}><LiaHeart style={{height:'24px',marginRight:"20px",marginLeft:"20px",paddingTop:"10px", width:"24px"}}/>
       </Hover>
       <Hover onClick={()=>{navigate("/bag")}}><IoBagOutline  style={{height:'24px',marginRight:"15px",paddingTop:"10px", width:"24px"}}/>
       </Hover>
    </Options>
  

    </Wrapper1>

    </Container>
  )
}

export default Header