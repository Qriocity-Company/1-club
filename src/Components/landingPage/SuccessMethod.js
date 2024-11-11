import React, { useEffect } from "react";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import coach from "../../assets/coach.png";
import star from "../../assets/star.png";
import smallstar from "../../assets/smallstar.png";
import handbulb from "../../assets/handbulb.png"
import money from "../../assets/money.png"
import brain from "../../assets/brain.png"
import clash from "../../assets/clash.png"

const SuccessMethod = () => {
    return(
        <div className="bg-[#E4F3E8] justify-center py-10 px-2 text-center gap-10 lg:items-center flex flex-col mt-20">
            <div>
                <p className="text-2xl font-bold font-sans">I have Figured Out</p>
                <h1 className="lg:text-7xl text-4xl font-thin font-serif">The Ultimate Success Method️</h1>
                <p className="text-2xl font-bold font-sans">That Just Works</p>
            </div>
            <div className="grid  lg:grid-cols-2 text-left text-2xl gap-10">
            <div className="rounded-xl flex flex-row bg-white shadow-2xl p-10">
                <div className="h-full items-center justify-center flex">
                <img
                className=" size-20"
                src={handbulb}
                />
                </div>
                <div className="w-64 ml-5">
                <p><strong>WITHOUT</strong> chasing success but instead becoming a magnet for unlimited opportunities</p>
                </div>
            </div>
            
            <div className="rounded-xl flex flex-row bg-white shadow-2xl p-10">
                <div className="h-full items-center justify-center flex">
                <img
                className=" size-20"
                src={money}
                />
                </div>
                <div className="w-64 ml-5">
                <p><strong>WITHOUT</strong> making your life stressful because of income roller coaster</p>
                </div>
            </div>

            <div className="rounded-xl flex flex-row bg-white shadow-2xl p-10">
                <div className="h-full items-center justify-center flex">
                <img
                className=" size-20"
                src={brain}
                />
                </div>
                <div className="w-64 ml-5">
                <p><strong>WITHOUT</strong> drowning yourself into 100’s of mindset programs and millions of voices.
                </p>
                </div>
            </div>

            <div className="rounded-xl flex flex-row bg-white shadow-2xl p-10">
                <div className="h-full items-center justify-center flex">
                <img
                className=" size-20"
                src={clash}
                />
                </div>
                <div className="w-64 ml-5">
                <p><strong>WITHOUT</strong> chasing success but instead becoming a magnet for unlimited opportunities</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default SuccessMethod;