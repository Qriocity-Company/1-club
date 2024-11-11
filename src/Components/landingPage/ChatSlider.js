import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function ChatSlider({ screenshots }) {
  return React.createElement(
    'div',
    { className: 'w-full max-w-4xl mx-auto my-8' },
    React.createElement(
      Swiper,
      {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        autoplay: { delay: 2500, disableOnInteraction: false },
        loop: true,
        className: 'rounded-lg overflow-hidden shadow-lg',
      },
      screenshots.map((image, index) =>
        React.createElement(
          SwiperSlide,
          { key: index },
          React.createElement('img', {
            src: image,
            alt: `Client Screenshot ${index + 1}`,
            className: 'w-full h-96 object-cover',
          })
        )
      )
    )
  );
}

export default ChatSlider;
