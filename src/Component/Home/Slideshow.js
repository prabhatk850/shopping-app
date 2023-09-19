import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  display:"none"
};

const Div = styled.div`
  text-align: center;
  background-color: #F5f5f5;
  padding: 10px 0 5px ;
`;

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div>
      <Slide {...properties} duration="3000" transitionDuration="300">
        <Div>
          New Styles on Sale: Up to 40% Off
          <Div style={{fontSize:"12px"}} >Shop All Our New Markdowns</Div>
        </Div>
        <Div>
          Hello Nike App
          <Div style={{fontSize:"12px"}} >Download the app to access everything Nike. Get Your Great</Div>
        </Div>
      </Slide>
    </div>
  );
};

export default Slideshow;
