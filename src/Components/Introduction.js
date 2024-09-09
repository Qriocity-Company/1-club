import React from "react";
import calendar from "../assets/calendar.png";
import clock from "../assets/clock.png";
import coach from "../assets/coach.png";
import star from "../assets/star.png";
import smallstar from "../assets/smallstar.png";

const Introduction = () => {
  const handleButtonClick = () => {
    window.open("https://buy.stripe.com/dR6aGDdfo5qwaCkcMZ", "_blank");
  };
  return (
    <div className="mt-[50px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8">
        <div className="flex flex-col text-[36px] lg:text-[64px] justify-center gap-0 items-center lg:items-start font-serif text-[#302825]">
          <h1>Overcome Stress</h1>
          <h1>and Anxiety in 1Hr</h1>
        </div>
        <div className="flex flex-col text-[20px] lg:text-[30px] justify-center items-center lg:items-start font-serif">
          <h1>Join and become like the</h1>
          <h1>Top 1% Successful People</h1>
        </div>
        <div className="flex flex-col justify-center items-start lg:items-start gap-2 lg:gap-5">
          <div className="flex justify-center items-center gap-2">
            <img src={calendar} alt="Calendar" />
            <h1 className="text-[16px] lg:text-[24px] font-[400]">
              7 PM EST(1 Hr Workshop)
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={clock} alt="Clock" />
            <h1 className="text-[16px] lg:text-[24px] font-[400]">
              September 18,2024
            </h1>
          </div>
        </div>

        <div className="button flex flex-col justify-center items-center lg:items-start">
          <button
            onClick={handleButtonClick}
            className="bg-[#0B6544] rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[16px] lg:text-[24px] font-medium"
          >
            Book your spot at $4.99!
          </button>
          <p className="text-[16px] lg:text-[24px]">Only 10% Seats left</p>
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
        <div className="bg-[#DBE1DA] w-fit lg:w-[550px] h-[150.31px] p-2 rounded-[11.39px] flex justify-center items-center border-b-black border-y-4">
          <p className="text-sm lg:text-lg text-center lg:text-left">
            Supercharge your productivity and experience deep inner peace.
          </p>
        </div>
        <img src={coach} alt="Coach" />
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

export default Introduction;
