import React, { useEffect } from "react";
import "../../App.css";
import Carasoule from "./carasoule";

function Testimonials() {
  return (
    <div className="w-full font-sans  flex  justify-center items-center px-2 md:px-0 py-10 md:py-20">
      <div className="w-full flex flex-col justify-center items-center  ">
        <h1 className=" text-center text-[32px] text-black md:text-[54px] font-semibold ">
        Don’t believe in my words !
        </h1>
        <h2 className=" text-center text-[32px] text-black md:text-[50px] font-semibold" >See the Success Stories here</h2>
        <div>
          <Carasoule />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
