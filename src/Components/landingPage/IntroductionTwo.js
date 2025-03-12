import React, { useState } from "react";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import coach from "../../assets/coach.png";
import star from "../../assets/star.png";
import smallstar from "../../assets/smallstar.png";

const IntroductionTwo = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    contactNumber: "",
    email: "",
    problemDescription: "",
    profession: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
    // You can send the form data to an API or perform other actions
  };

  return (
    <div className="mt-[30px] lg:px-32 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8">
        <div className="flex mx-5 flex-col text-[36px] lg:text-[64px] justify-center gap-0 items-center lg:items-start font-serif text-[#302825]">
          <h1>Unlock Your Potential</h1>
          <h1 className="font-bold">Using The MAP METHOD™️</h1>
        </div>
        <div className="flex flex-col mx-5 text-[30px] lg:text-[30px] justify-center items-center lg:items-start font-serif">
          Don’t let supressed emotions, trauma, and pain hold you back. You can
          heal and grow.
        </div>

        {/* Lead Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Please Enter your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 border border-black rounded-md"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Enter the City you are from"
            value={formData.city}
            onChange={handleInputChange}
            className="p-2 border border-black rounded-md"
            required
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Share your Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="p-2 border border-black rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 border border-black rounded-md"
            required
          />
          <textarea
            name="problemDescription"
            placeholder="Describe your problem"
            value={formData.problemDescription}
            onChange={handleInputChange}
            className="p-2 border border-black rounded-md"
            rows="4"
            required
          />
          <select
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            className="p-2 border border-black rounded-md"
            required
          >
            <option value="">Select your profession</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Working">Working</option>
            <option value="Student">Student</option>
            <option value="Retired">Retired</option>
          </select>
          <button
            type="submit"
            className="bg-[#0B6544] rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-[20px] shadow-md shadow-gray-500 lg:text-[32px] font-medium"
          >
            TAKE CONTROL OF YOUR LIFE
          </button>
        </form>

        <div className="flex flex-col justify-center items-start lg:items-start gap-2 lg:gap-5">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-[16px] text-[#302825] font-bold lg:text-[32px]">
              100% Backed by Science
            </h1>
          </div>
        </div>
      </div>

      <div className="relative lg:place-self-end flex justify-center">
        <img className="absolute mt-3 mr-12" src={smallstar} alt="Small Star" />
        <img src={star} alt="Star" />
        <img
          className="absolute ml-[42px] top-0 mt-[52px]"
          src={smallstar}
          alt="Small Star"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 lg:gap-10 p-2">
        <img src={coach} alt="Coach" className="h-96 min-w-96" />
        <div className="bg-black text-white flex-col justify-center items-start w-full lg:w-[250.24px] h-[82.35px] rounded-[12.67px] mt-6 lg:mt-[450px] lg:ml-[150px] lg:absolute hidden lg:flex">
          <div className="bg-[#0A6544] flex justify-center items-center h-[18.59px] w-[34.64px] -mt-6 ml-5 rounded-sm">
            by
          </div>
          <h1 className="text-[16px] lg:text-[24.2px] ml-5">Lydia Binil</h1>
          <h1 className="ml-5 text-[10px] lg:text-[13.52px]">
            Success and Money Block Coach For Women
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroductionTwo;