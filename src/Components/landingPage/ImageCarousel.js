import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



import test1 from "../../assets/testimonials/test1.jpg"
import test2 from "../../assets/testimonials/test2.jpg"
import test3 from "../../assets/testimonials/test3.jpg"
import test4 from "../../assets/testimonials/test4.jpg"
import test5 from "../../assets/testimonials/test5.jpg"
import test6 from "../../assets/testimonials/test6.jpeg"
import test7 from "../../assets/testimonials/test7.jpeg"
import test8 from "../../assets/testimonials/test8.jpeg"
import test9 from "../../assets/testimonials/test9.jpeg"
import test10 from "../../assets/testimonials/test10.jpeg"
import test11 from "../../assets/testimonials/test11.jpeg"
import test12 from "../../assets/testimonials/test12.jpeg"
import test13 from "../../assets/testimonials/test13.jpeg"


// Array of image URLs
const images = [
  test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10,
    test11,
    test12,
    test13,
];

function ImageCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1000) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  const sliderRef = React.createRef();

  // Manual navigation functions
  const scrollLeft = () => sliderRef.current.slickPrev();
  const scrollRight = () => sliderRef.current.slickNext();

  return (
    <div className="relative h-full w-[99vw] px-2 my-8">
     

      {/* Image Slider */}
      <div className="slider-container h-full w-full z-50 gap-2 flex flex-col items-center">
        <Slider ref={sliderRef} {...settings} className="w-full md:w-[95%]">
          {images.map((image, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-100 h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                <p className="absolute bg-green-300 p-2 px-4 m-3 rounded-full">{index + 1}</p>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
    </div>
  );
}

export default ImageCarousel;
