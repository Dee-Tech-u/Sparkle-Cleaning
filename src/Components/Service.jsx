import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { MdHome, MdLocalLaundryService } from 'react-icons/md';
import { HiBuildingStorefront, HiCog} from 'react-icons/hi2';
import { Link } from 'react-router';

const Service = () => {
  return (
    <>
    <section id='servives' className='py-16 px-4 bg-[#ffffff]'>
      <h2 className='text-3xl font-bold text-blue-900 text-center mb-4'>Our Services</h2>
       <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4  px-4 m-auto'>
      <div className="size-70 bg-[#f3f4f6]  py-6 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700">
        <div className='flex justify-center items-center gap-1 w-45 h-10 rounded-2xl m-auto bg-gradient-to-b from-blue-900 to-purple-900 text-white mb-2 border-l-2 border-yellow-500 border-dotted'>
          <MdHome/>
          <h1 className=''>Residential Cleaning</h1>
        </div>
        <div className='flex justify-center items-center gap-1 w-45 h-10 rounded-2xl m-auto bg-gradient-to-b from-blue-900 to-purple-900 text-white mb-2 border-r-2 border-yellow-500 border-dotted'>
          <HiBuildingStorefront/>
          <h1 className=''>Commercial Cleaning</h1>
        </div>
        <div className='flex justify-center items-center gap-1 w-45 h-10 rounded-2xl m-auto bg-gradient-to-b from-blue-900 to-purple-900 text-white mb-2 border-l-2 border-yellow-500 border-dotted'>
          <HiCog/>
          <h1 className=''>Deep Cleaning</h1>
        </div>
        <div className='flex justify-center items-center gap-1 w-45 h-10 rounded-2xl m-auto bg-gradient-to-b from-blue-900 to-purple-900 text-white mb-2 border-r-2 border-yellow-500 border-dotted'>
          <FaTruckMoving/>
          <h1 className=''>Move-In/Out Packing</h1>
        </div>
        <div className='flex justify-center items-center gap-1 w-45 h-10 rounded-2xl m-auto bg-gradient-to-b from-blue-900 to-purple-900 text-white mb-2 border-l-2 border-yellow-500 border-dotted'>
          <MdLocalLaundryService/>
          <h1 className=''>Home Laundry</h1>
        </div>
      </div>
      <div className="size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700">
        <h1 className='text-7xl custom-sm:text-5xl text-blue-600'>BOOK</h1>
        <p className='text-[#acadaf]'>Now</p>
        <Link to="/services">
        <button className='bg-blue-500 w-full custom-sm:w-25 rounded-4xl mt-6 transition duration-300 ease-in-out hover:animate-bounce cursor-pointer'>Book Now</button>
        </Link>
      </div>
    </div>
      </section> 
    </>
   
    
  )
}

export default Service