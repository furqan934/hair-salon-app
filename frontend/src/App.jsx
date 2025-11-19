// export default App;
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no Router here

import Header from "./components/Header";
import Hero from "./pages/Hero";
import WhyChoose from "./pages/WhyChoose";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services"
import Gallery from "./pages/Gallery";
import Appointment from "./components/Appointment";
import Brochure from "./components/Brochure"
import Footer from "./components/Footer";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact"
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  // the usestate and useEffect for the dark and light toggle
  const [theme , setTheme] = useState("light")

  useEffect(()=>{
    if (theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[theme]);

  return (
    <>
      <Header theme={theme} seTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/whyChoose" element={<WhyChoose />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/services" element={<Services/>} />
         <Route path="/gallery" element={<Gallery/>} />
        <Route path="/testimonial"  element={<Testimonial />} />
        <Route path="/footer"  element={<Footer />} />
        <Route path="/contact" element={<Contact />}/>

      </Routes>
      
        <WhatsAppButton />
        <ScrollToTopButton />
    </>
  );
};

export default App;
