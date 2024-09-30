import React from "react";
import LandingPage from "./Pages/LandingPage";
import Thankyou from "./Pages/Thankyou";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import ThankYouPage from "./Pages/ThankYouPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/meditation" element={<FormPage />} />
        <Route path="/success" element={<Thankyou />} />
        <Route path="/thanksYou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
