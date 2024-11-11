import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ screenshots }) => {
  const carouselRef = useRef(null);

  // Scroll the carousel to the left
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -500,
      behavior: 'smooth',
    });
  };

  // Scroll the carousel to the right
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 500,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto my-12">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 z-10"
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll gap-6 p-4 scroll-smooth hide-scrollbar"
      >
        {screenshots.map((image, index) => (
          <div key={index} className="min-w-[500px] flex-shrink-0">
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 z-10"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default ImageCarousel;
