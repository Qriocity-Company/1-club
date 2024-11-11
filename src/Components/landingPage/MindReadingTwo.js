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
import profile from "../../assets/profile.jpg"
import ellipse from "../../assets/Ellipse.png"
import image from "../../assets/image.jpg"
const MindReadingTwo = () => {
    return(
        <div className="justify-center mx-10 gap-10 flex flex-col lg:flex-row mt-20">
            
            <div className="relative lg:w-2/4">
    <img className="w-full lg:block hidden  h-auto" src={image} alt="Your image" />
    <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-r from-transparent to-white"></div>
</div>

            <div className="lg:w-1/3 pt-10 ">
           <div className="font-serif mb-20 text-6xl">
            <p>And the power you are seeking is inside you…
            </p>
            
           </div>
           <div className="font-serif text-xl mt-5">
           <p className="mb-5">
           And You have the power to achieve any form of success you desire.
           </p>
           <div className=" text-green-800 text-3xl p-5 border-2 border-gray-800 mt-20">
            BY USING MY TOOLS TO HELP YOU REACH YOUR FULL POTENTIAL.
           </div>
           </div>
           </div>

           
        </div>
    )
}

export default MindReadingTwo;