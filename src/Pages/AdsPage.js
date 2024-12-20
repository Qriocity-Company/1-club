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
      content: "I can’t seem to stop working—am I heading towards burnout?",
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
    { icon: covid, content: "COVID 19 Concerns" },
    { icon: anxiety, content: "Anxiety" },
    { icon: depression, content: "Depression" },
    { icon: focus, content: "Lack of Focus" },
    { icon: procastination, content: "Procastination" },
    { icon: trauma, content: "Childhood Trauma" },
    { icon: relationship, content: "Relationships" },
    { icon: decision, content: "Decision Making" },
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
      check2: "Immediate results can be seen within 1 session",
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
      check2: "No need to share the incident and re-live the painful traumas",
    },
    {
      name: "Need to remember the details or trauma",
      check1: "Yes",
      check2: "Both known and unknown trauma can be treated fully",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hidden images on mobile */}
      <img src={leaf} className="absolute top-[600px] hidden lg:block" />
      <img
        src={leaf3}
        className="absolute top-[350px] right-0 hidden lg:block"
      />

      <div className="flex flex-col mt-10 lg:px-0 p-2">
        {/* Logo */}
        <div className="flex justify-between">
          <img
            className="ml-4 md:ml-[50px] w-[80px] h-[70px] md:w-[126px] md:h-[110.83px]"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Heading */}
        <div className="heading font-bold text-[32px] md:text-[64px] mt-5 text-[#302825] font-serif flex flex-col justify-center items-center text-center p-4">
          <h1>
            Remove all your stress & money blocks in just one MAP Session.
          </h1>
        </div>

        <div className="flex justify-center items-center mt-5">
          <h1 className="font-bold text-[24px] md:text-[30px]">
            100% Backed by Science
          </h1>
        </div>

        {/* Main Message Box */}
        <div className="mt-10 bg-[#DBE1DA] w-full md:w-[842px] flex justify-center items-center place-self-center p-4 rounded-[11.39px] border-b-4 border-black">
          <p className="text-[16px] md:text-[21.03px] text-center">
            Don’t let stress, anxiety, or money blocks hold you back any longer.
            Book your free MAP-based success block diagnosis call now and take
            the first step towards achieving your goals with Lydia Binil.
          </p>
        </div>

        {/* CTA Button */}
        <div className="button place-self-center flex flex-col justify-center items-center gap-4">
          <button className="bg-[#0B6544] w-[300px] md:w-[409px] h-[54px] mt-10 rounded-[26.9px] text-white text-[17px] md:text-[24px]">
            Take Control of Your Life Now
          </button>
          <span className="text-[18px] md:text-[24px] font-semibold">
            Only 10% Seats left
          </span>
        </div>

        {/* Thoughts Section */}
        <div className="place-self-center mt-[40px] md:mt-[80px] flex flex-col gap-5 mb-10">
          <h1 className="text-[28px] md:text-[48px] font-bold text-center">
            Are you constantly having thoughts like?
          </h1>
          <div className="flex flex-col justify-center items-center gap-5 md:gap-10 mt-[40px] md:mt-[60px] p-2">
            {thoughts.map((item, index) => (
              <div
                key={index}
                className="bg-[#DAE1D9] w-full md:w-[848px] flex flex-col md:flex-row items-center rounded-[8.17px] border-2 border-[#B4B4B4] p-4 md:p-0"
              >
                <div className="bg-[#0A6544] h-[50px] w-[50px] md:w-[49.99px] rounded-full font-bold text-center text-white flex justify-center items-center -ml-5 text-[40px]">
                  ?
                </div>
                <div className="text-center font-serif place-self-center md:ml-8 text-[18px] md:text-[22px] text-[#0E0E0E]">
                  {item.content}
                </div>
              </div>
            ))}
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
              For all your mental health concerns
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

        {/* Call to Action Section */}
        <div className="p-4 bg-[#DAE1D9] w-full relative">
          <img src={leaf} className="bottom-0 absolute top-[1130px]" />
          <h1 className="lg:text-[48px] text-[24px] font-bold lg:mt-[100px] mt-6 text-center">
            Who can book this success block diagnosis call?
          </h1>

          <div className="flex justify-center items-center flex-col mt-[50px] lg:mt-[100px] gap-10">
            {/* Card 1 */}
            <div className="lg:w-[1013px] w-full  bg-white h-auto lg:h-[201px] rounded-[11px] relative p-4">
              <div className="bg-black rounded-full h-[40px] w-[40px] absolute right-4 top-[-20px] text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-lg">
                  1
                </div>
              </div>
              <button className="bg-[#0B6544] text-white rounded-[26.9px] w-full lg:w-[564px] lg:font-bold font-semibold h-[54px] mb-4 mt-5 px-4">
                Corporate Leaders, Managers, HR Experts & Lawyers
              </button>
              <p className="text-black rounded-[26.9px] text-[16px] lg:text-[20px]">
                Help your team and yourself by focusing on mental health. Learn
                the habits of successful people who stay focused and motivated.
                Get ready to improve your clarity, focus, and motivation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="lg:w-[1013px] w-full  bg-white h-auto lg:h-[201px] rounded-[11px] relative p-4">
              <div className="bg-black rounded-full h-[40px] w-[40px] absolute right-4 top-[-20px] text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-lg">
                  2
                </div>
              </div>
              <button className="bg-[#0B6544] text-white lg:font-bold font-semibold rounded-[26.9px] w-full lg:w-[564px] h-[54px] mb-4 mt-5 px-4">
                Entrepreneurs, Consultants, Freelancers & Business Owners
              </button>
              <p className="text-black rounded-[26.9px] text-[16px] lg:text-[20px]">
                Help your team and yourself by focusing on mental health. Learn
                the habits of successful people who stay focused and motivated.
                Get ready to improve your clarity, focus, and motivation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="lg:w-[1013px] w-full bg-white h-auto lg:h-[201px] rounded-[11px] relative p-4">
              <div className="bg-black rounded-full h-[40px] w-[40px] absolute right-4 top-[-20px] text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-lg">
                  3
                </div>
              </div>
              <button className="bg-[#0B6544] text-white lg:font-bold font-semibold rounded-[26.9px] w-full lg:w-[564px] h-[54px] mb-4 mt-5">
                Therapists, Coaches, Doctors & Trainers
              </button>
              <p className="text-black rounded-[26.9px] text-[16px] lg:text-[20px]">
                Use brain science and MAP to improve your own growth and help
                others. Whether you're guiding others or working on yourself,
                this will take you to the next level.
              </p>
            </div>

            {/* Card 4 */}
            <div className="lg:w-[1013px] w-full  bg-white h-auto lg:h-[201px] rounded-[11px] relative p-4">
              <div className="bg-black rounded-full h-[40px] w-[40px] absolute right-4 top-[-20px] text-white">
                <div className="flex justify-center items-center text-center h-full w-full font-bold text-lg">
                  4
                </div>
              </div>
              <button className="bg-[#0B6544] text-white lg:font-bold font-semibold rounded-[26.9px] w-full lg:w-[564px] h-[54px] mb-4 mt-5">
                Parents & Self-Improvement Seekers
              </button>
              <p className="text-black rounded-[26.9px] text-[16px] lg:text-[20px]">
                Become more self-aware and get rid of negative thinking
                patterns. If you’re open to growth and healing, this is your
                chance to explore deeper truths and transform your life.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-[100px]">
          <h1 className="text-center font-bold text-[32px] md:text-[48px]">
            Cost of not addressing your feelings
          </h1>

          <div className="mt-[50px] md:mt-[100px] flex justify-center items-center w-full relative overflow-x-hidden p-4">
            <div className="bg-[#C1E5CA] rounded-full h-[200px] md:h-[379px] w-[200px] md:w-[379px] absolute opacity-20 -right-[150px] md:-right-[200px]"></div>
            <img src={leaf2} className="absolute right-0 hidden lg:block" />
            <div className="bg-green-200 border-2  border-[#37D550] shadow-xl rounded-[20px] md:rounded-[47px] h-auto md:h-[850px] md:w-[750px] flex flex-col justify-evenly items-start p-4 text-[16px] md:text-[18px] w-full">
              {[
                "Keep living with patterns of overthinking",
                "Keep getting triggered & controlled by your thoughts",
                "Keep living with money blocks",
                "Keep struggling with success blocks",
                "Keep settling for less than you deserve",
                "Keep staying stuck in your life",
                "Anxiety, depression, frustration",
                "Life with regrets",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex  border-green-900 border-opacity-35  w-fit justify-start lg:items-start items-center gap-4 mb-4 "
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
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
