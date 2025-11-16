import React, { useEffect } from "react";
import haircuting from "../assets/images/hero.jpg";
import WhyChoose from "./WhyChoose";
import Footer from "../components/Footer"
import { FaLocationDot } from "react-icons/fa6";
import { MdHeadphones, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import heroimg from "../assets/images/hero.jpg";
import sissor from "../assets/images/sissor.png";
import menshair from "../assets/images/menshair.png";
import trimmer from "../assets/images/trimmer.png";
import womenhair from "../assets/images/womenhair.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate(); // init an empty navigate
  const goToAppointment = () => {
    navigate("/appointment"); // go to appointment
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      easeing: "ease-in-sine",
      offset: 200,
    });
  });
  return (
    <>
      <section
        id="hero"
        className="w-full md:px-[120px] px-10 flex flex-col justify-center items-center gap-20 md:flex-row"
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
            onClick={goToAppointment} // added feature
            data-aos="zoom-in"
            className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
          >
            Book Now
          </button>
        </div>
        <div data-os="zoom-in" id="image-box" className="md:w-[50%] w-full">
          <img
            src={heroimg}
            alt=""
            className="rounded-xl w-full md:h-[700] h-[500px]"
          />
        </div>
      </section>

      <section>
        {/* <div>
          <img src="" alt="" />
          <h1>Regular Hair Cut</h1>
          <button>More</button>
        </div> */}
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
          <h1 className="text-2xl flex-1 text-black font-semibold">
            Regular Haircut
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl  hover:bg-amber-500 hover:text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={menshair}
            alt="Scissors"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold">
            Regular Haircut
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl  hover:bg-amber-500 hover:text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="Scissors"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold">
            Regular Haircut
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl  hover:bg-amber-500 hover:text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={trimmer}
            alt="Scissors"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl flex-1 text-black font-semibold">
            Regular Haircut
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl  hover:bg-amber-500 hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
      </section>
      <WhyChoose />
      <Footer />
    </>
  );
};

export default Hero;
