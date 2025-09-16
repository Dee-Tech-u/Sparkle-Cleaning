import React from 'react'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
  return (
    <>
    <div className="py-16 px-4 m-auto">
          <h2 className='text-3xl font-bold text-blue-900 text-center'>Loved By Over Thousand Clients
          </h2>
          <p className='text-center text-md mb-10'>Discover the reviews from sastified clients over time of using our services</p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-5xl m-auto">
            <div className="group size-80 bg-[#f3f4f6] rounded-2xl m-auto border-dotted border-blue-700 border-2 hover:scale-105 hover:bg-blue-500 hover:border-white transition duration-300 ease-in-out cursor-pointer">
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
            <div className="group size-80 bg-[#f3f4f6] rounded-2xl m-auto border-dotted border-blue-700 border-2 hover:scale-105 hover:bg-blue-500 hover:border-white transition duration-300 ease-in-out cursor-pointer">
              <div className='flex flex-col items-center py-4'>
                <img src="Profile image2.jpg" alt="profile image" className='size-15 m-auto rounded-full' />
              <h3 className='group-hover:text-white'>Sandra Chidinma</h3>
              <div className='bg-white m-2 p-4 rounded-2xl'>
                <div className='flex flex-row text-blue-700'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className='leading-5 py-2'>"From a filthy move-in to a sparkling home, Sparkle Professional Cleaning Company saved the day. The team arrived early, handled everything with care, and at an unbeatable price—I'll definitely use them again and recommend to friends!"
                </p>
              </div>
              </div>
            </div>
            <div className="group size-80 bg-[#f3f4f6] rounded-2xl m-auto border-dotted border-blue-700 border-2 hover:scale-105 hover:bg-blue-500 hover:border-white transition duration-300 ease-in-out cursor-pointer">
              <div className=' flex flex-col items-center py-4'>
                <img src="Profile image3.jpg" alt="profile image" className='size-15 m-auto rounded-full' />
              <h3 className='group-hover:text-white'>Becky Idehen</h3>
              <div className='bg-white m-2 p-4 rounded-2xl'>
                <div className='flex flex-row text-blue-700'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                 <p className='leading-5 py-2'>"Sparkle Cleaning has been a game-changer for my home— they've been handling our routine cleanings for over 11 years, and every time, they leave everything spotless and trustworthy. Highly recommend for anyone seeking reliable service!"
              </p>
              </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Reviews