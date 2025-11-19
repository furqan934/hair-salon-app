import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaXmark, FaBars ,FaSun ,FaMoon} from "react-icons/fa6";

const Header = ({ theme, seTheme }) => {
  const toggle_theme = () => {
    seTheme(theme === "dark" ? "light" : "dark");
  };

  const navigate = useNavigate();
  const goToAppointment = () => {
    navigate("/appointment");
  };

  const [is_menu_open, set_is_menu_open] = useState(false);
  const toggle_menu = () => set_is_menu_open(!is_menu_open);

  const nav_items = [
    { link: "Home", path: "/" },
    { link: "About", path: "/whyChoose" },
    { link: "Services", path: "/services" },
    { link: "Testimonials", path: "/testimonials" },
    { link: "Brochure", path: "/brochure" },
    { link: "Contact", path: "/contact" },
    { link: "Pricing", path: "/pricing" },
    { link: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-4 top-0 z-50 border-b-4 border-[#a39446] fixed w-full">
        {/* Logo */}
        <div id="logo">
          <h1 className="text-white font-bold text-2xl md:text-4xl">
            Hair & <span className="italic text-[#aa9e5f]">Hair Saloon</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-4">
          {nav_items.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="text-white uppercase font-semibold text-sm cursor-pointer px-4 py-2 rounded-lg hover:bg-[#aa9e5f] hover:text-black transition-all duration-300"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={goToAppointment}
          className="bg-[#aa9e5f] px-6 py-2 rounded-full hover:bg-white hover:text-black font-bold hidden lg:flex transform hover:scale-105 transition-transform duration-300 cursor-pointer text-sm"
        >
          BOOK NOW
        </button>
        {/* theme toggle for dekstop site*/}
        <button
          onClick={toggle_theme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-all duration-300"
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
        {/* Mobile Menu Button */}
        <div
          className="flex justify-center items-center lg:hidden z-50"
          onClick={toggle_menu}
        >
          {is_menu_open ? (
            <FaXmark className="text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {is_menu_open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggle_menu}
          ></div>
        )}

        {/* Mobile Menu - Fixed positioning */}
        <div
          className={`${
            is_menu_open ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 w-80 h-full bg-slate-900 z-50 p-6 transition-transform duration-300 lg:hidden flex flex-col overflow-y-auto`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white text-xl font-bold">Menu</h2>
            <FaXmark
              className="text-white text-2xl cursor-pointer"
              onClick={toggle_menu}
            />
          </div>

          {/* mobile theme toggle  */}
          <button
            onClick={toggle_theme}
            className="mb-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-all duration-300 self-start"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col justify-start items-start gap-2 flex-1">
            {nav_items.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="text-white uppercase font-semibold cursor-pointer p-4 rounded-lg hover:bg-[#aa9e5f] hover:text-black w-full text-left transition-all duration-300 border-b border-gray-700"
                onClick={toggle_menu}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Mobile Appointment Button */}
          <button
            onClick={() => {
              goToAppointment();
              toggle_menu();
            }}
            className="bg-[#aa9e5f] px-6 py-4 rounded-full hover:bg-white hover:text-black font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer w-full mt-4"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden under fixed header */}
      <div style={{ paddingTop: "80px" }}></div>
    </>
  );
};

export default Header;
