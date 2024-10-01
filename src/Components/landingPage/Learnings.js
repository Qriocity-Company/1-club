import React, { useEffect } from "react";
import effective from "../../assets/effective.png";
import sub from "../../assets/sub.png";
import stress from "../../assets/stress.png";
import mindfull from "../../assets/mindfull.png";
import building from "../../assets/building.png";
import overcome from "../../assets/overcome.png";

const Learnings = () => {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center p-4">
      <h1 className="text-[40px] font-bold text-center px-4">
        What will you Learn in 1 hour?
      </h1>

      <div className="flex flex-col justify-center items-center mt-[50px] mb-20 gap-10">
        <div className="bg-[#DAE1D9] h-auto lg:h-[253px] w-full lg:w-[1000px] rounded-lg flex flex-col lg:flex-row gap-10 p-5 lg:p-0">
          <img className="rounded-lg w-full lg:w-auto" src={effective} />
          <div className="place-self-center flex flex-col gap-5">
            <button className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] lg:text-[24px] lg:font-medium w-full lg:w-fit">
              Effective Meditation Techniques
            </button>
            <p className="text-[16px] lg:text-[20px] w-full lg:w-[506px] text-center lg:text-start">
              Easy steps to recover from burnout and keep your passion alive.
            </p>
          </div>
        </div>

        <div className="bg-[#DAE1D9] h-auto lg:h-[253px] w-full lg:w-[1000px] rounded-lg flex flex-col lg:flex-row gap-10 p-5 lg:p-0">
          <img className="rounded-lg w-full lg:w-auto" src={sub} />
          <div className="place-self-center flex flex-col gap-5">
            <button className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] lg:text-[24px] lg:font-medium w-full lg:w-fit">
              Subconscious Rewiring
            </button>
            <p className="text-[16px] lg:text-[20px] w-full lg:w-[506px] text-center lg:text-start">
              Discover how to identify and reprogram limiting beliefs and
              negative thought patterns that hold you back.
            </p>
          </div>
        </div>

        <div className="bg-[#DAE1D9] h-auto lg:h-[253px] w-full lg:w-[1000px] rounded-lg flex flex-col lg:flex-row gap-10 p-5 lg:p-0">
          <img className="rounded-lg w-full lg:w-auto" src={stress} />
          <div className="place-self-center flex flex-col gap-5">
            <button className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] lg:text-[24px] lg:font-medium w-full lg:w-fit">
              Stress and Anxiety Management
            </button>
            <p className="text-[16px] lg:text-[20px] w-full lg:w-[506px] text-center lg:text-start">
              Gain strategies to effectively manage and overcome stress,
              anxiety, overwhelm, overthinking, and burnout.
            </p>
          </div>
        </div>

        <div className="bg-[#DAE1D9] h-auto lg:h-[253px] w-full lg:w-[1000px] rounded-lg flex flex-col lg:flex-row gap-10 p-5 lg:p-0">
          <img className="rounded-lg w-full lg:w-auto" src={mindfull} />
          <div className="place-self-center flex flex-col gap-5">
            <button className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] lg:text-[24px] lg:font-medium w-full lg:w-fit">
              Mindfulness Practices
            </button>
            <p className="text-[16px] lg:text-[20px] w-full lg:w-[506px] text-center lg:text-start">
              Integrate mindfulness into your daily routine to enhance focus,
              clarity, and emotional well-being.
            </p>
          </div>
        </div>

        <div className="bg-[#DAE1D9] h-auto lg:h-[253px] w-full lg:w-[1000px] rounded-lg flex flex-col lg:flex-row gap-10 p-5 lg:p-0">
          <img className="rounded-lg w-full lg:w-auto" src={overcome} />
          <div className="place-self-center flex flex-col gap-5">
            <button className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] lg:text-[24px] lg:font-medium w-full lg:w-fit">
              Overcoming Overwhelm
            </button>
            <p className="text-[16px] lg:text-[20px] w-full lg:w-[506px] text-center lg:text-start">
              Learn practical steps to reduce feelings of overwhelm and handle
              multiple responsibilities with ease.
            </p>
          </div>
        </div>

        <div className="bg-[#DAE1D9] h-auto lg:h-[253px] w-full lg:w-[1000px] rounded-lg flex flex-col lg:flex-row gap-10 p-5 lg:p-0">
          <img className="rounded-lg w-full lg:w-auto" src={building} />
          <div className="place-self-center flex flex-col gap-5">
            <button className="bg-[#0B6544] rounded-full px-6 py-4 text-white text-[18px] lg:text-[24px] lg:font-medium w-full lg:w-fit">
              Worry Less
            </button>
            <p className="text-[16px] lg:text-[20px] w-full lg:w-[506px] text-center lg:text-start">
              How to stop worrying and focus on your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnings;
