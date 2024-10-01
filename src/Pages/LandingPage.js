import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Introduction from "../Components/landingPage/Introduction";
import Meditation from "../Components/landingPage/Meditation";
import Learnings from "../Components/landingPage/Learnings";
import Bonuses from "../Components/landingPage/Bonuses";
import Meet from "../Components/landingPage/Meet";
import FAQ from "../Components/landingPage/FAQ";
import Testimonials from "../Components/landingPage/Testimonials";
import Footer from "../Components/landingPage/Footer";

const LandingPage = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Stress and Anxiety Workshop",
        content_category: "Workshop",
        value: 5.0,
        currency: "USD",
      });
    }
  }, []);
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
