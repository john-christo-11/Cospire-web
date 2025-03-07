import React from "react";
import { motion, useAnimation } from "framer-motion";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

const logos = [
  logo2,
  logo3,
  logo2,
  logo3,
  logo2,
  logo3,
  logo2,
  logo3,
  logo2,
  logo3
];

const Commitment = () => {
  const controls = useAnimation();

  // Function to start animation
  const startAnimation = () => {
    controls.start({
      x: [0, -1600],
      transition: { repeat: Infinity, duration: 22, ease: "linear" },
    });
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section id="commitment" className="min-h-screen flex flex-col items-center px-4 relative lg:pb-50 pt-20">
      {/* Two-color Background */}
      <div className="absolute top-0 left-0 w-full h-125 lg:h-170 bg-blue-950"></div>
      <div className="absolute bottom-0 left-0 w-full h-50 bg-white"></div>


      <motion.h1
        className="lg:text-6xl text-3xl font-bold font-poppins text-center text-white relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        The Core of Our Commitment
      </motion.h1>


      <motion.p
        className="text-xl pl-5 pr-5 lg:text-3xl pt-8 font-heading text-center max-w-2xl text-white relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        We are committed to delivering high-quality solutions that drive innovation and excellence.
        Our mission is to provide outstanding services tailored to our customers' needs, ensuring
        satisfaction and success in every project we undertake.
      </motion.p>

      {/* Grid Container with scroll-triggered fade-in */}
      <motion.div
        className="relative z-10 w-full lg:pt-20 flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="grid pl-4 pt-10 grid-cols-3 md:grid-cols-3 lg:gap-25 gap-1 w-full max-w-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {/* Grid Items */}
          <motion.div
            className="bg-white p-2 rounded-2xl text-center shadow-lg lg:w-105 lg:h-95 md:w-40 md:h-40 w-25 h-25 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img src="src/assets/commit1.jpg" alt="Logo 1" className="lg:w-60 pt-2 lg:h-60 w-15 h-15" />
            <p className="lg:text-2xl text-sm font-heading mb-4 text-gray-800 font-semibold">Quality Commitment</p>
          </motion.div>
          <motion.div
            className="bg-white p-2 rounded-2xl text-center shadow-lg lg:w-105 lg:h-95 md:w-40 md:h-40 w-25 h-25 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img src="src/assets/commit2.jpg" alt="Logo 2" className="lg:w-60 lg:h-60 w-15 h-15 " />
            <p className="lg:text-2xl text-sm font-heading text-gray-800 font-semibold">Innovation & Excellence</p>
          </motion.div>
          <motion.div
            className="bg-white p-2 rounded-2xl text-center shadow-lg lg:w-105 lg:h-95 md:w-40 md:h-40 w-25 h-25 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img src="src/assets/commit3.jpg" alt="Logo 3" className="lg:w-60 lg:h-60 w-15 h-15" />
            <p className="lg:text-2xl text-sm font-heading text-gray-800 font-semibold">Customer Satisfaction</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Heading with scroll-triggered animation */}
      <motion.h2
        className="lg:text-7xl text-4xl font-bold text-center font-poppins text-blue-950 relative z-10 lg:mt-20 pt-20 pb-5 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Trusted by 20M+ Users
      </motion.h2>

      {/* Modern Logo Slider with scroll-triggered animation */}
      <div className="overflow-hidden w-full bg-transparent relative flex items-center">
        {/* Stronger Blur Effect - Left Side */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/60 to-transparent z-20"></div>

        <motion.div
          className="flex lg:space-x-10 space-x-5 w-max"
          animate={controls}
          initial={{ x: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          onHoverStart={() => controls.stop()}
          onHoverEnd={startAnimation}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div key={index} className="lg:w-45 lg:h-45 w-30 h-30 flex items-center justify-center">
              <motion.img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="lg:w-36 lg:h-36 w-15 h-15 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg mb-12"

                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>


        <div className="absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-white via-white/60 to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default Commitment;
