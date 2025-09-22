import React from 'react';

const Hero = () => {
  return (
    <>
    <section>
      <div className='grid lg:grid-cols-2 lg:max-w-4xl lg:m-auto'>
        <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 py-16 px-4 m-auto '>
      <div className='w-80 sm:w-70 lg:w-40 m-auto hover:scale-105 transition duration-300 ease-in-out cursor-progress border-r-2'>
        <img src="home-cleaning.jpg" alt="Home cleaner" />
      </div>
      <div className="size-70 custom-sm:w-50 custom-sm:h-60 bg-[#f3f4f6] text-center py-20 px-6 custom-sm:py-8 m-auto shadow-2xl rounded-2xl border-b-2 border-dotted border-blue-700">
        <p className='text-sm text-[#575353]'>Our Sparkle Cleaning team can turn your moldy walls, dusty furnitures, scattered office into a crispy white appealing, sparkling, and well arranged office again, just with a touch off magic.</p>
      </div>
      </div>
      <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 py-16 px-4 m-auto'>
      <div className='w-80 sm:w-70 lg:w-40 m-auto hover:scale-105 transition duration-300 ease-in-out cursor-progress border-r-2'>
        <img src="laundry.jpg" alt="Home cleaner" />
      </div>
      <div className="size-70 custom-sm:w-50 custom-sm:h-60 bg-[#f3f4f6] text-center py-20 px-6 custom-sm:py-5 m-auto shadow-2xl rounded-2xl border-b-2 border-dotted border-blue-700">
        <p className='text-sm text-[#575353]'>Our Sparkle Cleaning team can give you that perfect laundry touch, and turn those dirty cloths into admirable, sparkling cloths again, with eco friendly soaps, that keeps the quality of the cloths, just in one call away.</p>
      </div>
      </div>
      <div className='flex flex-col custom-sm:flex-row custom-sm:max-w-lg custom-md:flex-row gap-4 py-16 px-4 m-auto bg-white'>
      <div className='w-80 sm:w-70 lg:w-40 m-auto hover:scale-105 transition duration-300 ease-in-out cursor-progress border-r-2'>
        <img src="form-wash.jpg" alt="Home cleaner" />
      </div>
      <div className="size-70 custom-sm:w-50 custom-sm:h-60 lg:w-50 lg:h-60 bg-[#f3f4f6] text-center py-20 px-6 custom-sm:py-8 m-auto shadow-2xl rounded-2xl border-b-2 border-dotted border-blue-700">
        <p className='text-sm text-[#575353]'>Our Sparkle Cleaning team can turn your moldy walls, dusty furnitures, scattered home into a crispy white appealing, sparkling, and well arranged home again, just with a touch off magic.</p>
      </div>
      </div>
      </div>
    </section>
    </>
    
  )
}

export default Hero








