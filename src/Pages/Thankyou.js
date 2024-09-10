import React from "react";

function Thankyou() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-white to-green-600 text-white p-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
        Congrats for investing into your wellbeing.
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 text-gray-900 max-w-4xl w-full mt-5">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
          Please follow the steps below:
        </h2>

        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <a
              className="hover:scale-105 hover:opacity-70 cursor-pointer"
              href="https://chat.whatsapp.com/DX8AyI1GqSIBfTz1ZdnXbv "
            >
              Join the exclusive{" "}
              <span className="font-semibold text-green-600">
                1% Meditators Community
              </span>
            </a>
          </li>

          <li>
            Create your{" "}
            <span className="font-semibold text-green-600">
              Calm-Clean space
            </span>{" "}
            for attending the webinar LIVE
          </li>
          <li>Please mark September 18 at 7 pm EST on your calendar.</li>
          <li>
            Bring your notebook and pen 🖊 ready to take notes and implement
          </li>
          <li>
            Make sure you finish your chores, sort your kids' schedule well in
            advance – so you can gift yourself{" "}
            <span className="font-semibold text-green-600">
              100% presence of mind
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Thankyou;
