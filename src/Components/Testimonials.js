import React, { useEffect } from "react";
import "../App.css";
import star from "../assets/starr.png";
import Carasoule from "./carasoule";

function Testimonials() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Stress and Anxiety Workshop",
        content_category: "Meditation",
        value: 5.0,
        currency: "USD",
      });
    }
  }, []);
  return (
    <div className="w-full font-serif   flex  justify-center items-center px-2 md:px-0 py-10 md:py-20">
      <div className="w-full   flex flex-col justify-center items-center gap-6 md:gap-16">
        <h1 className=" text-center text-[32px] text-[#599587] md:text-[54px] font-semibold ">
          Words of praise from our Clients
        </h1>
        <div>
          <Carasoule />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
