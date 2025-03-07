import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';

const industries = [
  {
    image: product1,
    title: '1. Retail & E-Commerce',
    description:
      'The retail and e-commerce industry is rapidly evolving with digital transformations, enhancing customer experience and expanding market reach.',
  },
  {
    image: product3,
    title: '2. Technology & Software',
    description:
      'Technology and software development play a vital role in shaping business landscapes with innovations that drive efficiency and growth.',
  },
  {
    image: product4,
    title: '3. Healthcare & Life Sciences',
    description:
      'The healthcare industry focuses on improving patient care through advanced medical technologies and innovative solutions in life sciences.',
  },
  {
    image: product5,
    title: '4. Finance & Fintech',
    description:
      'Finance and fintech industries are revolutionizing how people manage their finances, from digital banking to advanced investment platforms.',
  },
  {
    image: product6,
    title: '5. Manufacturing & Logistics',
    description:
      'The manufacturing and logistics sectors are key in driving supply chain efficiencies with automation, robotics, and data-driven solutions.',
  },
];

const IndustriesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % industries.length);
      }, 3000); // Automatically change slide every 3 seconds

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [isHovered]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="industries" className="text-center pt-5 w-full lg:w-auto h-full bg-rose-50">
      <motion.h1
        className="text-4xl font-poppins md:text-6xl font-bold text-blue-800 pb-8 mb-1"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Industries We Specialise In
      </motion.h1>

      <div className="relative w-4/5 mx-auto">
        <div className="flex justify-center items-center flex-col">
          {/* Animated Image */}
          <motion.img
            src={industries[currentSlide].image}
            alt={industries[currentSlide].title}
            className="lg:w-[700px] hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 lg:h-[400px] object-cover rounded-xl mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Animated Title */}
          <motion.h2
            className="lg:text-4xl text-3xl text-blue-900 font-poppins font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {industries[currentSlide].title}
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            className="text-xl lg:text-3xl font-heading md:pl-40 md:pr-40 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {industries[currentSlide].description}
          </motion.p>
        </div>

        {/* Hyphen Navigation */}
        <div className="flex justify-center pb-10 lg:gap-8 gap-4 mt-6">
          {industries.map((_, index) => (
            <motion.div
              key={index}
              className="cursor-pointer transition-all duration-300"
              onClick={() => handleSlideChange(index)}
              onMouseEnter={() => {
                setIsHovered(true);
                handleSlideChange(index); // Select slide on hover
              }}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                width: '120px',
                height: '20px',
                backgroundColor: currentSlide === index ? '#000000' : '#ded5d3',
                borderRadius: '10px',
                transition: 'background-color 0.3s ease-in-out',
                zIndex: currentSlide === index ? 10 : 1,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
