import { motion } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";
import img1 from "../assets/product1.jpg";
import img2 from "../assets/product2.jpg";
import img3 from "../assets/product3.jpg";
import img4 from "../assets/product4.jpg";

const products = [
  { id: 1, image: img1, title: "1. Product One", description: "This is the first product description." },
  { id: 2, image: img2, title: "2. Product Two", description: "This is the second product description." },
  { id: 3, image: img3, title: "3. Product Three", description: "This is the third product description." },
  { id: 4, image: img4, title: "4. Product Four", description: "This is the fourth product description." }
];

const Product = () => {
  return (
    <div className="container lg:mb-35 mx-auto px-4 pt-2">
      <h1 className="text-4xl pl-13 md:pl-90 md:pb-10 font-poppins md:text-6xl font-bold text-blue-800 pt-30 mb-8">
        What Makes Us Different?
      </h1>

     
      <div id="product" className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-y-18 md:gap-y-18">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 1 }}
          >
            
            <motion.div
              className="flex justify-center w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-80 h-60 hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300
 md:w-140 md:h-75 lg:w-140 lg:h-85 object-cover"
              />
            </motion.div>

            
            <div className="w-full text-left mt-1">
              <motion.h2
                className="text-3xl pt-5 lg:pl-35 lg:text-4xl font-poppins pl-13 font-bold"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {product.title}
              </motion.h2>
              <motion.p
                className="text-xl lg:text-3xl lg:pl-35 md:text-xl pt-5 font-heading pl-13 pr-2 text-black mt-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {product.description}
              </motion.p>

              <motion.a
                href="#"
                className="group px-4 py-4 ml-14 mb-5 mr-30 lg:px-5 lg:text-md font-heading lg:py-4 mt-13 md:ml-35 md:mr-75 lg:ml-35 lg:mr-100 text-xl border rounded-4xl border-black text-black shadow-lg flex items-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span>Learn More</span>
                <motion.div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;
