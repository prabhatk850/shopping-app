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
import { useSelector } from 'react-redux'


const Container=styled.div`
width: 100%;
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
width: 100%;
justify-content: space-between;
background-color: #F5F5F5;
padding: 8px 0;
`;

const Wrapper1=styled.div`
display: flex;
width: 100%;
justify-content: space-between;
height:60px;
/* @media (max-width: 768px) {
  width: 25%;
} */
`;



const Options =styled.div`
display: flex;
padding-right: 45px;
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
  const totalItems = parseInt(useSelector((state) => state.totalItems)) || " "
  const handleHover=(event)=>{
    event.stopPropagation();
    const MHeading1=event.target.getAttribute("data-value")
    const SubHeading=event.target.innerText
    navigate("/product",{state:{MHeading1,SubHeading}});
  }

  useEffect(()=>{
    const token=localStorage.getItem("token")
    setIsLoggedOut(token?false:true)
    getUserDetails().then((result)=>{
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
  
          <Div style={{width:"80%",padding:"50px 10%"}} >
            <div style={{display:"flex"}}>
          <Piv>  
              <Heading>New & Feature</Heading>
                <Subtitle data-value="New & Feature" onClick={handleHover} >New Arrival</Subtitle>
                <Subtitle data-value="New & Feature" onClick={handleHover}>Latest Shoes</Subtitle>
                <Subtitle data-value="New & Feature" onClick={handleHover}>Latest Clothing</Subtitle>
                <Subtitle data-value="New & Feature" onClick={handleHover}>SNKRS Launch Calender</Subtitle>
                <Subtitle data-value="New & Feature" onClick={handleHover}>Top Kicks Under ₹ 8000.00</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop Icons</Heading>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Air Force 1</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Air Max</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Blazer</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>React</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Air Jordan 1</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Dunk</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Cortez</Subtitle>
                <Subtitle data-value="Shop Icons" onClick={handleHover}>Pegasus</Subtitle>
          </Piv>
          <Piv>  
              <Heading>New for Men</Heading>
                <Subtitle data-value="New for Men" onClick={handleHover}>Shoes</Subtitle>
                <Subtitle data-value="New for Men" onClick={handleHover}>Clothing</Subtitle>
                <Subtitle data-value="New for Men" onClick={handleHover}>Accessories</Subtitle>
                <Subtitle data-value="New for Men" onClick={handleHover}>Shop All new</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>New for Women</Heading>
                <Subtitle data-value="New for Women" onClick={handleHover}>Shoes</Subtitle>
                <Subtitle data-value="New for Women" onClick={handleHover}>Clothing</Subtitle>
                <Subtitle data-value="New for Women" onClick={handleHover}>Accessories</Subtitle>
                <Subtitle data-value="New for Women" onClick={handleHover}>Shop All new</Subtitle>
          </Piv>
          <Piv>  
              <Heading>New for Kids</Heading>
                <Subtitle data-value="New for Kids" onClick={handleHover}>Shoes</Subtitle>
                <Subtitle data-value="New for Kids" onClick={handleHover}>Clothing</Subtitle>
                <Subtitle data-value="New for Kids" onClick={handleHover}>Accessories</Subtitle>
                <Subtitle data-value="New for Kids" onClick={handleHover}>Shop All new</Subtitle>
          </Piv>
            </div>
          </Div>

        </Title>
        <Udl></Udl>
        </div>

        <Title onClick={()=>{navigate("/Sections",{state:{"Gender":"Men","T1":"Shoes","T2":"Cloths","T3":"Gears"}})}}>Men 
        <Udl></Udl>
        <Div>  
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <Piv>  
              <Heading>Featured</Heading>
                <Subtitle data-value="Featured" onClick={handleHover}>New Releases</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Bestseller</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Member Exclusive</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shoes</Heading>
                <Subtitle data-value="Shoes" onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Newest Sneakers</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Running</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Basketball</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Clothing</Heading>
                <Subtitle data-value="Clothing" onClick={handleHover}>All Clothing</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Shorts</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>Shop By Sports</Heading>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Running</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Basketball</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Football</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Tennis</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Gym</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Yoga</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Golf</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Skateboard</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Jordan</Heading>
                <Subtitle data-value="Jordan" onClick={handleHover}>All Jordan</Subtitle>
                <Subtitle data-value="Jordan" onClick={handleHover}>New Jordan</Subtitle>
                <Subtitle data-value="Jordan" onClick={handleHover}>Jordan Shoes</Subtitle>
                <Subtitle data-value="Jordan" onClick={handleHover}>Jordan Clothing</Subtitle>
                <Subtitle data-value="Jordan" onClick={handleHover}>Jordan Basketball</Subtitle>
                <Subtitle data-value="Jordan" onClick={handleHover}>Jordan Lifestyle</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop By Brand</Heading>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike Sportswear</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike Lab</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike By You</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>ACG</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>NBA</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike SB</Subtitle>
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
                <Subtitle data-value="Featured" onClick={handleHover}>New Releases</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Bestseller</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Member Exclusive</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shoes</Heading>
              <Subtitle data-value="Shoes" onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Newest Sneakers</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Running</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Basketball</Subtitle>
                <Subtitle data-value="Shoes" onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Clothing</Heading>
                <Subtitle data-value="Clothing" onClick={handleHover}>All Clothing</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Shorts</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle data-value="Clothing" onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                
          </Piv>
          <Piv>  
              <Heading>Shop By Sports</Heading>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Running</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Basketball</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Football</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Tennis</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Gym</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Yoga</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Golf</Subtitle>
                <Subtitle data-value="Shop By Sports" onClick={handleHover}>Skateboard</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Shop By Brand</Heading>
              <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike Sportswear</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike Lab</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike By You</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>ACG</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>NBA</Subtitle>
                <Subtitle data-value="Shop By Brand" onClick={handleHover}>Nike SB</Subtitle>
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
                <Subtitle data-value="Featured" onClick={handleHover}>New Releases</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Bestseller</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Member Exclusive</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Featured" onClick={handleHover}>Retro Running</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Boy's Shoes</Heading>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Older Boys (7 - 14 Years)</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Younger Boys (4 - 7 Years)</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Babies & Toddler (0 - 4 Years)</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Running</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Basketball</Subtitle>
                <Subtitle data-value="Boy's Shoes" onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Girls's Shoes</Heading>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>All Shoes</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Older Girls (7 - 14 Years)</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Younger Girls (4 - 7 Years)</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Babies & Toddler (0 - 4 Years)</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Jordan</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Lifestyle</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Running</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Basketball</Subtitle>
                <Subtitle data-value="Girls's Shoes" onClick={handleHover}>Football</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Kids By Age</Heading>
                <Subtitle data-value="Kids By Age" onClick={handleHover}>Olders Kids (7 - 14 Years)</Subtitle>
                <Subtitle data-value="Kids By Age" onClick={handleHover}>Younger Kids (4 - 7 Years)</Subtitle>
                <Subtitle data-value="Kids By Age" onClick={handleHover}>Babies & Toddler (0 - 4 Years)</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Boy's Clothing</Heading>
                <Subtitle data-value="Boy's Clothing" onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle data-value="Boy's Clothing" onClick={handleHover}>Shorts</Subtitle>
                <Subtitle data-value="Boy's Clothing" onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle data-value="Boy's Clothing" onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                <Subtitle data-value="Boy's Clothing" onClick={handleHover}>All Boys Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Girls's Clothing</Heading>
                <Subtitle data-value="Girls's Clothing" onClick={handleHover}>Tops & T-Shirts</Subtitle>
                <Subtitle data-value="Girls's Clothing" onClick={handleHover}>Sports Bra</Subtitle>
                <Subtitle data-value="Girls's Clothing" onClick={handleHover}>Pants & Legging</Subtitle>
                <Subtitle data-value="Girls's Clothing" onClick={handleHover}>Hoddies & Sweatshirt</Subtitle>
                <Subtitle data-value="Girls's Clothing" onClick={handleHover}>All Boys Clothing</Subtitle>
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
                <Subtitle data-value="Sale" onClick={handleHover}>Sale All Sale</Subtitle>
                <Subtitle data-value="Sale" onClick={handleHover}>Shoes Sale</Subtitle>
                <Subtitle data-value="Sale" onClick={handleHover}>Clothing Sale</Subtitle>
                <Subtitle data-value="Sale" onClick={handleHover}>Accessories & Equipment Sale</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Mens's Sale</Heading>
                <Subtitle data-value="Mens's Sale" onClick={handleHover}>Shoes</Subtitle>
                <Subtitle data-value="Mens's Sale" onClick={handleHover}>Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Women's Sale</Heading>
                <Subtitle data-value="Women's Sale" onClick={handleHover}>Shoes</Subtitle>
                <Subtitle data-value="Women's Sale" onClick={handleHover}>Clothing</Subtitle>
          </Piv>
          <Piv>  
              <Heading>Kids's Sale</Heading>
                <Subtitle data-value="Kids's Sale" onClick={handleHover}>Shoes</Subtitle>
                <Subtitle data-value="Kids's Sale" onClick={handleHover}>Clothing</Subtitle>
          </Piv>
          </div>
          </Div>
        </Title>
        <Title> SNKRS
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
       <Hover  style={{display:"flex" }} onClick={()=>{navigate("/bag")}}><IoBagOutline  style={{height:'24px',marginRight:"15px",paddingTop:"10px", width:"24px"}}/>
       <div style={{marginLeft:"-33px",marginTop:"20px",fontSize:"10px"}}>{totalItems}</div>
       </Hover>
    </Options>
  

    </Wrapper1>

    </Container>
  )
}

export default Header