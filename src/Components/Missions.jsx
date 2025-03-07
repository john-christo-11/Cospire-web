import React from 'react';
import { motion } from 'framer-motion';
import mission1 from "../assets/product4.jpg";
import mission2 from "../assets/product4.jpg";
import mission3 from "../assets/product4.jpg";

function Missions() {
  return (
    <section id="missions" className="pt-3 lg:mb-40 mb-7 pb-8  bg-white text-gray-800">
      <div className="container mx-auto text-center">
        
        
        <motion.h2 
          className="text-4xl md:text-6xl font-bold font-poppins  text-violet-600 mb-24"
          initial={{ opacity: 0, y: -50 }}  
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          "You have done a lot already." <br /> "Let our Team take care of the rest."
        </motion.h2>

       
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {[
            { src: mission1, label: "We Listen" },
            { src: mission2, label: "We Empathize" },
            { src: mission3, label: "We Care" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="relative w-[350px]  md:w-[380px] h-[250px] md:h-[280px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }} // Starts small from within
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} // Smooth scale-up
              viewport={{ once: false, amount: 0.3 }}
            >
              <img className="w-full h-full object-cover" src={item.src} alt={item.label} />
              {/* Text inside the image */}
              <motion.div 
                className="absolute bottom-10 left-0 w-full text-white text-3xl md:text-4xl font-heading font-medium text-center drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}  
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} 
                viewport={{ once: false, amount: 0.3 }}
              >
                {item.label}
              </motion.div>
            </motion.div>
          ))}
        </div>

       
        <motion.p 
          className="mb-6 mx-auto text-lg md:text-2xl font-heading font-medium text-gray-800 px-4 sm:px-6 max-w-lg md:max-w-5xl"
          initial={{ opacity: 0, y: 50 }}  
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our mission is to drive innovation, empower businesses, and create meaningful 
          digital experiences. We believe in leveraging technology to solve real-world problems, 
          fostering collaboration, and making a lasting impact.
        </motion.p>

        
        <motion.p 
          className="mt-7 mx-auto text-lg md:text-2xl font-medium text-gray-800 font-heading px-4 sm:px-6 max-w-lg md:max-w-5xl"
          initial={{ opacity: 0, y: 50 }}  
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          We are committed to pushing boundaries, embracing challenges, and continuously evolving 
          to meet the demands of the ever-changing digital landscape.
        </motion.p>
      </div>
    </section>
  );
}

export default Missions;
