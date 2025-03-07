import React, { useState, useEffect, useRef } from 'react';
import aboutImage from '../assets/product1.jpg'; // Import the image as a module

const About = () => {
    const leftSectionRef = useRef(null);
    const [isLeftInView, setIsLeftInView] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === leftSectionRef.current) {
                        setIsLeftInView(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(leftSectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="about" className="flex flex-col mb-15 lg:mb-45  md:grid md:grid-cols-2 h-auto md:h-screen pt-2">
            {/* Left side section */}
            <div
                ref={leftSectionRef}
                className={`sm:p-4 pl-[30px] pb-[30px] md:pl-[130px] shadow-xl transition-all duration-500 ${isLeftInView ? 'opacity-100' : 'blur-lg opacity-50'} bg-rose-600 text-white flex flex-col justify-start h-auto md:h-[95vh]  rounded-tl-[10px] rounded-tr-[10px] md:rounded-tr-none md:rounded-bl-[10px]`}
            >
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-1 pt-[60px] animate__animated animate__fadeIn">About Us</h1>
                <h2 className="text-2xl md:text-4xl pt-[30px] font-heading font-semibold mb-1 animate__animated animate__fadeIn animate__delay-1s">Optimize Your Salesforce Experience</h2>
                <p className="text-lg md:text-2xl mb-0 mt-1 pt-[20px] font-heading animate__animated animate__fadeIn animate__delay-2s">We are glad you're here.. Cospire is a contemporary service-centric company offering Salesforce customisation services. We understand that every business has unique needs, and a one-size-fits-all approach will no longer work. With that in mind, we offer customisation services to help tailor Salesforce to your requirements.</p>
                <p className="text-lg md:text-2xl mb-0 mt-1 pt-[20px] font-heading animate__animated animate__fadeIn animate__delay-3s">Our team of experienced Salesforce developers can work together with you to identify your business needs and create custom solutions that enhance your Salesforce experience.</p>
            </div>


            <div className="md:block  hidden w-full h-[95vh] overflow-hidden">
                <img
                    src={aboutImage}
                    alt="About Image"
                    className="w-full h-full object-cover animate__animated animate__fadeIn animate__delay-5s shadow-lg"
                />
            </div>

            <div className="md:hidden flex justify-center ">
                <img
                    src={aboutImage}
                    alt="About Image"
                    className="w-auto max-w-full h-auto object-contain animate__animated animate__fadeIn animate__delay-5s shadow-lg rounded-bl-[10px] rounded-br-[10px]"
                />
            </div>
        </div>
    );
};

export default About;
