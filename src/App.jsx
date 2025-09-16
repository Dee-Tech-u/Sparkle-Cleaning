import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Reviews from './Pages/Reviews';
import Services from './Pages/Services';



function App () {
  useEffect(() =>{
    AOS.init({
      duration: 3000,
    })
  },);
  return (
    <>
    <div className='min-h-screen flex flex-col bg-[#ffffff]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    
    </div>
    

    </>
  )
}


export default App