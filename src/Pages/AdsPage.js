import React from "react";
import logo from "../assets/logo.png";
import covid from "../assets/covid.png";
import anxiety from "../assets/anxiety.png";
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
const AdsPage = () => {
  const thoughts = [
    {
      content:
        "Why aren’t my efforts leading to success? What am I doing wrong?",
    },
    {
      content: " I can’t seem to stop working—am I heading towards burnout?",
    },
    {
      content:
        "Will my business survive this financial crisis? What if I lose everything?",
    },
    {
      content:
        "How do I balance growing my business and spending time with my family?",
    },
    {
      content: "Am I making enough money to support my family long-term?",
    },
    {
      content:
        "Will I meet the company’s expectations? What if I fail my team?",
    },
    {
      content: "How can I manage everyone’s expectations while staying calm?",
    },
    {
      content: "Why isn’t my team performing? Am I not a good leader?",
    },
  ];

  const concerns = [
    {
      icon: covid,
      content: "COVID 19 Concerns",
    },
    {
      icon: anxiety,
      content: "Anxiety",
    },
    {
      icon: depression,
      content: "Depression",
    },
    {
      icon: focus,
      content: "Lack of Focus",
    },
    {
      icon: procastination,
      content: "Procastination",
    },
    {
      icon: trauma,
      content: "Childhood Trauma",
    },
    {
      icon: relationship,
      content: "Relationships",
    },
    {
      icon: decision,
      content: "Decision Making",
    },
  ];
  const data2 = [
    {
      name: "Method",
      check1:
        "An effective method that’s still outdated - Talk Therapy, NLP, Hypnotherapy, Family Constellations, Ho’oponopono,",
      check2: "MAP - 45+ years of research",
    },
    {
      name: "Approach",
      check1: "No Scientific approach",
      check2: "100% Backed by Science",
    },
    {
      name: "Plagiarism",
      check1: "Github Codes",
      check2: "0% Plagiarized Code",
    },
    {
      name: "Experience",
      check1: "1-2 years of Experience",
      check2: "5+ Years of Experience",
    },
    {
      name: "Results",
      check1: "2-3 months approach",
      check2: "Immediate results can be seen within 1 session ",
    },
    {
      name: "Charges",
      check1: "2999/hr",
      check2: "Free",
    },
    {
      name: "Need to share ",
      check1:
        "You need to share, (use the MAP resource page PDF to get info on this comparison)",
      check2: "No need to share the incident and re-live the painful traums",
    },
    {
      name: "Need to remember the details or trauma",
      check1: "Yes",
      check2: "Both known and unknown trauma can be treated fully ",
    },
  ];
  return (
    <div className="min-h-screen relative">
      <img src={leaf} className="absolute top-[600px]" />
      <img src={leaf3} className="absolute top-[350px] right-0" />

      <div className="flex flex-col mt-10">
        <div className="flex justify-between">
          <img className="ml-[50px] w-[126px] h-[110.83px]" src={logo} />
        </div>

        <div className="heading font-bold text-[64px] mt-5 text-[#302825] font-serif flex flex-col justify-center items-center">
          <h1 className="">Remove all your stress & money</h1>
          <h1>blocks in just one MAP Session.</h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <h1 className="font-bold text-[30px]">100% Backed by Science </h1>
        </div>

        <div className="mt-10 bg-[#DBE1DA] w-[842px] h-[118.31] flex justify-center items-center place-self-center p-4 rounded-[11.39px] border-b-4 border-black">
          <p className="text-[21.03px] text-center ">
            Don’t let stress, anxiety, or money blocks hold you back any longer.
            Book your free MAP-based success block diagnosis call now and take
            the first step towards achieving your goals with Lydia Binil.{" "}
          </p>
        </div>

        <div className="button place-self-center flex flex-col justify-center items-center gap-4">
          <button className="bg-[#0B6544] w-[409px] h-[54px] mt-10 rounded-[26.9px] text-white text-[24px]">
            Take Control of Your Life Now
          </button>
          <span className="text-[24px] font-semibold">Only 10% Seats left</span>
        </div>

        <div className="place-self-center mt-[80px] flex flex-col gap-5 mb-10">
          <h1 className="text-[48px] font-bold ">
            Are you constantly having thoughts like?
          </h1>
          <div className="flex flex-col justify-center items-center gap-10 ">
            {thoughts?.map((item) => {
              return (
                <div className="bg-[#DAE1D9] w-[848px] h-[50px] flex rounded-[8.17px] border-2 border-[#B4B4B4] ">
                  <div className=" bg-[#0A6544] h-[50px] w-[49.99px] rounded-full  font-bold text-center text-white flex justify-center items-center -ml-5 text-[40px]">
                    ?
                  </div>
                  <div className="text-center font-serif place-self-center ml-8 text-[22px] text-[#0E0E0E]">
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 bg-[#0A6544] h-[750px]  relative p-2 overflow-hidden">
          <img src={leaf4} className="absolute right-0 top-[100px]" />
          <img src={leaf5} className="absolute left-0 top-[550px]" />
          <div className="flex justify-center items-center">
            <h1 className="text-[48px] font-bold text-white mt-[100px]">
              For all your mental health concerns
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-x-0 gap-y-[100px] justify-items-stretch mt-[100px]">
            {concerns.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col text-white justify-center items-center gap-2"
                >
                  <img src={item.icon} alt={item.content} />

                  <h1>{item.content}</h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" p-4 bg-[#DAE1D9] w-full relative">
          <img src={leaf} className="bottom-0 absolute top-[1130px]" />
          <h1 className="text-[48px] font-bold mt-[100px] text-center">
            Who can book this success block diagnosis call ?
          </h1>

          <div className="flex justify-center items-center flex-col mt-[100px] gap-10">
            <div className="w-[1013px] bg-white h-[201px] rounded-[11px] relative">
              <div className="bg-black rounded-full h-[49.71px] w-[49.71px] absolute right-0 -mt-[20px] r text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-xl">
                  1
                </div>
              </div>
              <button className="bg-[#0B6544] text-white rounded-[26.9px] w-[564px] font-bold h-[54px] absolute ml-5 mt-6">
                Corporate Leaders, Managers, HR Experts & Lawyers
              </button>
              <p className=" text-black rounded-[26.9px] w-[895px] text-[20px] h-[54px] absolute ml-5 mt-[100px] ">
                Help your team and yourself by focusing on mental health. Learn
                the habits of successful people who stay focused and motivated.
                Get ready to improve your clarity, focus, and motivation.
              </p>
            </div>
            <div className="w-[1013px] bg-white h-[201px] rounded-[11px] relative">
              <div className="bg-black rounded-full h-[49.71px] w-[49.71px] absolute right-0 -mt-[20px] r text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-xl">
                  2
                </div>
              </div>
              <button className="bg-[#0B6544] text-white font-bold rounded-[26.9px] w-[564px] h-[54px] absolute ml-5 mt-6">
                Entrepreneurs, Consultants, Freelancers & Business Owners
              </button>
              <p className=" text-black rounded-[26.9px] w-[895px] text-[20px] h-[54px] absolute ml-5 mt-[100px] ">
                Help your team and yourself by focusing on mental health. Learn
                the habits of successful people who stay focused and motivated.
                Get ready to improve your clarity, focus, and motivation.
              </p>
            </div>
            <div className="w-[1013px] bg-white h-[201px] rounded-[11px] relative">
              <div className="bg-black rounded-full h-[49.71px] w-[49.71px] absolute right-0 -mt-[20px] r text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-xl">
                  3
                </div>
              </div>
              <button className="bg-[#0B6544] text-white font-bold rounded-[26.9px] w-[564px] h-[54px] absolute ml-5 mt-6">
                Therapists, Coaches, Doctors & Trainers
              </button>
              <p className=" text-black rounded-[26.9px] w-[895px] text-[20px] h-[54px] absolute ml-5 mt-[100px] ">
                Use brain science and MAP to improve your own growth and help
                others. Whether you're guiding others or working on yourself,
                this will take you to the next level.
              </p>
            </div>
            <div className="w-[1013px] bg-white h-[201px] rounded-[11px] relative">
              <div className="bg-black rounded-full h-[49.71px] w-[49.71px] absolute right-0 -mt-[20px] r text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-xl">
                  4
                </div>
              </div>
              <button className="bg-[#0B6544] text-white font-bold rounded-[26.9px] w-[564px] h-[54px] absolute ml-5 mt-6">
                Parents & Self-Improvement Seekers
              </button>
              <p className=" text-black rounded-[26.9px] w-[895px] text-[20px] h-[54px] absolute ml-5 mt-[100px] ">
                Become more self-aware and get rid of negative thinking
                patterns. If you’re open to growth and healing, this is your
                chance to explore deeper truths and transform your life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <h1 className="text-center font-bold text-[48px]">
            Cost of not addressing your feelings
          </h1>

          <div className="mt-[100px] flex justify-center items-center w-full relative overflow-x-hidden">
            <div className="bg-[#C1E5CA] rounded-full h-[379px] w-[379px] absolute opacity-20 -right-[200px] ml-[500px]"></div>
            <img src={leaf2} className="absolute right-0" />
            <div className=" bg-white border-2 border-[#37D550] shadow-xl rounded-[47px] h-[850px] w-[850px] flex flex-col justify-evenly items-start p-4 text-[18px]">
              <div className="flex justify-center items-start gap-4 ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Keep living with patterns of overthinking, self-doubt, Fear,
                  and worry where you cannot be more creative, peaceful, and
                  confident
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4  ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Keep getting triggered & controlled by your thoughts, emotions
                  & feeling
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Keep living with money blocks, never breaking free from the
                  beliefs that hold you back from financial freedom and
                  abundance
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4 ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Keep struggling with success blocks, unable to unlock your
                  full potential, and always feeling like you’re falling short
                  of your goals.
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4  ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Keep settling for less than you deserve, allowing financial
                  stress and success anxiety to control your life, your choices,
                  and your happiness.
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4  ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Keep staying stuck in your life with blockages that are
                  holding you back from creating a life you desire and deserve
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4  ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Anxiety, depression, frustration, lack of motivation & feeling
                  of looser
                </h1>
              </div>
              <div className="flex justify-center items-start gap-4  ">
                <img className="h-[23px] w-[23px]" src={icon} />
                <h1 className="w-[763px]">
                  Life with regrets for not taking action to change your life
                  when needed most
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-[100px] mb-10 p-2">
            <h1 className="text-[48px] font-bold">Why work with me? </h1>

            <div className="lg:w-[900px]  w-auto mx-auto  bg-[#0F0F0F] rounded-[27px] overflow-hidden mt-10">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr>
                    <th className="text-center p-4 text-white lg:text-2xl text-xl border-b border-gray-700 border-r"></th>

                    <th className=" text-center p-4 text-white lg:text-2xl text-xl border-b border-r border-gray-700">
                      Other Coaches
                    </th>
                    <th className=" text-center p-4 text-white  lg:text-2xl text-xl border-b border-gray-700 bg-[#0A6544]">
                      Lydia Binil
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white ">
                  {data2.map((row, rowIndex) => (
                    <tr>
                      <td className="p-4 text-left border-t border-r border-gray-700 font-bold text-[20px]">
                        {row.name}
                      </td>
                      <td className="p-4 text-start border-t border-r border-gray-700 ">
                        {row.check1}
                      </td>
                      <td className="p-4 text-start border-t  border-gray-700  bg-[#0A6544]">
                        {row.check2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
