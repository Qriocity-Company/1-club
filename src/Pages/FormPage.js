import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const FormPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:gap-[100px] items-center h-auto lg:h-[100vh] w-[100vw] p-4 bg-gradient-to-br from-[#a1e5cc]  to-white ">
        <div className="container flex flex-col w-full lg:w-[50%] mt-10 lg:mt-0">
          <h1 className="text-[#0A6544] font-bold text-[30px] lg:text-[40px] w-full lg:w-[700px] text-center lg:text-left font-serif">
            Liberate & Thrive: Subconscious Stress Release Meditation Guide
          </h1>

          <h1 className="font-bold  text-[24px] lg:text-[30px] w-full lg:w-[600px] mt-5 text-center lg:text-left font-serif">
            Feeling Overwhelmed by Stress? Ready to Break Free from Subconscious
            Patterns Holding You Back?
          </h1>
          <div className="flex flex-col justify-center lg:mt-0 mt-8">
            <div className="flex lg:mt-10 items-center gap-2 font-bold text-[16px] lg:text-[18px]">
              <IoMdCheckmarkCircleOutline
                size={30}
                color="#0A6544"
                className="flex-shrink-0" // Prevents the icon from shrinking
              />
              <span className="flex-grow">
                {" "}
                {/* Ensures the text takes up remaining space */}
                Release built-up stress and tension in just a few minutes a day
              </span>
            </div>

            <div className="flex mt-5 lg:mt-10 items-center gap-2 font-bold text-[16px] lg:text-[18px]">
              <IoMdCheckmarkCircleOutline
                size={30}
                color="#0A6544"
                className="flex-shrink-0"
              />
              <span className="flex-grow">
                Shift into a state of calm, focus, and emotional resilience
              </span>
            </div>

            <div className="flex mt-5 lg:mt-10 items-center gap-2 font-bold text-[16px] lg:text-[18px]">
              <IoMdCheckmarkCircleOutline
                size={30}
                color="#0A6544"
                className="flex-shrink-0"
              />
              <span className="flex-grow">
                Create more peace, balance, and ease in your everyday life
              </span>
            </div>

            <div className="flex mt-5 lg:mt-10 items-center gap-2 font-bold text-[16px] lg:text-[18px]">
              <IoMdCheckmarkCircleOutline
                size={30}
                color="#0A6544"
                className="flex-shrink-0"
              />
              <span className="flex-grow">
                Become aware of the hidden subconscious blocks that are quietly
                holding you back
              </span>
            </div>
          </div>
        </div>

        <div className="form bg-slate-100 opacity-90 shadow-lg h-auto lg:h-[600px] rounded-lg w-full lg:w-[450px] flex flex-col items-center p-4 mt-10 lg:mt-0 font-serif">
          <h1 className="font-bold text-[25px] text-center lg:text-left">
            Feeling Overwhelmed by Stress?
          </h1>

          <h1 className="font-semibold text-[18px] lg:text-[20px] mt-5 lg:mt-10 text-center">
            Fill in your details below to receive your FREE meditation guide
            now!
          </h1>

          <div className="flex flex-col justify-center items-center gap-8 mt-5 lg:mt-10 w-full">
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="Name"
            />
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="Email"
            />
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="Phone Number"
            />
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="What You Do?"
            />
          </div>

          <button className="bg-[#0A6544] p-2 hover:opacity-70 cursor-pointer rounded-lg w-[300px] text-white mt-[30px] text-[20px]">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default FormPage;
