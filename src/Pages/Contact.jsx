import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { MdAttachEmail, MdWhatsapp } from 'react-icons/md'

const Contact = () => {
  return (
    <>
    <div className='min-h-screen bg-slate-50 w-full flex items-center justify-center px-20'>
      <div className='flex flex-col items-center max-w-2xl gap-5'>
        <div className="flex flex-row items-center gap-4">
      <div>
        <h1 className='text-2xl custom-sm:text-6xl font-bold text-black flex'>Contact us</h1>
      </div>
          <div>
            <FaLongArrowAltDown className='text-2xl text-blue-700'/>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-7'>
          <a href="https://wa.me/qr/OU3NPTAFYF67L1 "><MdWhatsapp className='text-green-700 text-6xl'/></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><MdAttachEmail className='text-6xl text-red-400'/></a>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Contact