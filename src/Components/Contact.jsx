import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  // Using Intersection Observer to detect when elements are in view
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen px-8 pt-3 pb-10 bg-white">
      {/* Header Animation */}
      <motion.h1
        ref={headingRef}
        className="lg:text-6xl text-3xl font-bold font-poppins text-blue-500 text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        Let's Talk
      </motion.h1>

      {/* Description Animation */}
      <motion.p
        className="text-center text-black font-heading max-w-2xl mb-12 text-2xl lg:text-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        We'd love to hear from you! Fill out the form below and our team will get
        back to you as soon as possible.
      </motion.p>

      <motion.div
        ref={formRef}
        className="w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: formInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Form Fields */}
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 mb-4 gap-4">
          <motion.input
            type="text"
            placeholder="First Name"
            className="w-full border-b-2 border-gray-400 outline-none py-6 text-3xl placeholder:text-lg transition duration-300 focus:border-blue-500 hover:border-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : -50 }}
            transition={{ duration: 1 }}
          />
          <motion.input
            type="text"
            placeholder="Second Name"
            className="w-full border-b-2 border-gray-400 outline-none py-6 text-3xl placeholder:text-lg transition duration-300 focus:border-blue-500 hover:border-gray-600"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 mb-16 gap-4">
          <motion.input
            type="text"
            placeholder="Mobile"
            className="w-full border-b-2 border-gray-400 outline-none py-6 text-3xl placeholder:text-lg transition duration-300 focus:border-blue-500 hover:border-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : -50 }}
            transition={{ duration: 1 }}
          />
          <motion.input
            type="email"
            placeholder="Mail"
            className="w-full border-b-2 border-gray-400 outline-none py-6 text-3xl placeholder:text-lg transition duration-300 focus:border-blue-500 hover:border-gray-600"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="mb-16">
          <motion.textarea
            placeholder="Leave a Message........."
            className="w-full border-b-2 border-gray-400 outline-none py-6 text-3xl placeholder:text-lg resize-none h-40 transition duration-300 focus:border-blue-500 hover:border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <motion.button
            className="px-12 py-6 text-white bg-pink-700 rounded-full shadow-lg text-2xl transition duration-300 hover:bg-blue-600 hover:scale-110 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Submit
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
