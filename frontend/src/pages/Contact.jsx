import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      easing: "ease-in-sine",
      offset: 200,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const updatedData = { ...formData, [name]: value };
    // setFormData(updatedData);
    // const old_data = JSON.parse(localStorage.getItem("contactForm"))

    // localStorage.setItem("contactForm", JSON.stringify(updatedData));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle the final submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    // alert("Thank you for contacting us!");
    // setFormData({ name: "", email: "", subject: "", message: "" });
    // localStorage.removeItem("contactForm");
    const oldData = JSON.parse(localStorage.getItem("contactForms")) || [];

    // add the form data in array
    oldData.push(formData);

    // set the updated array
    localStorage.setItem("contactForms", JSON.stringify(oldData));

    alert(
      "Your message has been successfully sent! We will get back to you soon."
    );

    //  reset the form
    setFormData({
      name: "",
      email: " ",
      subject: " ",
      message: " ",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section - Contact Info */}
        <div className="bg-[#a39446] text-white p-10 flex flex-col justify-start md:justify-center space-y-8">
          {/* Heading Section inside left panel */}
          <div className="text-center mb-6" data-aos="fade-down">
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="text-gray-200 text-sm max-w-xs mx-auto">
              We'd love to hear from you! Reach us through the information
              below.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem, quo?
            </p>
          </div>

          <div data-aos="fade-right" className="flex items-start space-x-4">
            <div className="p-4 bg-white rounded-lg text-[#a39446]">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Our Location</h3>
              <p>99 S.t Jomblo Park Pekanbaru 28292, Indonesia</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex items-start space-x-4"
          >
            <div className="p-4 bg-white rounded-lg text-[#a39446]">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Phone Number</h3>
              <p>(+62)81 414 257 9980</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex items-start space-x-4"
          >
            <div className="p-4 bg-white rounded-lg text-[#a39446]">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Email Address</h3>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-10" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-6 text-[#a39446]">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39446]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39446]"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39446]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a39446]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#a39446] hover:bg-amber-500 text-white font-semibold py-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
