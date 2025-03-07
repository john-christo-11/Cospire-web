
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from './Components/Hero';
import Missions from './Components/Missions';
import About from './Components/About';
import Services from './Components/Services';
import Industries from './Components/Industries';
import Stories from './Components/Stories';
import Product from './Components/Product';
import Commitment from './Components/Commitment';
import Resources from './Components/Resources';
import Slider from './Components/Slider';
import Contact from './Components/Contact';

function App() {
  return (
    <Router> {/* Wrap the entire app inside Router */}
      <Navbar /> {/* Your Navbar */}
      
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Missions />
                <About />
                <Services />
                <Industries />
                <Stories />
                <Product />
                <Commitment />
                <Resources />
                <Slider />
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                key="services"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/industries"
            element={
              <motion.div
                key="industries"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Industries />
              </motion.div>
            }
          />
          <Route
            path="/stories"
            element={
              <motion.div
                key="stories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stories />
              </motion.div>
            }
          />
          <Route
            path="/product"
            element={
              <motion.div
                key="product"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Product />
              </motion.div>
            }
          />
          <Route
            path="/commitment"
            element={
              <motion.div
                key="commitment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Commitment />
              </motion.div>
            }
          />
          <Route
            path="/resources"
            element={
              <motion.div
                key="resources"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Resources />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      
      <Footer /> {/* Footer */}
    </Router>
  );
}

export default App;
