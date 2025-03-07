import React from 'react';
import { SlArrowRightCircle } from "react-icons/sl";
import service1 from '../assets/product1.jpg';
import service2 from '../assets/product4.jpg';
import service3 from '../assets/product5.jpg';
import service4 from '../assets/product6.jpg';
import service5 from '../assets/product7.jpg';
import service6 from '../assets/product8.jpg';

const Services = () => {

  return (
    <div>
      <div id="services" className="mt-1 md:mt-4">
        <h2 className="text-4xl pl-11 lg:pl-50 md:text-6xl font-bold text-violet-600 mb-4">
          Our Core Salesforce Solutions & Services.
        </h2>
        <p className="text-2xl pl-7 pr-10 lg:pb-20 font-heading lg:pr-50 lg:pl-50 md:pl-20 md:pr-20 md:text-3xl text-center pt-2">
          Your passage goes here. This is a detailed explanation of your content. You can adjust the font size, line height, and other styles as necessary.
        </p>
      </div>

      <div className="grid pt-10 mb-20 lg:mb-40 lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-0">
        {/* First Card */}
        <div className="order-1 md:order-1 p-0 w-[470px] h-[300px] lg:w-[780px] lg:h-[600px] shadow-xl transition-all duration-500 bg-white text-black flex justify-center items-center">
          <div className="flex flex-col justify-center pl-[30px] md:pl-[130px]">
            <h2 className="text-2xl md:text-3xl font-bold">Optimize Your Business Experience</h2>
            <p className="text-lg md:text-2xl font-heading mb-0 pr-20 mt-1 pt-[20px]">We are pleased to offer a variety of services...</p>
            <div className="mt-10 self-start">
              <a href="#" className="group px-4 py-3 text-lg font-semibold border rounded-3xl border-black text-black shadow-lg flex space-x-2 transition-all duration-300 whitespace-nowrap">
                <span>Learn More</span>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* First Image */}
        <div className="order-2 hover:scale-105 w-[470px] h-[300px] pb-3 lg:pb-0 lg:w-[780px] lg:h-[600px] hover:shadow-xl hover:brightness-110 transition-all duration-300 md:order-2 p-0 shadow-xl flex justify-center items-center">
          <img src={service1} alt="Service Image" className="w-full h-full object-cover shadow-lg" />
        </div>

        {/* Second Card */}
        <div className="order-3 md:order-4 p-0 w-[470px] h-[300px] lg:pb-0 lg:w-[780px] lg:h-[600px] shadow-xl transition-all duration-500 bg-white text-black flex justify-center items-center md:flex-row-reverse">
          <div className="flex flex-col justify-center pl-[30px] md:pl-[130px]">
            <h2 className="text-2xl md:text-3xl font-bold">Transform Your Business with Innovation</h2>
            <p className="text-lg font-heading md:text-2xl mb-0 pr-20 mt-1 pt-[20px]">We offer cutting-edge solutions...</p>
            <div className="mt-10 self-start">
              <a href="#" className="group px-4 py-3 text-lg font-semibold border rounded-3xl border-black text-black shadow-lg flex space-x-2 transition-all duration-300 whitespace-nowrap">
                <span>Learn More</span>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="order-4 w-[470px] h-[300px] pb-3 lg:pb-0 lg:w-[780px] lg:h-[600px] hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 md:order-3 p-0 shadow-xl flex justify-center items-center">
          <img src={service2} alt="Service Image" className="w-full h-full object-cover shadow-lg" />
        </div>

        {/* Third Card */}
        <div className="order-5 md:order-5 w-[470px] h-[300px] lg:pb-0 lg:w-[780px] lg:h-[600px] p-0 shadow-xl transition-all duration-500 bg-white text-black flex justify-center items-center">
          <div className="flex flex-col justify-center pl-[30px] md:pl-[130px]">
            <h2 className="text-2xl md:text-3xl font-bold">Innovating for Future Success</h2>
            <p className="text-lg font-heading md:text-2xl mb-0 pr-20 mt-1 pt-[20px]">Our cutting-edge services help businesses innovate...</p>
            <div className="mt-10 self-start">
              <a href="#" className="group px-4 py-3 text-lg font-semibold border rounded-3xl border-black text-black shadow-lg flex space-x-2 transition-all duration-300 whitespace-nowrap">
                <span>Learn More</span>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Third Image */}
        <div className="order-6 w-[470px] h-[300px] pb-3 lg:pb-0 lg:w-[780px] lg:h-[600px] hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 md:order-6 p-0 shadow-xl flex justify-center items-center">
          <img src={service3} alt="Service Image" className="w-full h-full object-cover shadow-lg" />
        </div>

        {/* Fourth Card */}
        <div className="order-7 w-[470px] h-[300px] lg:pb-0 lg:w-[780px] lg:h-[600px] md:order-8 p-0 shadow-xl transition-all duration-500 bg-white text-black flex justify-center items-center md:flex-row-reverse">
          <div className="flex flex-col justify-center pl-[30px] md:pl-[130px]">
            <h2 className="text-2xl md:text-3xl font-bold">Guiding You to Success</h2>
            <p className="text-lg font-heading md:text-2xl mb-0 pr-20 mt-1 pt-[20px]">We provide expert services to help you scale your business...</p>
            <div className="mt-10 self-start">
              <a href="#" className="group px-4 py-3 text-lg font-semibold border rounded-3xl border-black text-black shadow-lg flex space-x-2 transition-all duration-300 whitespace-nowrap">
                <span>Learn More</span>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="order-8 w-[470px] h-[300px] pb-3 lg:pb-0 lg:w-[780px] lg:h-[600px] hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 md:order-7 p-0 shadow-xl flex justify-center items-center">
          <img src={service4} alt="Service Image" className="w-full h-full object-cover shadow-lg" />
        </div>

        {/* Fifth Card */}
        <div className="order-9 w-[470px] h-[300px] lg:pb-0 lg:w-[780px] lg:h-[600px] md:order-9 p-0 shadow-xl transition-all duration-500 bg-white text-black flex justify-center items-center">
          <div className="flex flex-col justify-center pl-[30px] md:pl-[130px]">
            <h2 className="text-2xl md:text-3xl font-bold">Customized for Your Business</h2>
            <p className="text-lg font-heading md:text-2xl mb-0 pr-20 mt-1 pt-[20px]">We provide tailor-made solutions...</p>
            <div className="mt-10 self-start">
              <a href="#" className="group px-4 py-3 text-lg font-semibold border rounded-3xl border-black text-black shadow-lg flex space-x-2 transition-all duration-300 whitespace-nowrap">
                <span>Learn More</span>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="order-10 lg:pb-0 lg:w-[780px] w-[470px] pb-3 h-[300px] lg:h-[600px] hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 md:order-10 p-0 shadow-xl flex justify-center items-center">
          <img src={service5} alt="Service Image" className="w-full h-full object-cover shadow-lg" />
        </div>

        {/* Sixth Card */}
        <div className="order-11 w-[470px] h-[300px] lg:pb-0 lg:w-[780px] lg:h-[600px] md:order-12 p-0 shadow-xl transition-all duration-500 bg-white text-black flex justify-center items-center md:flex-row-reverse">
          <div className="flex flex-col justify-center pl-[30px] md:pl-[130px]">
            <h2 className="text-2xl md:text-3xl font-bold">Advanced Tech Solutions</h2>
            <p className="text-lg font-heading md:text-2xl mb-0 pr-20 mt-1 pt-[20px]">Empowering your business with cutting-edge technologies...</p>
            <div className="mt-10 self-start">
              <a href="#" className="group px-4 py-3 text-lg font-semibold border rounded-3xl border-black text-black shadow-lg flex space-x-2 transition-all duration-300 whitespace-nowrap">
                <span>Learn More</span>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <SlArrowRightCircle className="text-black text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Sixth Image */}
        <div className="order-12 w-[470px] h-[300px] pb-3 lg:pb-0 lg:w-[780px] lg:h-[600px] hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 md:order-11 p-0 shadow-xl flex justify-center items-center">
          <img src={service6} alt="Service Image" className="w-full h-full object-cover shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Services;
