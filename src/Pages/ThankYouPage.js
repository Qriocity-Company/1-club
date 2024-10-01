import React from "react";

const ThankYouPage = () => {
  const email = localStorage.getItem("email");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-600 via-green-300 to-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Click the link below to access the FREE meditation tape.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1WxTzI0OK8gwhEU_q1QN3gBOdX28d3gMb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Access Meditation Tape
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
