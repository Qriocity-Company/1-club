import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import human from "../../assets/human.png";
import comma from "../../assets/comma.png";

const Banners = [
  {
    content:
      "As a busy mom and entrepreneur, I was struggling with falling sales and family issues. After joining Lydia’s Trauma to Triumph program and her 1% Meditation Club, my life transformed in just 10 weeks. My family issues disappeared, my relationships healed, and I even launched a successful new business. Thank you, Lydia, for guiding me to inner healing and success! ",
    name: "Anushka",
    location: "India",
    img: human,
  },
  {
    content:
      "I had everything, but within 30 days, my life fell apart. Thanks to Lydia, I realized that my own thoughts were holding me back. She helped me reprogram my subconscious, and now my life is back on track. Lydia, your support changed everything for me!",
    name: "Amy",
    location: "USA",
    img: human,
  },
  {
    content:
      "I was feeling stuck after moving to different countries and couldn’t find a job. But after just three sessions with Lydia, addressing my success blocks, I landed a job with a 60% pay raise! Lydia, you were the key to my success. Thank you!",
    name: "Shwetha",
    location: "USA",
    img: human,
  },
  {
    content:
      "After 12 years of trauma and domestic violence, I was exhausted. Lydia’s 30-day challenge changed my life. I got promoted and reduced my workload by practicing the simple techniques she taught. Thank you, Lydia, for helping me rewire my mind and achieve success! ",
    name: "Sneha",
    location: "Australia",
    img: human,
  },
];

function Carousel() {
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

    // Call handleResize once on initial render to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 20,
    cssEase: "linear",
    ltr: true,
    arrows: false,
  };
  const settings2 = {
    dots: false,

    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 20,
    cssEase: "linear",
    rtl: true,
    arrows: false,
  };
  return (
    <div className="h-full  w-[99vw] px-2 ">
      <div className="slider-container h-full w-full z-50 gap-2   flex  flex-col items-center ">
        <Slider
          {...settings}
          className="w-full md:w-[95%] flex justify-between  "
        >
          {Banners.map((banner, index) => (
            <div className="p-5 ">
              <div
                className="  bg-[#a4dacd] h-[300px]  p-5 md:p-10 flex justify-between flex-col gap-2 border-2 border-green-800  rounded-xl"
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">
                        {banner.name}
                      </h1>
                    </div>
                    <img src={comma} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          {...settings2}
          className="w-[90%]  justify-between hidden md:flex"
        >
          {Banners.map((banner, index) => (
            <div className="p-5">
              <div
                className="  bg-[#a4dacd]  justify-between h-[300px] p-5 md:p-10 flex flex-col gap-2 border-2 border-green-800 rounded-xl "
                key={index}
              >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">
                        {banner.name}
                      </h1>
                    </div>
                    <img src={comma} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
