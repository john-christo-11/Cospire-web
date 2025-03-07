import React from "react";
import { motion } from "framer-motion";

const Stories = () => {
  const storiesData = [
    { color: "bg-rose-100", title: "30%", description: "A journey of resilience and determination." },
    { color: "bg-sky-100", title: "40%", description: "Turning aspirations into reality." },
    { color: "bg-rose-100", title: "50%", description: "Creativity leading to new opportunities." },
    { color: "bg-sky-100", title: "20%", description: "Inspiring and uplifting the community." }
  ];

  return (
    <div id="stories" className="flex flex-col items-center text-center pt-2">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold font-poppins text-blue-800 pt-15 mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Success Stories
      </motion.h1>

      {/* Passage */}
      <motion.p
        className="text-2xl pr-5 pl-5 font-heading md:pl-70 md:pb-9 md:pr-70 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover inspiring journeys and experiences shared by individuals from different backgrounds.
      </motion.p>

      {/* Square Divs */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-5">
        {storiesData.map((story, index) => (
          <motion.div
            key={index}
            className={`w-40 h-40 md:pt-0 lg:w-70 lg:h-70 md:w-60 md:h-60 sm:w-40 sm:h-40 flex flex-col justify-center items-center ${story.color} rounded-xl shadow-lg p-4`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl pt-14 md:pt-6 md:text-7xl font-bold font-poppins text-black-800 mb-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {story.title}
            </motion.h2>
            <motion.p
              className="text-md lg:text-2xl font-heading mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {story.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
