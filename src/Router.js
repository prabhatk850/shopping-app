import React from 'react'
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Component/Products';

function Router() {
  return (
    <BrowserRouter>
    <Routes>     
      <Route path="/" element={<Home/>}/> 
      <Route path="/Header" element={<Header/>}/>  
      <Route path="/Footer" element={<Footer/>}/> 
      <Route path="/Product" element={<Product/>}/> 
    </Routes>
    
  </BrowserRouter>
  )
}

export default Router