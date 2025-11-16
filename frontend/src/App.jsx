// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no Router here

import Header from "./components/Header";
import Hero from "./pages/Hero";
import WhyChoose from "./pages/WhyChoose";
import Pricing from "./pages/Pricing";
import Appointment from "./components/Appointment";
import Brochure from "./components/Brochure"
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/whyChoose" element={<WhyChoose />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/footer"  element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
