import React from 'react'
import { Link } from 'react-router'
const Contact = () => {
  return (
    <>
    <section>
          <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 py-16 px-4 m-auto'>
            <div className='w-80 sm:w-80 m-auto hover:scale-105 transition duration-300 ease-in-out cursor-progress border-r-2'>
              <img src="customer-agent.jpg" alt="customer service" className='rounded-3xl shadow-2xl'/>
          </div>
          <div className="size-70 custom-sm:size-60 bg-[#f3f4f6] text-center py-15 custom-sm:py-4 m-auto shadow-2xl rounded-2xl border-b-2  border-blue-700 hover:scale-110 transition duration-300 ease-in-out cursor-progress">
            <h1 className='text-5xl text-blue-600 custom-sm:pt-6'>CONTACT</h1>
            <h1 className='text-[#acadaf] font-bold text-3xl'>US</h1>
            <Link to="/contact">
          <button className='h-8 w-20 custom-sm:h-8 custom-sm:w-20 text-white mt-8 bg-blue-600 rounded-3xl hover:scale-105 cursor-progress'>Contact</button>
          </Link>
          </div>
        </div>
        </section>
    </>
  )
}

export default Contact