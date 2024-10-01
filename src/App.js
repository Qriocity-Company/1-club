import React from "react";
import LandingPage from "./Pages/LandingPage";
import Success from "./Pages/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import ThankYouPage from "./Pages/ThankYouPage";
import AdsPage from "./Pages/AdsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/meditation" element={<FormPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/thanksYou" element={<ThankYouPage />} />
        <Route path="/1-1consultation" element={<AdsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
