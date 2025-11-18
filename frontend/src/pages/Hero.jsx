import React, { useEffect } from "react";
import haircuting from "../assets/Images/hero.jpg";
import WhyChoose from "./WhyChoose";
import Pricing from "./Pricing";
import Services from "./Services"
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Footer from "../components/Footer"
import { FaLocationDot } from "react-icons/fa6";
import { MdHeadphones, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import heroimg from "../assets/Images/hero.jpg";
import sissor from "../assets/Images/sissor.png";
import menshair from "../assets/Images/menshair.png";
import trimmer from "../assets/Images/trimmer.png";
import womenhair from "../assets/Images/womenhair.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const goToAppointment = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      easing: "ease-in-sine", // Fixed typo: easeing -> easing
      offset: 200,
    });
  }, []); // Added empty dependency array

  return (
    <>
      {/* Add top padding to account for fixed navbar */}
      <section
        id="hero"
        className="w-full md:px-[120px] px-10 flex flex-col justify-center items-center gap-20 md:flex-row pt-24" // Added pt-24
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10"
        >
          <h1 data-aos="zoom-in" className="text-2xl text-black font-semibold">
            WELCOME TO
          </h1>
          <h1 data-aos="zoom-in" className="text-6xl text-black font-bold">
            Barbershop
            <br /> in Manhattan
            <br /> NEW YORK
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <FaLocationDot className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                university road peshawar
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdOutlinePhoneAndroid className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                +92 343454553 / +92 456457788
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdEmail className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                hair&hair@gmail.com
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdHeadphones className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold">
                customer@gmail.com
              </h1>
            </div>
          </div>

          <button
            onClick={goToAppointment}
            data-aos="zoom-in"
            className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full">
  <img
    src={heroimg}
    alt="Professional Barbershop Services"
    className="rounded-xl w-full md:h-[600px] h-[400px] object-cover shadow-2xl"
  />
</div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={sissor}
            alt="Scissors"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold text-center">
            Regular Haircut
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-amber-500 hover:text-black cursor-pointer transition-all duration-300">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={menshair}
            alt="Men's Hair"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold text-center">
            Men's Styling
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-amber-500 hover:text-black cursor-pointer transition-all duration-300">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="Women's Hair"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold text-center">
            Women's Styling
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-amber-500 hover:text-black cursor-pointer transition-all duration-300">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={trimmer}
            alt="Trimmer"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold text-center">
            Beard Trimming
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-amber-500 hover:text-black cursor-pointer transition-all duration-300">
            MORE
          </button>
        </div>
      </section>
      <WhyChoose />
      <Pricing/>
      <Services/>
      <Gallery/>
      <Testimonial/>
      <Footer />
    </>
  );
};

export default Hero;