import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, delay: 100, easing: "ease-in-sine", offset: 200 });
  }, []);

  const pricingData = [
    {
      category: "FACIAL SERVICES",
      services: [
        { name: "JANSSEN ACTIVE SKIN FACIAL", price: "RS 10000" },
        { name: "DERMA-CARE DEEP CLEANSE FACIAL", price: "RS 5000" },
        { name: "JANSSEN POWER BRIGHT FACIAL", price: "RS 15000" },
        { name: "PRO SKIN FACIAL", price: "RS 4000" },
        { name: "SKIN WHITENING FACIAL", price: "RS 7000" }
      ]
    },
    {
      category: "HAIRCUT SERVICES", 
      services: [
        { name: "STANDARD HAIRCUT", price: "RS 600" },
        { name: "CHILD'S CUT", price: "RS 800" },
        { name: "SIGNATURE CUT", price: "RS 600" },
        { name: "SENIOR ARTIST CUT", price: "RS 700" },
        { name: "LONG HAIR TRIMMING", price: "RS 300" }
      ]
    },
    {
      category: "BEARD SERVICE",
      services: [
        { name: "BEARD TRIMMING & SHAPING", price: "RS 600" },
        { name: "FULL SHAVE", price: "RS 600" },
        { name: "SIGNATURE BEARD SERVICE", price: "RS 1000" }
      ]
    },
    {
      category: "HAIR STYLING",
      services: [
        { name: "BLOW-DRYING AND STYLING", price: "RS 700" },
        { name: "SHAMPOO/BLOW-DRY/STYLING", price: "RS 1000" },
        { name: "SHAPE IRON", price: "RS 900" },
        { name: "LONG HAIR STYLING", price: "RS 1800" }
      ]
    }
  ];

  return (
    <section id="pricing" className="w-full px-6 md:px-20 py-16 md:py-20 bg-gray-50">
      <h1 data-aos="zoom-in" className="text-4xl md:text-6xl font-bold text-black text-center mb-16">
        Our Pricing
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pricingData.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            data-aos="fade-up" 
            data-aos-delay={categoryIndex * 100}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="bg-[#a39446] py-3 px-6">
              <h2 className="text-xl font-bold text-white text-center">{category.category}</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-800 font-medium flex-1 pr-4">{service.name}</span>
                  <span className="text-[#a39446] font-bold text-lg">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;