import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ screenshots }) => {
  const carouselRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  // Scroll right function
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto my-12">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-1 md:p-2 rounded-full shadow-md hover:bg-green-600 z-10"
      >
        <FiChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll gap-4 p-4 scroll-smooth hide-scrollbar"
      >
        {screenshots.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw]"
          >
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-1 md:p-2 rounded-full shadow-md hover:bg-green-600 z-10"
      >
        <FiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default ImageCarousel;
