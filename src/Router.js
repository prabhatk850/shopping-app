import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Product from './Component/Products';
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signin/Signup';

function Router() {
  return (
    <BrowserRouter>
    <Routes>     
      <Route path="/" element={<Home/>}/> 
      <Route path="/Header" element={<Header/>}/>  
      <Route path="/Footer" element={<Footer/>}/> 
      <Route path="/Product" element={<Product/>}/> 
      <Route path="/signin" element={<Signin/>}/> 
      <Route path="/signup" element={<Signup/>}/> 
    </Routes>
    
  </BrowserRouter>
  )
}

export default Router