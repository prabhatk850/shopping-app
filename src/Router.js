import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Product from './Component/Products';
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signin/Signup';
import Password from './Component/Signin/Password';
import ProductDes from './Component/ProductDes';
import Sections from './Component/Sections'
import Profile from './Component/Profile'
import Setting from "./Component/Home/Setting"
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
      <Route path="/password" element={<Password/>}/> 
      <Route path="/productdescription" element={<ProductDes/>}/> 
      <Route path="/sections/*" element={<Sections/>}/> 
      <Route path="/Profile" element={<Profile/>}/> 
      <Route path="/Setting" element={<Setting/>}/> 
    </Routes>
    
  </BrowserRouter>
  )
}

export default Router