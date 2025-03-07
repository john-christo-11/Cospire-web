import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-6xl text-gray-700 z-10"
      onClick={onClick}
    >
      <CiCircleChevRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-6xl text-gray-700 z-10"
      onClick={onClick}
    >
      <CiCircleChevLeft />
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    nextArrow: <CustomNextArrow />, 
    prevArrow: <CustomPrevArrow />, 
  };

  const slides = [
    { text: "React makes UI development easy. Slick provides a smooth experience. Animations add depth to UI.  stops auto movement. UI/UX principles enhance usability. Front-end technologies evolve rapidly. Frameworks simplify complex tasks. Good typography improves readability. Design consistency matters. Understanding eys user behavior is key.", company: "Google" },
    { text: "Front-end frameworks save time. Consistency is key in UI design. Animations should be subtle. Autoplay  engagement. Accessibility matters in web design. Performance optimization enhances speed. Well-structured code boosts maintainability. Responsive design adapts to screens. CSS methodologies streamline styling.  feedback drives improvements.", company: "TATA" },
    { text: "Performance optimization matters. Lazy loading images is useful. Avoid overusing animations. User feedback improves design. Coding best practices are essential. Interactive elements enhance engagement. Simplicity is the ultimate sophistication. Testing prevents unforeseen issues. Security should not be overlooked. Scalability ensures future growth.", company: "Microsoft" },
    { text: "Dark mode is a popular trend. Mobile-first design is essential. SEO is crucial for visibility. Clean code improves maintainability. Cross-browser compatibility is important. Efficient state management is vital. Proper documentation aids development. API integration connects services. Code reusability saves time. Understanding databases is essential.", company: "Tesla" },
    { text: "React hooks simplify logic. Component reusability saves effort. Testing is key for stability. Stay updated with new trends. Version control is crucial in development. Code reviews improve quality. Debugging skills save time. UX research enhances satisfaction. Choosing the right stack matters. Continuous learning is the key to success.", company: "Apple" },
  ];

  return (
    <div className="w-full mb-20 h-[90vh] lg:h-[90vh] flex items-center justify-center relative">
      <div className="lg:w-full w-full lg:h-full h-50px-4 flex items-center">
        <Slider {...settings} className="w-full">
          {slides.map((slide, index) => (
            <div key={index} className="p-20 bg-pink-50 text-center rounded-lg shadow-lg w-full transition-all duration-500 ease-in-out transform hover:scale-105">
              <p className="lg:text-3xl text-xl lg:pl-45 lg:pr-45 font-heading leading-[2.5rem] mb-8 whitespace-pre-wrap">{slide.text}</p>
              <h3 className="text-4xl font-bold font-poppins text-blue-700 mt-4">{slide.company}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
