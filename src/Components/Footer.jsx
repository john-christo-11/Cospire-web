import React, { useEffect, useState } from 'react';
import l1 from "../assets/logo.png";
import { motion } from 'framer-motion';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById('footer');
    const rect = footer.getBoundingClientRect();

    // Check if the footer is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer" className="py-6 mt-20 bg-rose-50 text-black relative">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <motion.div
          className="grid grid-cols-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a rel="noopener noreferrer" href="#" className="flex justify-center md:justify-start">
              <motion.img
                src={l1}
                alt="Logo"
                className="w-75 h-17 pr-30 lg:pr-0 lg:pl-35 rounded-lg hover:scale-110"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </a>
            <div className="lg:mt-4 lg:pl-40 pr-30 text-center md:text-left">
              <h3 className="text-lg font-semibold">Our Addresses</h3>
              <motion.div
                className="mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1.2 }}
              >
                <h4 className="font-medium">Head Office</h4>
                <p className="text-sm text-black">
                  123 Main Street, <br />
                  Bangalore, India <br />
                  ZIP: 560001
                </p>
              </motion.div>
              <motion.div
                className="mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              >
                <h4 className="font-medium">Branch Office</h4>
                <p className="text-sm text-black">
                  456 Elm Avenue, <br />
                  Chennai, India <br />
                  ZIP: 600032
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="col-span-6 text-black text-center md:text-left md:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="pb-3 pt-5 text-2xl font-medium">Category</p>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:text-violet-400">Home</a></li>
              <li><a href="/about" className="hover:text-violet-400">About Us</a></li>
              <li><a href="/services" className="hover:text-violet-400">Service</a></li>
              <li><a href="#Industries" className="hover:text-violet-400">Industries</a></li>
              <li><a href="#Product" className="hover:text-violet-400">Products</a></li>
              <li><a href="#" className="hover:text-violet-400">Blog</a></li>
              <li><a href="#" className="hover:text-violet-400">Careers</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="col-span-6 mb-5 text-black text-center md:text-left md:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="pb-3 pt-5 text-2xl font-medium">Category</p>
            <ul className="space-y-2 text-xl mt-2">
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
              <li><a href="#" className="hover:text-violet-400">Link</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid justify-center lg:pt-6 pr-40 lg:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col pb-12 lg:pl-30 self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2025 All rights reserved</span>
            <a href="#"><span>Privacy policy</span></a>
            <a href="#"><span>Terms of service</span></a>
          </div>
        </motion.div>
      </div>

      {/* Social Media Icons in Bottom Right Corner */}
      <div className="absolute bottom-15 right-20 pl-5 pb-6 flex space-x-4">
        {/* Facebook */}
        <motion.a
          href="#"
          className="transition-transform duration-300 hover:scale-110 hover:text-blue-500"
          title="Facebook"
          animate={{ y: isVisible ? [0, -15, 0] : 0 }}  // Floating effect
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6">
            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
          </svg>
        </motion.a>

        {/* Twitter */}
        <motion.a
          href="#"
          className="transition-transform duration-300 hover:scale-110 hover:text-sky-400"
          title="Twitter"
          animate={{ y: isVisible ? [0, -15, 0] : 0 }}  // Floating effect
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
          </svg>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="#"
          className="transition-transform duration-300 hover:scale-110 hover:text-blue-700"
          title="LinkedIn"
          animate={{ y: isVisible ? [0, -15, 0] : 0 }}  // Floating effect
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M4.983 3.5a2.49 2.49 0 00-2.48 2.5 2.49 2.49 0 002.48 2.5c1.378 0 2.482-1.12 2.482-2.5a2.49 2.49 0 00-2.482-2.5zM2.5 21h5V9h-5v12zM9 9v12h5v-7c0-2.1 1.9-2.3 2-2.3s1 .1 1 2.2v7h5v-7c0-4-2-6-5-6s-5 2-5 6z"></path>
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;
