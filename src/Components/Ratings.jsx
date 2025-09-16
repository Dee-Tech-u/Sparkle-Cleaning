import React from 'react'

const Ratings = () => {
  return (
    <>
    <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 py-16 px-4 m-auto'>
      <div className="size-70 bg-[#f3f4f6] text-center py-20 m-auto shadow-2xl rounded-2xl border-t-2 border-dotted border-blue-700">
        <h1 className='text-8xl text-blue-600'>8K</h1>
        <p className='text-[#acadaf]'>Happy Clients</p>
      </div>
      <div className="size-70 custom-sm:size-50 bg-[#f3f4f6] text-center py-20 custom-sm:py-13 m-auto shadow-2xl rounded-2xl border-b-2 border-dotted border-blue-700">
        <h1 className='text-7xl text-blue-600'>4.8</h1>
        <p className='text-[#acadaf]'>Overall Ratings</p>
      </div>
    </div>
    </>
  )
}

export default Ratings