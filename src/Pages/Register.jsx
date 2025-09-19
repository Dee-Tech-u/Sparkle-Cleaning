import React from 'react'

const Register = () => {
  return (
    <div className='min-h-screen bg-slate-50 w-full flex items-center justify-center'>
      <div className='flex flex-col items-start max-w-2xl gap-5'>
        <>
    <section className='py-16 px-4 bg-white'>
      <h2 className='text-3xl font-bold text-blue-900 text-center my-8'>Become Part Of Our Cleaner's Team </h2>
      <form action="https://formspree.io/f/mldlleed" method='post' className=''>
      <div className='text-center w-100 m-auto py-4 bg-[#f3f4f6] rounded-3xl hover:scale-105 transition duration-300 ease-in-out'>
        <label htmlFor="email" className='block'>Email:</label>
      <input type="email" id='email' name='email' required placeholder='e-g dee@gmail.com' className='text-center border-b-2 outline-0 mb-6'/>
       <label htmlFor="text" className='block'>Full Name:</label>
      <input type="fullName" id='text' name='fullName' required placeholder='e.g Dee Prince' className='text-center border-b-2 outline-0 mb-6'/>
       <label htmlFor="number" className='block'>Number:</label>
      <input type="number" id='number' name='number' required placeholder='08080*****' className='text-center border-b-2 outline-0 mb-6'/>
      <label htmlFor="text" className='block'>Address:</label>
      <input type="text" id='address' name='address' required placeholder='e.g RingRoad' className='text-center border-b-2 outline-0 mb-6'/>
      <label htmlFor="text" className='block'>City:</label>
      <input type="text" id='city' name='city' autoComplete='address-level2' required placeholder='e.g Benin city' className='text-center border-b-2 outline-0 mb-6'/>
      <div className="flex justify-center items-center gap-2 my-2">
         <label htmlFor="gender" className='block'>Male</label>
      <input type="radio" id='radio' name='radio' required value="Male" className='text-center'/>
      <label htmlFor="gender" className='block'>Female</label>
      <input type="radio" id='radio' name='radio' required value="Female" className='text-center'/>
      </div>
      <div className="flex flex-col text-sm justify-center items-center gap-2 my-3">
        <div className='text-lg font-bold mt-4'>Select your field of work</div>
        <label htmlFor="select" className='block'>Home Cleaning</label>
      <input type="checkbox" id='myCheckbox' name='myCheckbox' value='Home Cleaning' />
      <label htmlFor="select" className='block'>Office Cleaning</label>
      <input type="checkbox" id='myCheckbox' name='myCheckbox' value='Office Cleaning' />
      <label htmlFor="select" className='block'>Home Laundry</label>
      <input type="checkbox" id='myCheckbox' name='myCheckbox' value='Home Laundry'/>
      </div>
      <label htmlFor="message" className='block text-start pl-23 mt-6'>Details about yourself:</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder='How qualified and deligent are you?' required className='border-2 outline-0 text-sm rounded-2xl p-2'></textarea>
      <button type="submit" className='block bg-blue-800 text-white h-10 w-30 m-auto my-6 rounded-3xl animate-pulse cursor-pointer'>Submit</button>
      </div>
      </form>
    </section>
    </>
      </div>
    </div>
  )
}

export default Register