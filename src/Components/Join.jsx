import React from 'react'
import { Link } from 'react-router'

const join = () => {
  return (
    <>
    <section>
      <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 py-16 px-4 m-auto'>
        <div className='w-80 sm:w-120 m-auto hover:scale-105 transition duration-300 ease-in-out cursor-progress border-r-2'>
          <img src="sparkle-team.jpg" alt="team member" className='rounded-3xl shadow-2xl'/>
      </div>
      <div className="size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-15 custom-sm:py-4 m-auto shadow-2xl rounded-2xl border-b-2  border-blue-700 hover:scale-110 transition duration-300 ease-in-out cursor-progress">
        <h1 className='text-7xl text-blue-600'>JOIN</h1>
        <h1 className='text-[#acadaf]'>Sparkle Cleaning Team</h1>
        <Link to="/register">
      <button className='h-8 w-20 custom-sm:h-8 custom-sm:w-15 text-white mt-8 bg-blue-600 rounded-3xl hover:scale-105 cursor-progress'>Join</button>
      </Link>
      </div>
      <div className='w-80 m-auto hover:scale-105 transition duration-300 ease-in-out cursor-progress border-l-2'>
          <img src="washers.jpeg" alt="washers" className='rounded-3xl shadow-xl'/>
      </div>
    </div>
    </section>
    
    </>
  )
}

export default join