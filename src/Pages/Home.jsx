import React from 'react';
import Hero from '../Components/Hero'
import SwipperCarousel from '../Components/SwipperCarousel';
import Service from '../Components/Service';
import Ratings from '../Components/ratings';
import Reviews from '../Components/Reviews';
import Contact from '../Components/Contact';
import Join from '../Components/join';
import Footer from '../Components/Footer';


const Home = () => {
  return (
   <>
   <div className='min-h-screen mt-20'>
    <SwipperCarousel />
    <Hero />
    <Join />
    <Service />
    <Ratings />
    <Reviews />
    <Contact />
    <Footer />
   </div>
   </>
  )
}

export default Home