import React, { useEffect } from "react";
import servicesimg from "../assets/Images/servicimg.jpg";
import service2 from "../assets/Images/ser2.png";
import service3 from "../assets/Images/ser3.png";
import service1 from "../assets/Images/ser1.png";
import service4 from "../assets/Images/ser4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="services"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 bg-gray-900"
    >
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-bold text-center"
        >
          Barbershop Services
        </h1>
        <p data-aos="zoom-in" className="text-xl text-slate-200 text-center">
          Experience the art of precision grooming. Where style meets tradition
          in every cut.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        {/* Main Service Image */}
        <div id="image-box">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src={servicesimg}
            alt="Barbershop Services"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Service Items Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          {/* Service 1 */}
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service1}
              alt="Hair Care"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Hair Care</h1>
          </div>

          {/* Service 2 */}
          <div
            data-aos="zoom-out"
            data-aos-delay="300"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service2}
              alt="Beard Trim"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Beard Trim</h1>
          </div>

          {/* Service 3 */}
          <div
            data-aos="zoom-out"
            data-aos-delay="400"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service3}
              alt="Hair Styling"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Hair Styling</h1>
          </div>

          {/* Service 4 */}
          <div
            data-aos="zoom-out"
            data-aos-delay="500"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service4}
              alt="Face Treatment"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Face Treatment</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
