import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css'; 
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const SwipperCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="h-50 w-8/12 mb-10 mt-3 text-white shadow-2xs cursor-pointer hover:scale-105 transition duration-300 ease-in-out fixed"
    >
      <SwiperSlide className="fixed">
        <img className='w-12/12 h-80 rounded-2xl' src="our-service.jpg" alt="" />
        <h1 className="text-2xl md:text-3xl text-center py-20 ">Our services includes</h1>
      </SwiperSlide>
      <SwiperSlide className="fixed ">
        <img className='w-12/12 h-60 rounded-2xl' src="home.jpg" alt="" />
        <h1 className="text-2xl md:text-3xl text-center py-20 ">Home cleaning</h1>
      </SwiperSlide>
      <SwiperSlide className="fixed">
        <img className='w-12/12 h-60 rounded-2xl' src="cloths-laundry2.jpg" alt="" />
        <h1 className="text-2xl md:text-3xl text-center py-20 ">Home Laundry services</h1>
      </SwiperSlide>
      <SwiperSlide className="fixed">
        <img className='w-12/12 h-50 rounded-2xl' src="office-space.jpeg" alt="" />
        <h1 className="text-2xl md:text-3xl text-center py-20 ">Office cleaning</h1>
      </SwiperSlide>
      <SwiperSlide className="fixed">
        <img className='w-12/12 h-50 rounded-2xl' src="industrial.jpg" alt="" />
        <h1 className="text-2xl md:text-3xl text-center py-20 ">Industrial cleaning</h1>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwipperCarousel

