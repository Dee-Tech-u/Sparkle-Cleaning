import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <footer className='py-8 px-4 bg-gray-800 text-white w-full'>
      <h1 className='text-2xl text-blue-800'>SparkleCleaning</h1>
      <div className=' w-full py-8'>
        <div>
          <div className='flex items-center justify-center'>
            <h1>Sparklecleaning@gmail.com</h1>
              <a href="/">
            <FaWhatsapp  className='ml-3'/>
            </a>
            <h1>08111743067</h1>
          </div>
          <p className='text-center text-sm mt-4 italic'>Copyright &copy;2025 Sparkle Cleaning Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer