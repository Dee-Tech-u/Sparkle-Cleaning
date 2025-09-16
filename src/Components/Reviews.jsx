import React from 'react'
import { FaLongArrowAltRight, FaStar } from 'react-icons/fa'
import { Link } from 'react-router'

const Reviews = () => {
  return (
    <>
    <div className="py-16 px-4 m-auto">
      <h2 className='text-3xl font-bold text-blue-900 text-center'>Loved By Over Thousand Clients
      </h2>
      <p className='text-center text-md mb-10'>Discover the reviews from sastified clients over time of using our services</p>
      <div className="flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 px-4 m-auto">
        <div className="group size-80 custom-sm:size-90 bg-[#f3f4f6] rounded-2xl m-auto border-dotted border-blue-700 border-2 hover:bg-blue-500 hover:border-white transition duration-300 ease-in-out cursor-pointer">
          <div className='flex flex-col items-center py-4'>
            <img src="Profile image1.jpg" alt="profile image" className='size-15 m-auto rounded-full' />
          <h3 className='group-hover:text-white'>Lucky Efetobore</h3>
          <div className='bg-white m-2 p-4 rounded-2xl'>
            <div className='flex flex-row text-blue-700'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='leading-5 py-2'>"Outstanding experience with Sparkle Cleaning! They deep-cleaned my kitchen and bathrooms in just a few hours, paying attention to details like the toaster oven that others miss. Professional, friendly, and exceeded all expectations."
            </p>
          </div>
          </div>
        </div>
        <div className="size-70 custom-sm:size-60 bg-[#f3f4f6] text-center py-15 custom-sm:py-4 m-auto shadow-2xl rounded-2xl border-b-2  border-blue-700 hover:scale-110 transition duration-300 ease-in-out cursor-progress">
            <h1 className='text-5xl text-blue-600 custom-sm:pt-6'>Reviews</h1>
            
            <Link to="/reviews">
          <button className='h-8 w-20 custom-sm:h-8 custom-sm:w-20 text-white mt-8 bg-blue-600 rounded-3xl hover:scale-105 cursor-progress'>
            <FaLongArrowAltRight className='text-2xl ml-7'/>
          </button>
          </Link>
          </div>
      </div>
    </div>
    </>
  )
}

export default Reviews