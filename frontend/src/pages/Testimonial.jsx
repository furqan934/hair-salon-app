import React, { useEffect } from "react";
import client1 from "../assets/Images/client1.png";
import client2 from "../assets/Images/client2.png";
import client3 from "../assets/Images/client3.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    image: client1,
    name: "John Doe",
    title: "Web Developer",
    text: "Proin sed lorem mi sed faucibus turpis. At imperdiet dui accumsan sit amet nulla.",
  },
  {
    id: 2,
    image: client2,
    name: "Jane Smith",
    title: "Product Designer",
    text: "Est ullamcorper eget nulla pharetra diam sit amet. Eveniet, excepturi!",
  },
  {
    id: 3,
    image: client3,
    name: "Andrew Dew",
    title: "Creative Director",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam sapiente animi!",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      easing: "ease-in-sine",
      offset: 200,
    });
  }, []);

  return (
    <section
      id="testimonial"
      className="w-full md:px-20 px-10 py-20 bg-[#aa9e5f] flex flex-col justify-center items-center gap-6"
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl text-white font-bold text-center"
      >
        Testimonials
      </h1>
      <p className="text-xl text-white font-semibold text-center max-w-3xl">
        Our clients trust us for precision, style, and comfort. Read their
        testimonials and see why we’re their go-to barbershop.
      </p>

      <div
        id="clients"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full"
      >
        {testimonials.map((item, index) => (
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between items-center gap-6"
          >
            <div className="flex justify-between items-center gap-8 w-full">
              <div className="flex items-center gap-4 relative">
                <BiSolidQuoteAltLeft className="text-4xl text-green-500 opacity-20 absolute left-0" />
                <h1 className="text-2xl text-black font-bold ml-8">
                  {item.title}
                </h1>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[100px] rounded-full object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>

            <div className="w-full">
              <p className="text-end text-lg text-gray-600 font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
