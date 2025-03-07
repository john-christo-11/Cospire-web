import React, { useState, useEffect } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import resourceImage1 from "../assets/product8.jpg";
import resourceImage2 from "../assets/product9.jpg";
import { motion } from "framer-motion";

const Resources = () => {
  const [animations, setAnimations] = useState({
    heading: { opacity: 0, y: -50 },
    card1: { opacity: 0, x: -100 },
    card2: { opacity: 0, x: 100 },
  });

  const [hasScrolled, setHasScrolled] = useState(false);

  // Function to handle scroll and update animation state
  const handleScroll = () => {
    const heading = document.getElementById("heading");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");

    // Trigger animations when elements come into view
    if (isElementInViewport(heading)) {
      setAnimations((prev) => ({
        ...prev,
        heading: { opacity: 1, y: 0 },
      }));
    } else {
      setAnimations((prev) => ({
        ...prev,
        heading: { opacity: 0, y: -50 },
      }));
    }

    if (isElementInViewport(card1)) {
      setAnimations((prev) => ({
        ...prev,
        card1: { opacity: 1, x: 0 },
      }));
    } else {
      setAnimations((prev) => ({
        ...prev,
        card1: { opacity: 0, x: -100 },
      }));
    }

    if (isElementInViewport(card2)) {
      setAnimations((prev) => ({
        ...prev,
        card2: { opacity: 1, x: 0 },
      }));
    } else {
      setAnimations((prev) => ({
        ...prev,
        card2: { opacity: 0, x: 100 },
      }));
    }

    setHasScrolled(true);
  };

  // Helper function to check if an element is in the viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Initial animation variants
  const headingVariants = {
    initial: { opacity: 0, y: -50 },
    animate: animations.heading,
  };

  const cardVariants = {
    initial: { opacity: 0, x: -100 },
    animate: animations.card1,
  };

  const cardVariants2 = {
    initial: { opacity: 0, x: 100 },
    animate: animations.card2,
  };

  return (
    <div id="resources" className="mb-40">
      {/* Heading Animation */}
      <motion.h2
        id="heading"
        className="lg:text-7xl text-5xl font-poppins font-bold text-blue-900 text-center pb-20"
        initial="initial"
        animate="animate"
        variants={headingVariants}
        transition={{ duration: 1 }}
      >
        Resources
      </motion.h2>

      {/* Grid Container */}
      <div className="lg:flex gap-12 justify-center items-center">
        {/* Resource Card 1 */}
        <motion.div
          id="card1"
          className="bg-white rounded-3xl shadow-2xl lg:w-[600px] w-[405px] h-[500px] lg:h-[520px] relative overflow-hidden"
          initial="initial"
          animate="animate"
          variants={cardVariants}
          transition={{ duration: 1 }}
        >
          <img
            src={resourceImage1}
            alt="Resource 1"
            className="w-full h-80 object-cover rounded-t-3xl"
          />
          <div className="p-10">
            <h3 className="text-3xl text-blue-950 font-bold">Resource Title 1</h3>
            <p className="text-gray-600 text-xl mt-5">
              This is a brief description of the resource content.
            </p>
          </div>
          <FaChevronCircleRight
            className="absolute bottom-10 right-10 text-rose-700 w-10 h-10 
            transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
          />
        </motion.div>

        {/* Resource Card 2 */}
        <motion.div
          id="card2"
          className="bg-white rounded-3xl shadow-2xl lg:w-[600px] w-[405px] h-[500px] lg:h-[520px] relative overflow-hidden"
          initial="initial"
          animate="animate"
          variants={cardVariants2}
          transition={{ duration: 1 }}
        >
          <img
            src={resourceImage2}
            alt="Resource 2"
            className="w-full h-80 object-cover rounded-t-3xl"
          />
          <div className="p-10">
            <h3 className="text-3xl text-blue-950 font-bold">Resource Title 2</h3>
            <p className="text-gray-600 text-xl mt-5">
              This is a brief description of the resource content.
            </p>
          </div>
          <FaChevronCircleRight
            className="absolute bottom-10 right-10 text-rose-700 w-10 h-10 
            transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
