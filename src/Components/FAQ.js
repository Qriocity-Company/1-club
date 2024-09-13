import React, { useEffect, useState } from "react";

const faqs = [
  {
    question: "What is the purpose of the webinar?",
    answer:
      "The webinar focuses on science-backed strategies to manage stress, reduce anxiety, and prevent burnout",
  },
  {
    question: "Who should attend this webinar?",
    answer:
      "The webinar is ideal for business owners, doctors, entrepreneurs, and anyone experiencing high stress and burnout.",
  },
  {
    question: "How long is the webinar?",
    answer: "The webinar is 60 minutes long.",
  },
  {
    question: "What will I learn during the webinar?",
    answer:
      " You’ll learn proven ways to reduce stress, overcome burnout, and stay motivated in your personal and professional life.",
  },
  {
    question: "Is the webinar live or recorded?",
    answer:
      "This is a live webinar where you can interact with the host and ask questions in real time.",
  },
  {
    question: "Do I need to have any prior knowledge or experience to attend?",
    answer:
      " No, this webinar is designed for anyone dealing with stress and burnout, regardless of background or experience.",
  },
  {
    question:
      "What makes this webinar different from other stress management programs?",
    answer:
      "This webinar offers real, science-based strategies that are easy to implement and tailored to professionals in high-stress roles.",
  },
  {
    question: "How can I register for the webinar?  ",
    answer:
      "  Click the registration link provided and follow the steps to secure your spot.",
  },
  {
    question: "Will there be a Q&A session?  ",
    answer:
      "Yes, there will be time for a Q&A session at the end of the webinar.",
  },
  {
    question: " Can I ask personal questions about my stress-related issues?",
    answer:
      "Yes, during the Q&A, you can ask specific questions, and the host will provide personalized advice.",
  },
  {
    question: "What if I can't attend at the scheduled time?",
    answer:
      "If you’re unable to attend live, a recording will be sent to all registered participants.",
  },
  {
    question: "How will this webinar help me in my professional life?",
    answer:
      "You’ll learn how to manage stress effectively, which can improve your focus, productivity, and overall well-being.",
  },
  {
    question:
      "How quickly will I see results after applying the techniques from the webinar? ",
    answer:
      "The techniques taught are simple to apply, and many participants experience immediate relief after implementing the strategies.",
  },
  {
    question: "How do I know if this webinar is right for me? ",
    answer:
      "If you’re feeling overwhelmed by stress and burnout, this webinar will provide actionable tools to help you regain control.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split the FAQs into two columns
  const firstColumnFAQs = faqs.slice(0, 7);
  const secondColumnFAQs = faqs.slice(7);

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Stress and Anxiety Workshop",
        content_category: "Meditation",
        value: 5.0,
        currency: "USD",
      });
    }
  }, []);

  return (
    <div className="w-full flex items-center p-4 md:p-0 justify-center ">
      <div className="max-w-4xl mx-auto py-8 md:mt-20 mb-20">
        <h2 className="text-[28px] md:text-[36px] font-bold text-center ">
          FREQUENTLY ASK QUESTIONS
        </h2>

        <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center md:gap-20">
          {/* Left Column */}
          <div className="w-full md:w-auto">
            {firstColumnFAQs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 mb-2 w-full md:w-[500px]"
              >
                <button
                  className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-gray-700 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-auto">
            {secondColumnFAQs.map((faq, index) => (
              <div
                key={index + 7}
                className="border-2 border-gray-300 mb-2 w-full md:w-[500px]"
              >
                <button
                  className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index + 7)}
                >
                  {faq.question}
                  <span>{activeIndex === index + 7 ? "-" : "+"}</span>
                </button>
                {activeIndex === index + 7 && (
                  <div className="p-4 text-gray-700 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
