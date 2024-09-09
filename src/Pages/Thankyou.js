import React from "react";

function Thankyou() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
        Congrats for investing into your wellbeing.
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 text-gray-900 max-w-4xl w-full mt-5">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
          Please follow the steps below:
        </h2>

        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            Join the exclusive{" "}
            <span className="font-semibold text-purple-600">
              1% Meditators Community
            </span>
          </li>
          <li>
            Create your{" "}
            <span className="font-semibold text-purple-600">
              Calm-Clean space
            </span>{" "}
            for attending the webinar LIVE
          </li>
          <li>
            Pull your calendar 📅 and block this date and time:{" "}
            <span className="font-semibold">[September 18 ]</span>
          </li>
          <li>
            Bring your notebook and pen 🖊 ready to take notes and implement
          </li>
          <li>
            Make sure you finish your chores, sort your kids' schedule well in
            advance – so you can gift yourself{" "}
            <span className="font-semibold text-purple-600">
              100% presence of mind
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Thankyou;
