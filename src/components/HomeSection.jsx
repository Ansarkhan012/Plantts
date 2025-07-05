import React, { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://www.tlcinteriors.com.au/wp-content/uploads/2023/01/decorating-a-living-room-with-plants-everywhere.jpg')`,
      }}
    >
     
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>

    
      <div
        className="relative z-20 text-center text-white px-4 max-w-3xl"
        data-aos="zoom-in-up"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Bring Nature Into Your Living Space
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Transform your home into a lush paradise with our curated selection of premium houseplants.
        </p>

   
        <div
          className="flex items-center justify-center max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2">
            <FiSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
