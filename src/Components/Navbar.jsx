import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
  <>
  <nav className='group bg-blue-900 shadow-lg flex items-center justify-between sm:px-15 lg:px-50 py-3 px-2 fixed top-0 left-0 w-full  z-10 '>
    <div className='max-w-7xl mx-auto px-4 custom-sm:px-6 custom-md:px-8'>
      <div className='flex items-center justify-between h-16 w-full'>
        <div className='flex-shrink-0'>
           <Link to="/" className=' text-blue-700 text-2xl sm:text-2xl lg:text-3xl'>
           SparkleCleaning
    </Link>
        </div>
    <div className='hidden custom-md:block'>
      <div className='ml-10 flex items-baseline space-x-4'>
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
    </div>
    <div className='custom-md:hidden'>
      <button onClick={toggleMenu} className=' p-2 rounded-md text-gray-400 hover:text-white hover:scale-110 transition duration-300 ease-linear cursor-pointer focus:outline-none'>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
    </div>
    </div>
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full' } transition-transform duration-300 ease-in-out custom-md:hidden`}>
      <div className='px-2 pt-2 pb-3 sp-y-1 custom-sm:px-3 mt-16'>
        <Link to="/" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' onClick={toggleMenu}>
      Home
      </Link>
      <Link to="/about" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' onClick={toggleMenu}>
      About
      </Link>
      <Link to="/services" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' onClick={toggleMenu}>
      Service
      </Link>
      <Link to="/reviews" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' onClick={toggleMenu}>
      Reviews
      </Link>
      <Link to="/contact" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' onClick={toggleMenu}>
      Contact
      </Link>
      <Link to="/register" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' onClick={toggleMenu}>
      Register
      </Link>
      </div>
    </div>
   
   </nav>
  </>
   
  )
}
export default Navbar