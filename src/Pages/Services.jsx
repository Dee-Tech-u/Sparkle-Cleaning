import React from 'react'
import { FaStar, FaTruckMoving } from 'react-icons/fa';
import { MdHome, MdLocalLaundryService } from 'react-icons/md';
import { HiBuildingStorefront, HiCog} from 'react-icons/hi2';
import { Link } from 'react-router';

const Services = () => {
  return (
     <>
        <section id='servives' className='py-16 px-4 mt-10 bg-[#ffffff]'>
      <h2 className='text-3xl font-bold text-blue-900 text-center mb-4'>Our Services</h2>
       <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4  px-4 m-auto'>

      <div className="size-70 bg-[#f3f4f6]  py-6 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700">
        <div className='flex items-center justify-between gap-1 p-4 '> 
        <div className='flex flex-row'>
          <MdHome className='text-blue-700 text-3xl' />
          <h3 className='text-lg font-bold text-black flex '>Residential Cleaning </h3>
          </div>
          </div>
          <p className='text-sm p-2 text-[#acadaf]'>Eco-friendly cleaning for your home, ensuring a spotless and healthy living environment.</p>
          <div className='flex items-center bg-white w-14 gap-2 px-1 rounded-full text-blue-600 m-auto mt-20'>
          <FaStar className='text-black '/>
          <h1>4.8</h1>
          </div>
      </div>
      <div className="size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700">
        <h1 className='text-7xl custom-sm:text-5xl text-blue-600'>BOOK</h1>
        <p className='text-[#acadaf]'>Now</p>
        <Link to="/contact">
        <button className='bg-blue-500 w-24 h-9 custom-sm:w-25 rounded-4xl mt-6 transition duration-300 ease-in-out hover:animate-bounce cursor-pointer'>Book Now</button>
        </Link>
      </div>
    </div>
      </section> 

      <section id='servives' className='px-4 bg-[#ffffff]'>
       <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4  px-4 m-auto'>
      <div className="size-70 bg-[#f3f4f6]  py-6 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700">
        <div className='flex items-center justify-between gap-1 p-4 '> 
        <div className='flex flex-row'>
          <HiBuildingStorefront className='text-blue-700 text-3xl' />
          <h3 className='text-lg font-bold text-black flex '>Commercial Cleaning </h3>
          </div>
          </div>
          <p className='text-sm p-2 text-[#acadaf]'>Professional services for offices and businesses to maintain a productive environment.</p>
          <div className='flex items-center bg-white w-14 gap-2 px-1 rounded-full text-blue-600 m-auto mt-20'>
          <FaStar className='text-black '/>
          <h1>4.6</h1>
          </div>
      </div>
      <div className="size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700">
        <h1 className='text-7xl custom-sm:text-5xl text-blue-600'>BOOK</h1>
        <p className='text-[#acadaf]'>Now</p>
        <Link to="/contact">
        <button className='bg-blue-500 w-24 h-9 custom-sm:w-25 rounded-4xl mt-6 transition duration-300 ease-in-out hover:animate-bounce cursor-pointer'>Book Now</button>
        </Link>
      </div>
    </div>
      </section> 

       <section id='servives' className='py-16 px-4 bg-[#ffffff]'>
       <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4  px-4 m-auto'>
      <div className="size-70 bg-[#f3f4f6]  py-6 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700 cursor-progress">
        <div className='flex items-center justify-between gap-1 p-4 '> 
        <div className='flex flex-row'>
          <HiCog className='text-blue-700 text-3xl' />
          <h3 className='text-lg font-bold text-black flex '>Deep Cleaning</h3>
          </div>
          </div>
          <p className='text-sm p-2 text-[#acadaf]'>Thorough deep cleaning to tackle tough grime and refresh every corner.</p>
          <div className='flex items-center bg-white w-14 gap-2 px-1 rounded-full text-blue-600 m-auto mt-20'>
          <FaStar className='text-black '/>
          <h1>4.7</h1>
          </div>
      </div>
      <div className="size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700 cursor-progress">
        <h1 className='text-7xl custom-sm:text-5xl text-blue-600'>BOOK</h1>
        <p className='text-[#acadaf]'>Now</p>
        <Link to="/contact">
        <button className='bg-blue-500 w-24 h-9 custom-sm:w-25 rounded-4xl mt-6 transition duration-300 ease-in-out hover:animate-bounce cursor-pointer'>Book Now</button>
        </Link>
      </div>
    </div>
      </section> 

      <section id='servives' className='py-16 px-4 bg-[#ffffff]'>
       <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4  px-4 m-auto'>
      <div className="group size-70 bg-[#f3f4f6]  py-6 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700 hover:scale-90 transition duration-300 ease-linear cursor-progress">
        <div className='flex items-center justify-between gap-1 p-4 group-hover:scale-105 transition duration-300 ease-linear'> 
        <div className='flex flex-row gap-1'>
          <FaTruckMoving className='text-blue-700 text-3xl' />
          <h3 className='text-lg font-bold text-black flex '>Move-In/Out Packing</h3>
          </div>
          </div>
          <p className='text-sm p-4 text-[#acadaf] group-hover:scale-95 transition duration-300 ease-linear'>Expert cleaning for your seemless transitions during moves.</p>
          <div className='flex items-center bg-white w-14 gap-2 px-1 rounded-full text-blue-600 m-auto mt-20'>
          <FaStar className='text-black '/>
          <h1>4.5</h1>
          </div>
      </div>
      <div className="group size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700 hover:scale-105 transition duration-300 ease-linear cursor-progress">
        <h1 className='text-7xl custom-sm:text-5xl text-blue-600 group-hover:scale-90 transition duration-300 ease-linear'>BOOK</h1>
        <p className='text-[#acadaf]'>Now</p>
        <Link to="/contact">
        <button className='bg-blue-500 w-24 h-9 custom-sm:w-25 rounded-4xl mt-6 transition duration-300 ease-linear hover:animate-bounce cursor-pointer'>Book Now</button>
        </Link>
      </div>
    </div>
      </section>

      <section id='servives' className='py-16 px-4 bg-[#ffffff]'>
       <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4  px-4 m-auto'>
      <div className="group size-70 bg-[#f3f4f6]  py-6 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700 hover:bg-purple-900 hover:border-black transition duration-300 ease-in-out cursor-alias">
        <div className='flex items-center justify-between gap-1 p-4 '> 
        <div className='flex flex-row'>
          <MdLocalLaundryService className='text-blue-700 text-3xl group-hover:text-4xl' />
          <h3 className='text-lg font-bold text-black flex group-hover:text-2xl'>Home Laundry</h3>
          </div>
          </div>
          <p className='text-sm p-2 text-[#acadaf] group-hover:scale-90 transition duration-300 ease-linear'>With eco-friendly soaps that keeps the quality and longivity of your cloths intact, and you don't need to leave the comfort of your home.</p>
          <div className='flex items-center bg-white w-14 gap-2 px-1 rounded-full text-blue-600 m-auto mt-15  '>
          <FaStar className='text-black group-hover:animate-bounce '/>
          <h1  className='group-hover:animate-bounce'>4.8</h1>
          </div>
      </div>
      <div className="group size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-blue-700 hover:bg-purple-950 transition duration-500 ease-in-out cursor-alias">
        <h1 className='text-7xl custom-sm:text-5xl text-blue-600'>BOOK</h1>
        <p className='text-[#acadaf]'>Now</p>
        <Link to="/contact">
        <button className='bg-blue-500 w-24 h-9 custom-sm:w-25 rounded-4xl mt-6 transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer'>Book Now</button>
        </Link>
      </div>
    </div>
      </section> 
        </>
  )
}

export default Services