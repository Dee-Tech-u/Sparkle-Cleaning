import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
  <>
  <nav className='group bg-blue-900 shadow-lg flex items-center justify-between sm:px-15 lg:px-50 py-3 px-2 fixed top-0 left-0 w-full  z-10 '>
    <Link to="/">
    <span className=' text-blue-700 text-2xl sm:text-lg lg:text-3xl flex items-center '>Sparkle<span className=''>Cleaning</span></span>
    </Link>
    <div className='text-black flex gap-2 items-center '>
      <Link to="/" className='py-1 text-sm sm:text-lg font-light text-white rounded-lg hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Home
      </Link>
      <Link to="/about" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      About
      </Link>
      <Link to="/services" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Service
      </Link>
      <Link to="/reviews" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Reviews
      </Link>
      <Link to="/contact" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Contact
      </Link>
      <Link to="/register" className='py-1  text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out'>
      Register
      </Link>
    </div>
   </nav>
  </>
   
  )
}
export default Navbar