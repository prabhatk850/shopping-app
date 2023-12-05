import React from 'react'
import styled from 'styled-components'

 const Img =styled.img`
 width: 100%;
 height: 700px;
 &:hover{
    
    cursor: pointer;
}

 `;

 const Wrapper=styled.div`
 padding-bottom: 50px;
 &:hover{
    cursor: pointer;
}
`;
 
 const SubTitle=styled.div`
 font-size: 22px;
 text-align: center;
 padding-bottom: 50px;
 padding-top: 50px;
 &:hover{
  cursor: pointer;
}

 `;
 
 


function Image(props) {
    

  return (
    <Wrapper>


    <div style={{display:"flex"}}>
        <div style={{width:"45px"}}></div>
          <Img src={props.url} alt='' />
        <div style={{width:"45px"}}></div>
    </div>
    <SubTitle>
        {props.Title.SubTitle}    
    </SubTitle>
    

    </Wrapper>
  )
}

export default Image