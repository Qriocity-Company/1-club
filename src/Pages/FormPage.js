import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ImSpinner8 } from "react-icons/im";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work, setWork] = useState("");
  const [loading, setLoading] = useState(false);

  const sendData = async () => {
    if (name == "" || email == "" || phone == "" || work == "") {
      toast.error("Fill all fields to get the offer!!");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:gap-[100px] items-center h-auto lg:h-[100vh] w-[100vw] p-4 bg-gradient-to-br from-[#a1e5cc] to-white ">
        <div className="container flex flex-col w-full lg:w-[50%] mt-10 lg:mt-0">
          <h1 className="text-[#0A6544] font-bold text-[30px] lg:text-[40px] w-full lg:w-[700px] text-center lg:text-left font-serif">
            Liberate & Thrive: Subconscious Stress Release Meditation Guide
          </h1>

          <h1 className="font-bold text-[24px] lg:text-[30px] w-full lg:w-[600px] mt-5 text-center lg:text-left font-serif">
            Take the first step toward a more peaceful, stress-free life.
          </h1>

          <h1 className="font-bold text-[20px] lg:text-[25px] w-full lg:w-[600px] mt-5 text-center lg:text-left font-serif">
            Our Meditation guide can help you to
          </h1>
          <div className="flex flex-col justify-center lg:mt-0 mt-8">
            {[
              "Release built-up stress and tension in just a ",
              "Shift into a state of calm, focus, and ",
              "Create more ",
              "Become aware of the ",
            ].map((text, index) => (
              <div
                key={index}
                className="flex mt-5 lg:mt-10 items-center gap-2 text-[16px] lg:text-[18px]"
              >
                <IoMdCheckmarkCircleOutline
                  size={30}
                  color="#0A6544"
                  className="flex-shrink-0"
                />
                <span className="flex-grow">
                  {index === 0 ? (
                    <>
                      {text}
                      <span className="text-[#0A6544] font-bold ">
                        few minutes a day
                      </span>
                    </>
                  ) : index === 1 ? (
                    <>
                      {text}
                      <span className="text-[#0A6544] font-bold ">
                        emotional resilience
                      </span>
                    </>
                  ) : index === 2 ? (
                    <>
                      {text}
                      <span className="text-[#0A6544] font-bold ">
                        peace, balance
                      </span>{" "}
                      <span>, and ease in your everyday life</span>
                    </>
                  ) : (
                    <>
                      {text}
                      <span className="text-[#0A6544] font-bold ">
                        hidden subconscious blocks
                      </span>{" "}
                      <span>that are quietly holding you back</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="form bg-slate-100 opacity-90 shadow-lg h-auto lg:h-[600px] rounded-lg w-full lg:w-[450px] flex flex-col items-center p-4 mt-10 lg:mt-0 font-serif">
          <h1 className="font-bold text-[25px] text-center lg:text-left">
            Feeling Overwhelmed by Stress?
          </h1>

          <h1 className="font-semibold text-[18px] lg:text-[20px] mt-5 lg:mt-10 text-center">
            Fill in your details below to receive your FREE meditation guide
            now!
          </h1>

          <div className="flex flex-col justify-center items-center gap-8 mt-5 lg:mt-10 w-full">
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneInput
              className="lg:ml-[120px] ml-[5px]"
              country={"au"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputProps={{
                required: true,
                name: "phoneNumber",
                placeholder: "Enter Contact Number",
              }}
              containerStyle={{
                width: "100%", // Ensures the phone input takes full width
              }}
              inputStyle={{
                width: "300px", // Matches other input width
                height: "45px", // Adjust height for consistency
                border: "2px solid #4CAF50", // Matches border color
                borderRadius: "8px", // Matches other inputs
                paddingLeft: "50px", // Ensures space for the flag
              }}
              buttonStyle={{
                border: "2px solid #4CAF50", // Matches other inputs
                borderRadius: "8px 0 0 8px", // Ensures button aligns with the input
                backgroundColor: "#fff", // Keeps the flag section white
                paddingRight: "5px", // Adds a small padding to keep the flag closer to the left
              }}
            />
            <input
              className="p-2 w-[300px] rounded-lg outline-none border-2 border-green-600"
              placeholder="What You Do?"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            />
          </div>

          <button
            onClick={sendData}
            className="bg-[#0A6544] p-2 hover:opacity-70 cursor-pointer rounded-lg w-[300px] text-white mt-[30px] text-[20px]"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <ImSpinner8
                  color="white"
                  className="animate-spin place-self-center"
                />
              </div>
            ) : (
              "Download Now"
            )}
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default FormPage;
