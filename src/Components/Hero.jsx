import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgImage from "../assets/hero3.jpg";
import logo from "../assets/logo1.png";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";

function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.3 });

  return (
    <section id="hero"
      ref={sectionRef}
      className="relative mb-15 lg:mb-35  w-full min-h-screen bg-white text-white flex items-center justify-center px-4 sm:px-8 lg:px-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat shadow-2xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col justify-center items-center h-full w-full max-w-7xl px-4 text-center lg:flex-row lg:justify-between">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-6 lg:ml-10 mt-20 sm:mt-24 lg:mt-0">
          
          {/* Logo Animation - Now Coming from Left */}
          <motion.div
            className="absolute top-5 left-5 sm:static sm:mb-6"
            initial={{ opacity: 0, x: -100 }} // Start from left
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Move to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            <motion.img
              src={logo}
              alt="Brand Logo"
              className="h-34 sm:h-20  md:h-24 lg:h-38 lg:mr-100 w-auto object-contain"
              animate={{
                y: [0, -8, 0], // Floating effect
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl md:text-6xl font-extrabold leading-tight mt-16 sm:mt-0"
          >
            <span className="block lg:mr-20">Unlock Your</span>
            <span className="block lg:ml-30 ">Platform Potential</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-4 mb-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-lg"
          >
            Transform the way you do Business with Salesforce CRM Platform
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap lg:pt-10 justify-center lg:justify-start gap-4 lg:gap-15"
          >
            {/* Get Started Button */}
            <motion.a
              href="#"
              className="group px-6 py-3 text-base sm:text-lg font-semibold rounded-full bg-white text-black shadow-lg flex items-center space-x-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <motion.div
                className="text-black text-2xl transition-transform duration-500 group-hover:rotate-360"
              >
                <MdOutlineSlowMotionVideo />
              </motion.div>
            </motion.a>

            {/* Learn More Button */}
            <motion.a
              href="#"
              className="group px-6 py-3 text-base sm:text-lg font-semibold border rounded-full border-white text-white shadow-lg flex items-center space-x-2 transition-all duration-300 hover:bg-blue-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
              <motion.div
                className="text-white text-2xl transition-transform duration-500 group-hover:rotate-360"
              >
                <SlArrowRightCircle />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
