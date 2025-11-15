import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section
        id="pricing"
        className="w-full md:px-20  px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24"
      >
        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-6xl font-bold text-black text-center">Our Pricing</h1>
        <div className="grid ms:grid-cols-2 grid-cols-1 justify-center items-center gap-20 2-[8%]">
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
