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

const MindReading = () => {
    return(
        <div className="justify-center p-10 gap-10 flex flex-col lg:flex-row mt-20">
            
            <div className="lg:w-1/3 pt-10 ">
           <div className="font-serif mb-20 text-6xl">
            <p>Wondering How I</p>
            <p>can read your mind?</p>
           </div>
           <div className="font-serif text-xl mt-5">
           <p className="mb-5">
           Because I have worked with coaches, business owners, consultants, creators and ambitious professionals for the past 7 years.
           </p>
           <p className="mb-5">
            And in my 7 years of experience, I know exactly what is keeping them unsuccessful despite working so hard.
           </p>
           <p className="mb-5">
           And I know exactly how phenomenal success can be Achieved…
           </p>
           </div>
           </div>


           <div className="lg:w-1/4">
            <img
            className="rounded-xl shadow-xl"
            src={profile}
            />
           </div>
        </div>
    )
}

export default MindReading;