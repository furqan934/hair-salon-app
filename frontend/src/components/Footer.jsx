import React from "react";
import SalonLogo from "../assets/Images/salon-logo.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-black text-white pt-10 px-6 md:px-12">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LOGO & ABOUT */}
          <div data-aos="zoom-in">
            <div className="bg-black rounded-xl p-5 shadow-md border border-gray-700">
              <img
                src={SalonLogo}
                alt="Salon Logo"
                className="h-24 w-24 object-contain mb-3"
              />

              <h4 className="text-2xl font-bold">Hair&Hair Salon</h4>

              <p className="text-gray-400 mt-2 max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                eum?
              </p>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div data-aos="zoom-in">
            <div className="bg-black rounded-xl p-5 shadow-md border border-gray-700">
              <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
              <div className="border-b border-gray-700 mb-4"></div>

              <p className="mb-2">
                <span className="font-semibold">Located in:</span> Arbab Shakeel
                Plaza
              </p>

              <p className="mb-2">
                Shop 1,2,3,4,5, Arbab Shakeel Plaza, University Rd, Wahidabad
                Rahat Abad, Peshawar
              </p>

              <p className="mb-2">
                <span className="font-semibold">Hours:</span> Open · Closes 11
                pm
              </p>

              <p className="mb-2">
                <span className="font-semibold">Phone:</span> 0333 2828289
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4 text-white text-2xl">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-black rounded-xl p-5 shadow-md border border-gray-700">
              <h3 className="text-2xl font-bold mb-3">Our Location</h3>
              <div className="border-b border-gray-700 mb-4"></div>

              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8724404572063!2d71.50373247472876!3d33.98691687317209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91cf1ccaba9b3%3A0xd483d95e86b8da13!2sArbab%20Shakeel%20Plaza!5e0!3m2!1sen!2s!4v1763310000000!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  title="Arbab Shakeel Plaza Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-gray-300">
            © {new Date().getFullYear()} <strong>Hair&Hair Salon</strong> — Built by{" "}
            <strong>Muhammad Furqan</strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
