import React from "react";
import profile from "../../assets/profile.jpg";

const MindReading = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6 lg:p-10 bg-gray-50">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 leading-snug mb-6">
            Wondering How I<br />
            Can Help You Heal<br />
            and Achieve Success?
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-5">
            Because I have spent the past 7 years working with women who are
            navigating trauma, healing, and striving for success.
          </p>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-5">
            In my years of experience, I’ve seen exactly what holds women back
            from thriving, even when they’re putting in their best efforts.
          </p>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            I also know exactly how profound healing and transformative success
            can be achieved by overcoming the barriers holding you back and
            embracing your true potential.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3">
        <img
          className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          src={profile}
          alt="Therapist Profile"
        />
      </div>
    </div>
  );
};

export default MindReading;
