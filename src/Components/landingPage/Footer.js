import React, { useEffect, useState } from "react";

const Footer = () => {
  const offerEndTime = new Date();
  offerEndTime.setHours(offerEndTime.getHours() + 12);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const handleButtonClick = () => {
    // if (window.fbq) {
    //   window.fbq("track", "InitiateCheckout", {
    //     content_name: "Stress and Anxiety Workshop",
    //     content_category: "Workshop",
    //     value: 5.0,
    //     currency: "USD",
    //   });
    // }
    // Redirect to Stripe payment gateway
    window.open("https://app.simplymeet.me/trauma2triumph/trauma2triumph-15-1731481629597", "_blank");
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let difference = Math.max(0, offerEndTime - new Date());

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    difference -= hours * 60 * 60 * 1000;

    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    difference -= minutes * 60 * 1000;

    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }
  return (
    <footer className=" z-50  fixed bottom-0 left-0 w-full bg-black text-white p-2">
      <div className="md:w-5/6 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="md:text-5xl text-xl font-semibold  text-[#F15A29] ">
              $5
              <span className="ml-3 md:text-2xl text-xs line-through">
                {" "}
                $50
              </span>
            </p>
            <p className="md:text-lg  text-sm font-semibold">
              Offer ends in {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s!!!
            </p>
          </div>

          <div>
            <button
              className="md:text-2xl text-xs bg-gradient-to-r from-[#FBA154] to-[#F15A29]  text-white md:px-12 px-4 md:py-4 py-2 rounded-full transition duration-300 "
              onClick={handleButtonClick}
            >
              Book your spot at $5!
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
