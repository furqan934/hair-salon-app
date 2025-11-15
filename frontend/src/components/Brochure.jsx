import React from "react";
import Brocher_img from "../assets/dubi-b.jpg"
const Brochure = () => {
  return (
    <section id="brochure" className="flex flex-col justify-center items-center bg-[#f5f5f5] py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-[#aa9e5f] mb-6 uppercase">
        Our Brochure
      </h2>
      <img
        src={Brocher_img} // 👈 make sure this image is in your public folder
        alt="H&H Hair & Hair Salon Brochure"
        className="rounded-xl shadow-2xl max-w-4xl w-[90%]"
      />
    </section>
  );
};

export default Brochure;
