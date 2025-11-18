import React, { useEffect } from "react";
import whyimg from "../assets/Images/why3.webp";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const WhyChoose = () => {
  const navigate = useNavigate(); // init an empty navigate
  const goToAppointment = () => {
    navigate("/appointment"); // go to appointment
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${whyimg})` }}
    >
      <div
        data-aos="zoom-in"
        className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full"
      >
        <h1 className="text-themyellow text-4xl font-bold">WORKING HOURS</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-xl text-black font-lg">SUNDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">MONDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">TUESDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">WEDNESDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">THURSDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">FRIDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">SATURDAY 10AM - 8PM</p>
        </div>
        <button
          onClick={goToAppointment}
          className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6"
        >
          BOOK ONLINE
        </button>
      </div>
      <div
        data-aos="slide-up"
        data-aos-delay="200"
        className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit"
      >
        <h1 className="text-6xl text-white font-bold text-center">
          Why Choose Us
        </h1>
        <p className="text-2xl font-semibold text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
          deleniti.
        </p>
        <div
          id="icon-list"
          className="flex flex-col justify-center items-start gap-4"
        >
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always welcoming environment
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always welcoming environment
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always welcoming environment
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always welcoming environment
            </h1>
          </div>

          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always welcoming environment
            </h1>
          </div>

          <button
            onClick={goToAppointment}
            className="px-10 py-4 bg-white text-black  rounded-x font-semibold rounded-xl hover:bg-[#a39446] hover:text-black"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
