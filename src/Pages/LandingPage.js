import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Introduction from "../Components/Introduction";
import Meditation from "../Components/Meditation";
import Learnings from "../Components/Learnings";
import Bonuses from "../Components/Bonuses";
import Meet from "../Components/Meet";
import FAQ from "../Components/FAQ";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="flex justify-between">
          <img className="ml-[50px] w-[126px] h-[110.83px]" src={logo} />
        </div>
        <Introduction />
        <Meditation />
        <Learnings />
        <Bonuses />
        <Meet />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
