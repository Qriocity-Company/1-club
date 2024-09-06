import React from "react";
import coach from "../assets/coachfullpic.png";
import star from "../assets/star.png";
import smallstar from "../assets/smallstar.png";

const Meet = () => {
  const handleButtonClick = () => {
    window.open("https://buy.stripe.com/dR6aGDdfo5qwaCkcMZ", "_blank");
  };
  return (
    <div className="bg-[#000E09] w-full mt-10 flex flex-col md:flex-row p-2">
      <div className="flex flex-col items-center md:items-start">
        <div className="meet flex flex-col justify-center items-center md:items-start md:ml-[100px] mt-[50px] md:mt-[100px]">
          <h1 className="text-[36px] md:text-[60.95px] flex justify-center items-center text-white gap-4 text-center md:text-left">
            Meet <span className="text-[#0A6544]"> Lydia Binil</span>
          </h1>
          <h1 className="text-[24px] md:text-[40px] text-white text-center md:text-left">
            Your Guide to Freedom and Success
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:ml-[100px] mt-[20px] md:mt-[50px] gap-4 md:gap-10 items-center md:items-start">
          <div className="h-[2px] md:h-[550px] md:p-[1px] bg-[#0A6544] w-full md:w-auto"></div>
          <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-8 w-full md:w-[710px] text-white text-[16px] md:text-[20px] p-4 md:p-0">
            <p>
              Imagine a life where you wake up every day feeling free, focused,
              and in flow. This is the life Lydia Binil is passionate about
              helping others achieve. Lydia Binil is a powerhouse in the
              Personal Development Industry with over 8 years of experience. As
              a certified Subconscious Rewiring Practitioner, she has
              transformed the lives of more than 8,000 professionals and
              entrepreneurs, helping them achieve their goals with ease.
            </p>
            <p>
              Starting as a Biotechnologist and earning an MBA in Human
              Behaviour, Lydia blends scientific knowledge and behavioral
              expertise. She is an award-winning Certified MAP Practitioner,
              international speaker, and best-selling author of "Mumpreneur on
              Fire." Lydia’s unique approach combines cutting-edge subconscious
              rewiring techniques with practical strategies, making her guidance
              both powerful and relatable. Her personal triumph over childhood
              trauma fuels her mission to help 1 million people live lives of
              freedom and flow.
            </p>

            <p>
              Join Lydia on a transformative journey to break free from
              limitations and step into a life of abundance and fulfillment.
              Discover the extraordinary power of subconscious rewiring and
              unlock your highest potential with Lydia Binil.
            </p>
          </div>
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-[#0B6544] rounded-full p-4 md:ml-[100px] mt-10 text-white w-fit text-[18px] md:text-[24px] font-medium"
        >
          Book your spot at 4.99$!
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
      <img className="lg:absolute lg:mt-[220px] lg:ml-[900px]" src={coach} />
    </div>
  );
};

export default Meet;
