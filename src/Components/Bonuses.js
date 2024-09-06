import React from "react";
import gift from "../assets/gift.png";
import audio from "../assets/audio.png";
import acc from "../assets/acc.png";
import healing from "../assets/healing.png";
import meditate from "../assets/meditate.png";

const Bonuses = () => {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center mb-10 px-4">
      <div className="flex  flex-row justify-center items-center md:items-baseline gap-2 md:gap-4">
        <h1 className="text-[24px] md:text-[36px] font-semibold">
          Get Bonuses{" "}
        </h1>
        <h1 className="text-[32px] md:text-[64px] font-bold font-serif">
          Worth
        </h1>
        <h1 className="text-[#0A6544] text-[32px] md:text-[64px] font-bold font-serif">
          $160
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 md:gap-20 mt-10 md:mt-20">
        {/* Bonus Row 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {/* Bonus 1 */}
          <div className="bg-[#DAE1D9] border-[#B3B3B3] border-2 h-auto md:h-[364px] w-full md:w-[420px] rounded-[11px] p-4">
            <div className="bg-black p-2 rounded-full w-[120px] md:w-[156px] h-[39px] -mt-[30px] ml-0 md:ml-8 flex justify-center items-center gap-2 ">
              <img src={gift} className="w-5 md:w-auto" />
              <p className="text-[16px] md:text-[20.1px] text-white">Bonus 1</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-full w-full mt-4 md:mt-0">
              <div className="flex flex-col justify-center lg:items-start items-center gap-4 md:gap-8">
                <div className="flex justify-start items-center gap-4 md:gap-5 w-full">
                  <img src={acc} className="w-10 md:w-auto" />
                  <div className="hidden lg:flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      30-Day Wealth
                    </h1>
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Acceleration Course
                    </h1>
                  </div>

                  <div className="lg:hidden flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      30-Day Wealth Acceleration Course
                    </h1>
                  </div>
                </div>
                <p className="text-[16px] md:text-[18px] w-full md:w-[300px] h-auto md:h-[100px]">
                  A comprehensive program designed to fast-track your financial
                  growth with daily actionable steps and mindset shifts
                </p>
                <div className="bg-[#0A6544] w-[80px] md:w-[104px] h-[40px] md:h-[49px] rounded-[8px] text-white font-bold flex justify-center items-center text-[32px] md:text-[42px]">
                  $30
                </div>
              </div>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-[#DAE1D9] border-[#B3B3B3] border-2 h-auto md:h-[364px] w-full md:w-[420px] rounded-[11px] p-4">
            <div className="bg-black p-2 rounded-full w-[120px] md:w-[156px] h-[39px] -mt-[30px] ml-0 md:ml-8 flex justify-center items-center gap-2">
              <img src={gift} className="w-5 md:w-auto" />
              <p className="text-[16px] md:text-[20.1px] text-white">Bonus 2</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-full w-full mt-4 md:mt-0">
              <div className="flex flex-col justify-center lg:items-start items-center gap-4 md:gap-8">
                <div className="flex justify-start items-center gap-4 md:gap-5 w-full">
                  <img src={healing} className="w-10 md:w-auto" />
                  <div className="hidden lg:flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Deep Healing{" "}
                    </h1>
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Transformation Pack
                    </h1>
                  </div>

                  <div className="lg:hidden flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Deep Healing Transformation Pack
                    </h1>
                  </div>
                </div>
                <p className="text-[16px] md:text-[18px] w-full md:w-[300px] h-auto md:h-[100px]">
                  Includes Inner Child Healing Meditation, Advanced Trauma
                  Release Session, and Emotional Freedom Techniques (EFT) guide.
                </p>
                <div className="bg-[#0A6544] w-[80px] md:w-[104px] h-[40px] md:h-[49px] rounded-[8px] text-white font-bold flex justify-center items-center text-[32px] md:text-[42px]">
                  $49
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Row 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {/* Bonus 3 */}
          <div className="bg-[#DAE1D9] border-[#B3B3B3] border-2 h-auto md:h-[364px] w-full md:w-[420px] rounded-[11px] p-4">
            <div className="bg-black p-2 rounded-full w-[120px] md:w-[156px] h-[39px] -mt-[30px] ml-0 md:ml-8 flex justify-center items-center gap-2">
              <img src={gift} className="w-5 md:w-auto" />
              <p className="text-[16px] md:text-[20.1px] text-white">Bonus 3</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-full w-full mt-4 md:mt-0">
              <div className="flex flex-col justify-center lg:items-start items-center gap-4 md:gap-8">
                <div className="flex justify-start items-center gap-4 md:gap-5 w-full">
                  <img src={meditate} className="w-10 md:w-auto" />
                  <div className="hidden lg:flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Abundance
                    </h1>
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Meditation Tapes
                    </h1>
                  </div>

                  <div className="lg:hidden flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Abundance Meditation Tapes
                    </h1>
                  </div>
                </div>
                <p className="text-[16px] md:text-[18px] w-full md:w-[300px] h-auto md:h-[100px]">
                  A series of guided meditation tapes focused on creating a
                  mindset of abundance and prosperity.
                </p>
                <div className="bg-[#0A6544] w-[80px] md:w-[104px] h-[40px] md:h-[49px] rounded-[8px] text-white font-bold flex justify-center items-center text-[32px] md:text-[42px]">
                  $49
                </div>
              </div>
            </div>
          </div>

          {/* Bonus 4 */}
          <div className="bg-[#DAE1D9] border-[#B3B3B3] border-2 h-auto md:h-[364px] w-full md:w-[420px] rounded-[11px] p-4">
            <div className="bg-black p-2 rounded-full w-[120px] md:w-[156px] h-[39px] -mt-[30px] ml-0 md:ml-8 flex justify-center items-center gap-2">
              <img src={gift} className="w-5 md:w-auto" />
              <p className="text-[16px] md:text-[20.1px] text-white">Bonus 4</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-full w-full mt-4 md:mt-0">
              <div className="flex flex-col justify-center lg:items-start items-center gap-4 md:gap-8">
                <div className="flex justify-start items-center gap-4 md:gap-5 w-full">
                  <img src={audio} className="w-10 md:w-auto" />
                  <div className="hidden lg:flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Affirmation
                    </h1>
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Audio Pack
                    </h1>
                  </div>

                  <div className="lg:hidden flex flex-col justify-center items-start">
                    <h1 className="text-[18px] md:text-[24px] font-bold">
                      Affirmation Audio Pack
                    </h1>
                  </div>
                </div>
                <p className="text-[16px] md:text-[18px] w-full md:w-[300px] h-auto md:h-[100px]">
                  A collection of affirmations to reprogram your subconscious
                  mind for success and positivity.
                </p>
                <div className="bg-[#0A6544] w-[80px] md:w-[104px] h-[40px] md:h-[49px] rounded-[8px] text-white font-bold flex justify-center items-center text-[32px] md:text-[42px]">
                  $32
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
