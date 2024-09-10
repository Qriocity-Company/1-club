import React from "react";
import med from "../assets/med.png";
import bulb from "../assets/bulb.png";
import relax from "../assets/relax.png";
import plant from "../assets/plant.png";
import life from "../assets/life.png";
import sleep from "../assets/sleep.png";
import helath from "../assets/health.png";

const Meditation = () => {
  const handleButtonClick = () => {
    window.open("https://buy.stripe.com/6oE5mj4IS3io9yg6oE", "_blank");
  };
  return (
    <>
      <div className="flex flex-col justify-normal items-center mt-[100px] md:mt-[200px] px-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 font-serif text-center md:text-left">
          <span className="text-[28px] md:text-[36px]">
            Experience Meditation that
          </span>
          <span className="text-[48px] md:text-[64px] text-[#0A6544]">
            100%{" "}
          </span>
          <span className="text-[48px] md:text-[64px]">Works</span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start mt-10 md:mt-20 gap-10 md:gap-20">
          <img src={med} className="w-full max-w-md lg:max-w-none" />
          <div className="flex flex-col justify-center items-start gap-5">
            {/* Repeatable Content Box */}
            {[
              {
                img: bulb,
                title: "Proven Techniques:",
                text: "Engage in practices scientifically shown to reduce stress and improve well-being.",
              },
              {
                img: relax,
                title: "Deep Relaxation:",
                text: "Achieve immediate stress relief and deep relaxation.",
              },
              {
                img: plant,
                title: "Lasting Impact:",
                text: "Address the root causes of stress for long-term peace of mind.",
              },
              {
                img: life,
                title: "Life Transformation:",
                text: "Improve your mental clarity, emotional stability, and happiness.",
              },
              {
                img: sleep,
                title: "Better Sleep:",
                text: "Sleep more restful and wake up refreshed.",
              },
              {
                img: helath,
                title: "Health Benefits:",
                text: "Boost your immune system, lower blood pressure, and enhance heart health.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#DAE1D9] border-[#B4B4B4] border-2 w-full md:w-[641.89px] h-auto md:h-[68.81px] flex lg:flex-row flex-col lg:rounded-tl-none lg:rounded-tr-[11.31px] lg:rounded-br-[11.31px] lg:rounded-bl-none rounded-md p-4 md:p-0 items-center"
              >
                <div className="bg-[#0A6544] rounded-full h-[50px] w-[50px] md:h-[68.81px] md:w-[68.81px] z-40  md:-ml-8 flex justify-center items-center">
                  <img src={item.img} />
                </div>
                <h1 className="ml-5 font-bold lg:mt-0 mt-5">
                  {item.title}{" "}
                  <span className="font-normal text-center">{item.text}</span>
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={handleButtonClick}
          className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] md:text-[24px] font-medium mt-8"
        >
          Book your spot at $4.99!
        </button>
      </div>
    </>
  );
};

export default Meditation;
