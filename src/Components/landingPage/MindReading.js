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
        <div className="justify-center p-10 gap-10 flex flex-col lg:flex-row">
            
            <div className="lg:w-1/3 pt-10 ">
           <div className="font-serif mb-20 text-5xl">
            <p>Wondering How I</p>
            <p>can help you heal and achieve success?
            </p>
           </div>
           <div className="font-serif text-xl mt-5">
           <p className="mb-5">
           Because I have spent the past 7 years working with women who are navigating trauma, healing, and striving for success.
           </p>
           <p className="mb-5">
           In my years of experience, I’ve seen exactly what holds women back from thriving, even when they’re putting in their best efforts.
           </p>
           <p className="mb-5">
           I also know exactly how profound healing and transformative success can be achieved by overcoming the barriers holding you back and embracing your true potential.
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