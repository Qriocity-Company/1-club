import React, { useEffect } from "react";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import coach from "../../assets/coach.png";
import star from "../../assets/star.png";
import smallstar from "../../assets/smallstar.png";

const IntroductionTwo = () => {
  const handleButtonClick = () => {
    // if (window.fbq) {
    //   window.fbq("track", "BookAppointment", {
    //     content_name: "Google Calendar Booking",
    //     content_category: "Appointment",
    //   });
    // }

    window.open("https://calendar.app.google/QTLRXDiZRHReZVa86", "_blank");
  };

  return (
    <div className="mt-[30px] lg:px-32 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8">
        <div className="flex mx-5 flex-col text-[36px] lg:text-[64px] justify-center gap-0 items-center lg:items-start font-serif text-[#302825]">
          <h1>Unleash Your Potential and Build Your Way to Growth, Riches and Relationships Using</h1>
          <h1 className="font-bold">The MAP METHOD™️</h1>
        </div>
        <div className="flex flex-col text-[20px] lg:text-[30px] justify-center items-center lg:items-start font-serif">
          
        </div>
        <div className="button flex flex-col justify-center items-center lg:items-start">
          <button
            onClick={handleButtonClick}
            className="bg-[#0B6544] rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[20px] shadow-md shadow-gray-500 lg:text-[32px] font-medium"
          >
            TAKE CONTROL OF YOUR LIFE NOW!
          </button>
       
        </div>
        <div className="flex flex-col justify-center items-start lg:items-start gap-2 lg:gap-5">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-[16px]  text-[#302825] font-bold lg:text-[32px]">
            100% Backed by Science 
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            
          </div>
        </div>

        
      </div>

      <div className="relative lg:place-self-end flex justify-center">
        <img className="absolute mt-3 mr-12" src={smallstar} alt="Small Star" />
        <img src={star} alt="Star" />
        <img
          className="absolute ml-[42px] top-0 mt-[52px]"
          src={smallstar}
          alt="Small Star"
        />
      </div>

     

      <div className="flex flex-col justify-center items-center gap-4 lg:gap-10 p-2">
        
        <img src={coach} alt="Coach" className="h-96 min-w-96" />
        <div className="bg-black text-white  flex-col justify-center items-start w-full lg:w-[250.24px] h-[82.35px] rounded-[12.67px] mt-6 lg:mt-[450px] lg:ml-[150px] lg:absolute hidden lg:flex">
          <div className="bg-[#0A6544] flex justify-center items-center h-[18.59px] w-[34.64px] -mt-6 ml-5 rounded-sm">
            by
          </div>
          <h1 className="text-[16px] lg:text-[24.2px] ml-5">Lydia Binil</h1>
          <h1 className="ml-5 text-[10px] lg:text-[13.52px]">
            Success and Money Block Coach
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroductionTwo;
