import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import Appointment from "./Appointment";
const Header = () => {
  // i use navigate for link the appointment comp into button
  const navigate = useNavigate(); // init an empty navigate
  const goToAppointment = () => {
    navigate("/appointment"); // go to appointment
  };

  const [is_menu_open, set_is_menu_open] = useState(false);
  const toggle_menu = () => set_is_menu_open(!is_menu_open);

  const nav_items = [
    { link: "Home", path: "/" },
    { link: "About", path: "/whyChoose" },
    { link: "Services", path: "/services" },
    { link: "Testimonials", path: "/testimonials" },
    { link: "Pricing", path: "/pricing" },
    { link: "Brochure", path: "/brochure" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-6 top-0 z-30 border-[8px] border-[#a39446]">
        <div id="logo">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Hair & <span className="italic text-[#aa9e5f]">Hair Saloon</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-6">
          {nav_items.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#aa9e5f] hover:text-black"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="flex justify-center items-center lg:hidden"
          onClick={toggle_menu}
        >
          {is_menu_open ? (
            <FaXmark className="text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            is_menu_open ? "flex" : "hidden"
          } w-full bg-slate-800 flex-col absolute top-[80px] left-0 p-4 lg:hidden`}
        >
          <ul className="flex flex-col justify-center items-center gap-4">
            {nav_items.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#aa9e5f] hover:text-black w-full text-center"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <button
          onClick={goToAppointment}
          className="bg-[#aa9e5f] px-8 py-3 rounded-full hover:bg-white hover:text-black font-bold mt-3 hidden lg:flex trasform hover:scale-110  transition-transform duration300 cursor-pointer "
        >
          BOOK APPOINTMENT
        </button>
      </nav>
    </>
  );
};

export default Header;
