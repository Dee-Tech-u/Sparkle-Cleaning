import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { MdAttachEmail, MdWhatsapp } from 'react-icons/md'
import { Link } from 'react-router'

const Contact = () => { 
  return (
    <>
    <div className='bg-slate-50 w-full flex items-center justify-center pt-25 pb-5 px-20'>
      <div className='flex flex-col items-center max-w-2xl gap-5'>
        <div className="flex flex-row items-center gap-4">
      <div>
        <h1 className='text-2xl custom-sm:text-6xl font-bold text-black flex'>Contact us</h1>
      </div>
          <div>
            <FaLongArrowAltDown className='text-2xl text-blue-700'/>
          </div>
        </div>
      </div>
    </div>
    <div className='pt-5 pb-10 text-center bg-slate-50'>
    <div className="flex flex-col gap-6 custom-md:gap-0 custom-md:flex-row custom-md:max-w-3xl m-auto">
      <div className='flex flex-row h-60 w-80 custom-md:w-60 custom-md:h-40 bg-slate-100 m-auto p-2 shadow-lg rounded-2xl cursor-progress hover:bg-slate-600 transition duration-300 ease-linear'>
        <div>
          <img src="happy-client.jpg" alt="happy client" className='h-12/12 rounded-l-xl border-r-2' />
        </div>
        <div className="flex flex-col">
          <div className=' bg-white ml-2 pt-2 shadow-lg rounded-xl h-8/12'>
          <div>
            <h1 className='text-xl'>Home Cleaning</h1>
          <p className='text-[#acadaf] leading-4 text-sm p-2'>Book for our Loundry service</p>
          </div>
        </div>
        <Link to="https://wa.me/qr/OU3NPTAFYF67L1" target='-blank'>
            <button className='bg-blue-600 h-8 w-20 rounded-3xl mt-8 custom-md:mt-4 cursor-pointer hover:scale-105 transition duration-300 ease-linear'>Book</button>
          </Link>
        </div>
      </div>
       <div className='flex flex-row h-60 w-80 custom-md:w-60 custom-md:h-40 bg-slate-100 m-auto p-2 shadow-lg rounded-2xl cursor-progress hover:bg-slate-600 transition duration-300 ease-linear'>
        <div>
          <img src="cleaning-material.jpeg" alt="cleaning materials" className='h-12/12 rounded-l-xl border-r-2' />
        </div>
        <div className="flex flex-col">
          <div className=' bg-white ml-2 pt-2 shadow-lg rounded-xl h-8/12'>
          <div>
            <h1 className='text-xl'>Office Cleaning</h1>
          <p className='text-[#acadaf] leading-4 text-sm p-2'>Book for our Loundry service</p>
          </div>
        </div>
        <Link to="https://wa.me/qr/OU3NPTAFYF67L1" target='-blank'>
            <button className='bg-blue-600 h-8 w-20 rounded-3xl mt-8 custom-md:mt-4 cursor-pointer hover:scale-105 transition duration-300 ease-linear'>Book</button>
          </Link>
        </div>
      </div>
       <div className='flex flex-row h-60 w-80 custom-md:w-60 custom-md:h-40 bg-slate-100 m-auto p-2 shadow-lg rounded-2xl cursor-progress hover:bg-slate-600 transition duration-300 ease-linear'>
        <div>
          <img src="cloths-laundry1.jpg" alt="laundry man" className='h-12/12 rounded-l-xl border-r-2' />
        </div>
        <div className="flex flex-col">
          <div className=' bg-white ml-2 p-2 shadow-lg rounded-xl h-8/12'>
          <div>
            <h1 className='text-xl'>Home Laundry</h1>
          <p className='text-[#acadaf] leading-4 text-sm p-2'>Book for our Loundry service</p>
          </div>
        </div>
        <Link to="https://wa.me/qr/OU3NPTAFYF67L1" target='-blank'>
            <button className='bg-blue-600 h-8 w-20 rounded-3xl mt-8 custom-md:mt-4 cursor-pointer hover:scale-105 transition duration-300 ease-linear'>Book</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default Contact