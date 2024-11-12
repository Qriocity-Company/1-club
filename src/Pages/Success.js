import React, { useEffect } from "react";

function Thankyou() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "CompleteBooking", {
        content_name: "Google Calendar Appointment",
        content_category: "Appointment",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-white bg-[#0A6544] text-white p-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8 font-serif">
        Congrats for investing into your wellbeing.
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 text-gray-900 max-w-4xl w-full mt-5 font-sans">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
          Please follow the steps below:
        </h2>

        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <a
              className="hover:scale-105 hover:opacity-70 cursor-pointer underline underline-offset-4"
              href="https://chat.whatsapp.com/DX8AyI1GqSIBfTz1ZdnXbv "
            >
              Join the exclusive{" "}
              <span className="font-semibold text-[#0A6544]">
                1% Meditators Community
              </span>
              <span> - click here to join whatsapp community link</span>
            </a>
          </li>

          <li>
            Create your{" "}
            <span className="font-semibold text-[#0A6544]">
              Calm-Clean space
            </span>{" "}
            for attending the webinar LIVE
          </li>
          <li>
            Please mark September{" "}
            <span className="text-[#0A6544] font-semibold">18 at 9 pm EST</span>{" "}
            on your calendar.
          </li>
          <li>
            Bring your notebook and pen 🖊 ready to take notes and implement
          </li>
          <li>
            Make sure you finish your chores, sort your kids' schedule well in
            advance – so you can gift yourself{" "}
            <span className="font-semibold text-[#0A6544]">
              100% presence of mind
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Thankyou;
