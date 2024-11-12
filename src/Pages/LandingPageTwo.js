import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Introduction from "../Components/landingPage/Introduction";
import Meditation from "../Components/landingPage/Meditation";
import Learnings from "../Components/landingPage/Learnings";
import Bonuses from "../Components/landingPage/Bonuses";
import Meet from "../Components/landingPage/Meet";
import FAQ from "../Components/landingPage/FAQ";
import Testimonials from "../Components/landingPage/Testimonials";
import Footer from "../Components/landingPage/Footer";
import IntroductionTwo from "../Components/landingPage/IntroductionTwo";
import Numbers from "../Components/landingPage/Numbers";
import SuccessMethod from "../Components/landingPage/SuccessMethod";
import MindReading from "../Components/landingPage/MindReading";
import MindReadingTwo from "../Components/landingPage/MindReadingTwo";
import covid from "../assets/covid.png";
import anxiety from "../assets/anxiety.png";
import stress from "../assets/stress.png"
import depression from "../assets/depression.png";
import focus from "../assets/focus.png";
import procastination from "../assets/procastination.png";
import trauma from "../assets/childhood.png";
import relationship from "../assets/relation.png";
import decision from "../assets/decision.png";
import leaf from "../assets/leaaf.png";
import leaf2 from "../assets/leaf2.png";
import leaf3 from "../assets/leaf3.png";
import leaf4 from "../assets/leaf4.png";
import leaf5 from "../assets/leaf5.png";
import icon from "../assets/icon.png";
import arrowright from "../assets/arrowright.png"




import ImageCarousel from "../Components/landingPage/ImageCarousel";

const LandingPageTwo = () => {

  const handleButtonClick = () => {
    // if (window.fbq) {
    //   window.fbq("track", "BookAppointment", {
    //     content_name: "Google Calendar Booking",
    //     content_category: "Appointment",
    //   });
    // }

    window.open("https://calendar.app.google/QTLRXDiZRHReZVa86", "_blank");
  };
  

  

  const thoughts = [
    {
      content:
        "Do you feel like your efforts aren’t leading to success?",
    },
    {
      content: "Are you wondering what you might be doing wrong?",
    },
    {
      content: "Do you think your business can survive this financial crisis? Are you afraid of losing everything?",
    },
    {
      content:
        "Are you struggling to balance growing your business and spending time with your family?",
    },
    {
      content:
        "Do you question if you’re making enough money to support your family long-term?",
    },
    {
      content: "Do you wonder why your team isn’t performing as expected? Do you feel like you’re not being an effective leader?",
    }
  ];

  const data2 = [
    {
      name: "Method",
      check1:
        "An effective method that’s still outdated - Talk Therapy, NLP, Hypnotherapy, Family Constellations, Ho’oponopono, etc.",
      check2: "MAP - 45+ years of research",
    },
    {
      name: "Approach",
      check1: "Normal approach",
      check2: "Holistic 360° Approach",
    },
    {
      name: "Experience",
      check1: "Regular Experience",
      check2: "5+ Years of Experience",
    },
    {
      name: "Results",
      check1: "It may take a long time",
      check2: "Instant Results with Lasting Impact",
    },
    {
      name: "Need to share ",
      check1:
        "Might have to share and re-live the Trauma",
      check2: "No need to share or even Remember the details",
    },
    {
      name: "Need to remember the details or trauma",
      check1: "Yes",
      check2: "Both known and unknown trauma can be treated fully",
    },
  ];

  const data3 = [
    {
      
      check1:
        "Constant financial struggles, limited mindset around wealth, lack of financial confidence",
      check2: "Cultivate an abundance mindset, rewire limiting beliefs, attract prosperity with strategic financial habits",
    },
    {
      
      check1: "Engaging in self-destructive behaviors, procrastination, undermining own success",
      check2: "Break free from self-sabotage through self-awareness, positive habits, and intentional actions aligned with goals",
    },
    {
      
      check1: "Despite recognizing your worth, you struggle to negotiate and often settle for less than you deserve in your career.",
      check2: "Assertively pursue career goals, negotiating for what you deserve",
    },
    {
      
      check1: "Your emotions and thoughts seem to dictate your actions, acting as the unspoken bosses of your life.",
      check2: "‍Effectively clears away negative memories, emotions, and experiences that could harm current and future business success.",
    }
    
  ];

  const concerns = [
    { icon: covid, content: "Stress" },
    { icon: anxiety, content: "Anxiety" },
    { icon: depression, content: "Depression" },
    { icon: focus, content: "Lack of Focus" },
    { icon: procastination, content: "Procastination" },
    { icon: trauma, content: "Childhood Trauma" },
    { icon: relationship, content: "Relationships" },
    { icon: decision, content: "Decision Making" },
  ];

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Stress and Anxiety Workshop",
        content_category: "Workshop",
        value: 5.0,
        currency: "USD",
      });
    }
  }, []);
  return (
    <>
      <div className="flex flex-col mt-10">
        
        <IntroductionTwo/> 
        <Numbers/>
        <SuccessMethod/>


        <div className="place-self-center bg-[#000E09] w-full text-white flex flex-col gap-5 mb-10">
          <h1 className="text-[28px] mt-10 md:text-[48px] font-serif text-center">
            But First...
          </h1>
          <h1 className="text-[28px] md:text-[48px] font-serif text-center">
          I want to Ask You a Question
          </h1>

          <div className="flex flex-col justify-center items-center gap-5 md:gap-10 mb-10 p-2">

            {thoughts.map((item, index) => (
              <div
                key={index}
                className="bg-[#052C1E] shadow-lg mx-5 shadow-green-800 md:w-[848px] flex flex-col md:flex-row items-center rounded-[8.17px] border-2 border-[#31C04A] text-white p-4 md:p-0"
              >
                <div>
                  <p className="lg:text-5xl text-3xl m-3 font-bold lg:m-10 ">
                    ?
                  </p>
                </div>
                
                <div className="text-center lg:text-left pr-5 font-serif place-self-center md:ml-8 text-[18px] md:text-[22px]  text-white">
                  {item.content}
                </div>
              </div>
            ))}

<button onClick={handleButtonClick}
            
            className="bg-[#0B6544] my-5 hover:bg-green-900 transition-all  duration-300 rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[24px] lg:text-[32px] font-medium"
          >
            REMOVE THESE THOUGHTS FROM YOU
          </button>
          
          </div>
        </div>

        <MindReading/>
        <MindReadingTwo/>
        <div className="w-full text-center text-5xl mt-32 pt-10 px-5 bg-[#E4F3E8]">
          <div className="flex flex-col items-center">
            <p className="font-serif">HOW DO YOU DO THAT ?</p>
            <p className="text-2xl font-serif mt-10">All you need to do is to REWIRE your subconscious mind using the</p>
            <button className="text-3xl cursor-default text-white p-5 font-bold mb-10 rounded-xl font-sans transition-all mt-10 bg-green-800 w-fit text-center">
              Holistic Power of<br />THE MAP Method ™️
            </button>
          </div>

          <h1 className="font-serif text-3xl">And that’s why I am inviting you</h1>
          
          <button onClick={handleButtonClick}
            
            className="bg-[#0B6544] mb-5 rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[24px] lg:text-[32px] mt-5 font-medium"
          >
            BOOK YOUR MAP SESSION NOW
          </button>
          
          

        </div>


          {/* OLD VS NEW SELF */}
            {/* Final Section */}
          <div className="flex flex-col justify-center items-center mt-[50px] md:mt-[100px] mb-10 p-2">
            <h1 className="text-[28px] md:text-[60px] font-serif text-center">
            What will change after you 
            </h1>
            <h1 className="text-[28px] md:text-[60px] font-serif text-center">
            attend the Diagnosis Call?
            </h1>
            
            <h1 className="text-[28px] mt-5 md:text-[28px] font-serif text-center">
            You will go from...
            </h1>
            

            <div className="lg:w-[1100px] w-full bg-[#0F0F0F] rounded-[27px] overflow-hidden mt-10">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr>
                     
                      <th className="text-center p-2 md:p-4 text-white lg:text-2xl text-lg border-b border-r border-white">
                        Old self
                      </th>
                      <th className="text-center p-2 md:p-4 text-white lg:text-2xl text-lg border-b border-white bg-[#0A6544]">
                        New Self
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {data3.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        
                        <td className="p-2 md:p-4 text-left border-t border-r border-white text-[14px] lg:text-[16px]">
                          {row.check1}
                        </td>
                        <td className="p-2 md:p-4 text-left border-t border-white bg-[#0A6544] text-[14px] lg:text-[16px]">
                          {row.check2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            </div>



            {/* WHO CAN BOOK Section */}

            <div className="w-full px-10 text-3xl lg:text-5xl font-serif text-center my-20">
            Who can book this success block diagnosis call ?
                <div className="flex gap-10 justify-center mt-10 flex-col lg:flex-row">
                  <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Entrepreneurs </div>
                  <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Coaches </div>
                  <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Consultants </div>
                  <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> FreeLancers </div>
                </div>
                <div className="flex gap-10 justify-center mt-10 flex-col lg:flex-row">
                <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Business Owners </div>
                <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Doctors </div>
                
                <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Successful Professionals</div>
                <div className="bg-green-400 hover:bg-green-600 transition-all duration-300 text-3xl p-4 shadow-md shadow-black rounded-xl"> Corporate Leaders </div>
              
                </div>
            </div>


            {/* Concerns Section */}
        <div className="mt-10 bg-[#0A6544] h-auto md:h-[750px] relative p-2 overflow-hidden">
          <img
            src={leaf4}
            className="absolute right-0 top-[100px] hidden lg:block"
          />
          <img
            src={leaf5}
            className="absolute left-0 top-[550px] hidden lg:block"
          />
          <div className="flex justify-center items-center">
            <h1 className="text-[28px] md:text-[48px] font-bold text-white mt-[40px] md:mt-[100px] text-center">
            Give yourself a fair chance to attend your
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-0 gap-y-[50px] md:gap-y-[100px] justify-items-stretch mt-[40px] md:mt-[100px]">
            {concerns.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-white justify-center items-center gap-2"
              >
                <img
                  src={item.icon}
                  alt={item.content}
                  className="w-[50px] md:w-auto"
                />
                <h1 className="text-[16px] md:text-auto">{item.content}</h1>
              </div>
            ))}
          </div>
        </div>


        <div className=" mt-[100px]">
          <h1 className="text-center font-serif text-[32px] md:text-[48px]">
          I want you know the cost of 
          </h1>
          <h1 className="text-center font-serif text-[32px] md:text-[48px]">
          ignoring your feelings
          </h1>
          

          <div className="flex justify-center items-center w-full relative overflow-x-hidden p-4">
            <div className="bg-[#C1E5CA] rounded-full h-[200px] md:h-[379px] w-[200px] md:w-[379px] absolute opacity-20 -right-[150px] md:-right-[200px]"></div>
            <img src={leaf2} className="absolute right-0 hidden lg:block" />
            <div className="bg-green-200 border-2  border-[#37D550] shadow-xl rounded-[20px] md:rounded-[47px] h-auto md:h-[850px] md:w-[750px] flex flex-col justify-evenly items-start p-4 text-[16px] md:text-[18px] w-full">
              {[
                "Keep living with patterns of overthinking, self-doubt, Fear, and worry where you cannot be more creative, peaceful, and confident",
                "Keep getting triggered & controlled by your thoughts, emotions & feeling",
                "Keep living with money blocks, never breaking free from the beliefs that hold you back from financial freedom and abundance.",
                "Keep struggling with success blocks, unable to unlock your full potential, and always feeling like you’re falling short of your goals.",
                "Keep settling for less than you deserve, allowing financial stress and success anxiety to control your life, your choices, and your happiness.",
                "Keep staying stuck in your life with blockages that are holding you back from creating a life you desire and deserve",
                "Anxiety, depression, frustration, lack of motivation & feeling of looser",
                "Life with regrets for not taking action to change your life when needed most",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex  border-green-900 border-opacity-35 w-5/6 justify-start lg:items-start items-center gap-4 mb-4 "
                >
                  
                  <img
                    className="h-[20px] w-[20px] md:h-[23px] md:w-[23px]"
                    src={icon}
                    alt="Icon"
                  />
                  
                  <h1 className="w-full md:w-[763px]">{text}</h1>
                  
                </div>
              ))}
            </div>
          </div>
          </div>


          <Meet/>


          {/* Final Section */}
          <div className="flex flex-col justify-center items-center mt-[50px] md:mt-[100px] mb-10 p-2">
            <h1 className="text-[28px] md:text-[48px] font-bold text-center">
              Why work with me?
            </h1>

            <div className="lg:w-[900px] w-full bg-[#0F0F0F] rounded-[27px] overflow-hidden mt-10">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr>
                      <th className="text-center p-2 md:p-4 text-white lg:text-2xl text-lg border-b border-white border-r"></th>
                      <th className="text-center p-2 md:p-4 text-white lg:text-2xl text-lg border-b border-r border-white">
                        Other Coaches
                      </th>
                      <th className="text-center p-2 md:p-4 text-white lg:text-2xl text-lg border-b border-white bg-[#0A6544]">
                        Lydia Binil
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {data2.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="p-2 md:p-4 text-left border-t border-r border-white font-semibold lg:font-bold text-[16px] md:text-[20px]">
                          {row.name}
                        </td>
                        <td className="p-2 md:p-4 text-left border-t border-r border-white text-[14px] lg:text-[16px]">
                          {row.check1}
                        </td>
                        <td className="p-2 md:p-4 text-left border-t border-white bg-[#0A6544] text-[14px] lg:text-[16px]">
                          {row.check2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            </div>


            {/* HOW IT WORKS */}
            <div className="w-full px-10 text-5xl text-center font-bold">
              How it Works

              <div className="flex justify-center gap-10 my-20 flex-col lg:flex-row">
                <div className="bg-gray-200 p-10 border-green-600 border-2 rounded-xl">
                  <div className="bg-green-500 py-1 px-8 -translate-y-16 rounded-full text-2xl font-thin">Step 1</div>
                  <div className="font-thin text-3xl">Book a 1-1</div>
                  <div className="text-4xl">Success Block</div>
                  <div className="text-4xl">Diagnostic Call</div>
                </div>
                    <div className="items-center justify-center align-middle flex">
                    <img src={arrowright} />
                    </div>

                <div className="bg-gray-200 p-10 border-green-600 border-2 rounded-xl">
                  <div className="bg-green-500 py-1 px-8 -translate-y-16 rounded-full text-2xl font-thin">Step 2</div>
                  <div className="font-thin text-3xl">Attend a</div>
                  <div className="text-4xl">60 mins MAP</div>
                  <div className="text-4xl">session in zoom</div>
                </div>

                <div className=" items-center justify-center align-middle flex">
                    <img src={arrowright} />
                    </div>
                <div className="bg-gray-200 p-10 border-green-600 border-2 rounded-xl">
                  <div className="bg-green-500 py-1 px-8 -translate-y-16 rounded-full text-2xl font-thin">Step 3</div>
                  <div></div>
                  <div className="text-4xl m-auto">Instant Results <br/> with Lasting Impact</div>
                 
                </div>
                
              </div>
              <button onClick={handleButtonClick}
            
            className="bg-[#0B6544] mb-5 rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[24px] lg:text-[32px] font-medium"
          >
            BOOK YOUR CALL NOW
          </button>
            </div>

        
        <Testimonials/>
        <div className="mt-20">
          <h1 className="lg:text-5xl text-3xl text-center font-bold">Our Clients ♥️ love Us</h1>
        <ImageCarousel  />
        </div>
        <div className="text-center">
        <button onClick={handleButtonClick}
            
            className="bg-[#0B6544]  mb-32 rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[24px] lg:text-[32px] font-medium"
          >
            START YOUR JOURNEY NOW
          </button>
          </div>
        
       
      </div>
    </>
  );
};

export default LandingPageTwo;
