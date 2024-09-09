import React from "react";
import LandingPage from "./Pages/LandingPage";
import Thankyou from "./Pages/Thankyou";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
