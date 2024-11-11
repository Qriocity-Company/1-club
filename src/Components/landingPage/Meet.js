import React, { useEffect } from "react";
import coach from "../../assets/coachfullpic.png";
import star from "../../assets/star.png";
import smallstar from "../../assets/smallstar.png";

const Meet = () => {
  const handleButtonClick = () => {
    if (window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: "Stress and Anxiety Workshop",
        content_category: "Workshop",
        value: 5.0,
        currency: "USD",
      });
    }

    window.open("https://bit.ly/Trauma2Triumph-LydiaBinil", "_blank");
  };

  return (
    <div className="bg-[#000E09] w-full mt-10 flex flex-col md:flex-row p-2">
      <div className="flex flex-col items-center md:items-start">
        <div className="meet flex flex-col justify-center items-center md:items-start md:ml-[100px] mt-[50px] md:mt-[100px]">
          <h1 className="text-[36px] md:text-[60.95px] flex justify-center items-center text-white gap-4 text-center md:text-left">
            Meet <span className="text-[#0A6544]"> Lydia Binil</span>
          </h1>
         
        </div>
        <div className="flex flex-col md:flex-row md:ml-[100px] mt-[20px] md:mt-[50px] gap-4 md:gap-10 items-center md:items-start">
          <div className="h-[2px] md:h-[500px] md:p-[1px] bg-[#0A6544] w-full md:w-auto"></div>
          <div className="flex flex-col justify-center items-center r gap-4 md:gap-8 w-full md:w-[710px] text-white text-[16px] md:text-[20px] p-4 md:p-0">
            <p className="text-center lg:text-start">
            Welcome, fellow achiever! I'm Ly , your dedicated Success Mentor on a mission to propel you to the top 1% in your field. Whether you're a visionary business owner, a driven professional, or a charismatic leader, I specialize in guiding individuals like you to reach unmatched levels of success.


         </p>
            <p className="text-center lg:text-start">
            With The MAP METHOD™️, I empower you to unlock your highest potential in your career, business, wealth, and personal growth. Imagine transforming any ordinary 1-hour slot into a million-dollar opportunity through Subconscious Rewiring, all while embracing the power of the golden hour.
            ‍
            </p>

            <p className="text-center lg:text-start">
            Together, we'll rewrite the script of success. Join me on this exhilarating journey, and let's sculpt your path to extraordinary achievement.
            </p>
          </div>
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-[#0B6544] hover:bg-green-900 transition-all  rounded-full p-3 md:ml-[100px] mt-10 text-white w-fit text-[18px] md:text-[20px] font-medium"
        >
          Book Your Success Block Diagnosis Call
        </button>
      </div>
      <div className="hidden lg:relative mt-10 md:mt-[100px] md:ml-[150px] lg:flex flex-col items-center">
        <img
          className="absolute md:mt-[120px] h-[20px] mr-[80px]"
          src={smallstar}
          alt="Small Star"
        />
        <img className="mt-[100px] h-[150px] w-[150px]" src={star} alt="Star" />
        <img
          className="absolute md:ml-[120px] md:top-0 h-[20px] md:mt-[200px]"
          src={smallstar}
          alt="Small Star"
        />
      </div>
      <img className="lg:absolute lg:mt-[180px] lg:ml-[900px]" src={coach} />
    </div>
  );
};

export default Meet;
