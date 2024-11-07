import React, { useEffect } from "react";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import coach from "../../assets/coach.png";
import star from "../../assets/star.png";
import smallstar from "../../assets/smallstar.png";

const Numbers = () => {
    return(
        <div className="bg-gray-100 justify-center gap-20 text-center lg:gap-44 lg:items-center flex flex-col lg:flex-row lg:h-44 mt-20">
            <div className="flex flex-col text-8xl font-bold">
                <div>
                    <p className="font-thin text-2xl">After Building</p>
                </div>
                <div>
                    <h1>7111</h1>
                    <p className="text-3xl">of Business</p>
                </div>
            </div>
            <div className="flex flex-col text-8xl font-bold">
                <div>
                    <p className="font-thin text-2xl">Working With</p>
                </div>
                <div>
                    <h1>7000+</h1>
                    <p className="text-3xl">Clients</p>
                </div>
            </div>
            <div className="flex flex-col text-8xl font-bold">
                <div>
                    <p className="font-thin text-2xl">And Solving</p>
                </div>
                <div>
                    <h1>10000+</h1>
                    <p className="text-3xl">of Personal & Business Problems</p>
                </div>
            </div>  
        </div>
    )
}

export default Numbers;