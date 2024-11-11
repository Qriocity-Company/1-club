import React, { useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ screenshots }) => {
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  // Scroll left function
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -500,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 500,
        behavior: 'smooth',
      });
    }
  };

  // Auto-scroll functionality with infinite loop
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (carouselRef.current && !isScrolling.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          // When reaching the end, reset scroll position to the beginning
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll to the right
          scrollRight();
        }
      }
    }, 2000); // Change slides every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  // Clone images to create an infinite loop effect
  const extendedScreenshots = [...screenshots, ...screenshots];

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
        {extendedScreenshots.map((image, index) => (
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
