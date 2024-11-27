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
                    <p className="font-thin text-2xl">For over</p>
                </div>
                <div>
                    <h1>7+</h1>
                    <p className="text-3xl">years</p>
                </div>
            </div>
            <div className="flex flex-col text-8xl font-bold">
                <div>
                    <p className="font-thin text-2xl">I've Empowered</p>
                </div>
                <div>
                    <h1>7000+</h1>
                    <p className="text-3xl">Women</p>
                </div>
            </div>
            <div className="flex flex-col text-8xl font-bold">
                <div>
                    <p className="font-thin text-2xl">To Overcome</p>
                </div>
                <div>
                    <h1>10,000+</h1>
                    <p className="text-3xl">Personal and Professional challenges effortlessly</p>
                </div>
            </div>  
        </div>
    )
}

export default Numbers;