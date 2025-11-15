import React from "react";
import AboutBgImg from "../assets/Images/about-img.webp";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {FaAngleDoubleRight} from "react-icons/fa"
const About = () => {
  return (
    <>
      <section
        id="about"
        className="w-full md:px20 px-10 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBgImg})` }}
      >
        <div className="flex flex-col gap-10  md:10 justify-center items-center bg-white p-10 rounded-xl md:w-[40%] w-full">
          <h1 className="tex-themeyellow text-4xl font-bold ">WORKING HOURS</h1>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-xl text-black font-lg">SUNDAY 10AM - 1PM</p>
            <p className="text-xl text-black font-lg">MONDAY 10AM - 8PM</p>
            <p className="text-xl text-black font-lg">TUESDAY 10AM - 8PM</p>
            <p className="text-xl text-black font-lg">WEDNESDAY 10AM - 8PM</p>
            <p className="text-xl text-black font-lg">THURSDAY 10AM - 8PM</p>
            <p className="text-xl text-black font-lg">FRIDAY 10AM - 8PM</p>
            <p className="text-xl text-black font-lg">SATURDAY 10AM - 8PM</p>
          </div>
          <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg  hover:bg-black hover:text-white mt-6">
            BOOK ONLINE
          </button>
        </div>

        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="md:w-[40%] w-full   flex flex-col justify-center items-start gap-6 h-fit"
        >
          <h1 className="text-6xl font-bold  text-center text-white">
            Why Choose Us
          </h1>
          <p className="text-2xl text-white md:text-start text-center font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, fugiat.
          </p>
          <div
            id="icon-list"
            className="flex flex-col items-start justify-center gap-4 "
          >
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3 "
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-xl text-white font-semibold">Alwas Welcoming Envirnemnet</h1>
              
            </div>
             <div
              id="icon-box"
              className="flex justify-center items-center gap-3 "
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-xl text-white font-semibold">Alwas Welcoming Envirnemnet</h1>
              
            </div>
             <div
              id="icon-box"
              className="flex justify-center items-center gap-3 "
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-xl text-white font-semibold">Alwas Welcoming Envirnemnet</h1>
              
            </div>
             <div
              id="icon-box"
              className="flex justify-center items-center gap-3 "
            >
              <FaAngleDoubleRight className="text-white size-6" />
              <h1 className="text-xl text-white font-semibold">Always Welcoming Envirnemnet</h1>
            </div>

            <button
            className="px-10 py-4 bg-white text-black  rounded-x font-semibold rounded-xl hover:bg-[#a39446] hover:text-black"
          >
            BOOK APPOINTMENT
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
