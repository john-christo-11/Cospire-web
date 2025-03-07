import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Industries", path: "industries" },
    { name: "Product", path: "product" },
    { name: "Stories", path: "stories" },
    { name: "Commitment", path: "commitment" },
    { name: "Resources", path: "resources" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="bg-white lg:pb-4 shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out font-sans mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 mr-12">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-[60px] w-auto object-contain cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 cursor-pointer">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                smooth={true} 
                duration={500} 
                className="text-gray-700 text-lg font-poppins font-semibold hover:text-blue-500 transition-all duration-300 relative group py-2 px-3 rounded-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none transform transition-transform duration-300 hover:rotate-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute right-0 mt-3 w-56 bg-white shadow-xl rounded-xl p-4"
                >
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      smooth={true} 
                      duration={500} 
                      className="block text-gray-700 text-lg font-semibold hover:text-blue-500 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg"
                      onClick={() => setIsOpen(false)} 
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
