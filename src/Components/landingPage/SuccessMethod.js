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
                <p className="text-2xl font-bold font-sans">Now, I’ve developed</p>
                <h1 className="lg:text-7xl text-4xl font-thin font-serif">The Ultimate Success Method™ </h1>
                <p className="text-2xl font-bold font-sans">a holistic approach that helps you</p>
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
                <p><strong>RECLAIM</strong> your inner strength by healing past traumas without reliving the pain.</p>
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
                <p><strong>BALANCE</strong> your career, family, and self-care with strategies designed specifically for women.</p>
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
                <p><strong>BUILD</strong> unshakable confidence to thrive in relationships, leadership, and personal growth.
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
                <p><strong>TRANSFORM</strong> your health and energy with holistic practices designed to fit into a busy woman’s lifestyle.</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default SuccessMethod;