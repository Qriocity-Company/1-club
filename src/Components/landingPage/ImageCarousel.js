import React, { useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ screenshots }) => {
  const carouselRef = useRef(null);
  const isAutoScrolling = useRef(false);

  // Function to scroll left manually
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -500,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right manually
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 500,
        behavior: 'smooth',
      });
    }
  };

  // Auto-scrolling and infinite loop
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Automatically scroll right
        carouselRef.current.scrollBy({ left: 500, behavior: 'smooth' });

        // Check if we're near the end and reset to the start
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'instant' });
        }
      }
    }, 2000); // Change slides every 2 seconds

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto my-12 overflow-hidden">


      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll gap-4 scroll-smooth hide-scrollbar"
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

  
     
    </div>
  );
};

export default ImageCarousel;
