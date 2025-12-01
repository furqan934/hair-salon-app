import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const employees = [
  { name: "Ali", role: "Hair Expert", price: 500 },
  { name: "Hamza", role: "Skin Specialist", price: 3000 },
  { name: "Saad", role: "Facial Expert", price: 1500 },
];

const services = [
  { name: "Haircut", price: 500, duration: "30 min" },
  { name: "Standard Facial", price: 3000, duration: "45 min" },
  { name: "Deep Clean Facial", price: 1500, duration: "60 min" },
  { name: "Skin Whitening Facial", price: 4000, duration: "60 min" },
];

const timeSlots = [
  "10:00 AM – 10:30 AM", "10:30 AM – 11:00 AM", "11:00 AM – 11:30 AM",
  "11:30 AM – 12:00 PM", "12:00 PM – 12:30 PM", "12:30 PM – 1:00 PM",
  "2:00 PM – 2:30 PM", "2:30 PM – 3:00 PM", "3:00 PM – 3:30 PM",
  "3:30 PM – 4:00 PM", "4:00 PM – 4:30 PM", "4:30 PM – 5:00 PM",
  "5:00 PM – 5:30 PM", "5:30 PM – 6:00 PM",
];

const BookAppointment = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    employee: "",
    employee_price: "",
    service: "",
    service_price: "",
    duration: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "employee") {
      const emp = employees.find((item) => item.name === value);
      setFormData({ ...formData, employee: value, employee_price: emp?.price || "" });
    } else if (name === "service") {
      const serv = services.find((s) => s.name === value);
      setFormData({ ...formData, service: value, service_price: serv?.price || "", duration: serv?.duration || "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/appointments",
        { ...formData, user_id: user._id },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      setMessage(res.data.message);
      setFormData({
        name: "",
        phone: "",
        employee: "",
        employee_price: "",
        service: "",
        service_price: "",
        duration: "",
        date: "",
        time: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border border-[#a39446]">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#a39446]">
          Book Appointment
        </h2>

        {message && <p className="text-green-600 text-center mb-2">{message}</p>}
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-[#a39446]" />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-[#a39446]" />
          </div>

          {/* Employee */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Employee</label>
            <select name="employee" value={formData.employee} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-[#a39446]">
              <option value="">Choose Employee</option>
              {employees.map((emp) => (<option key={emp.name} value={emp.name}>{emp.name} – {emp.role} (Rs {emp.price})</option>))}
            </select>
          </div>

          {formData.employee_price && <p className="text-[#a39446] font-semibold">Employee Price: Rs {formData.employee_price}</p>}

          {/* Service */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Service</label>
            <select name="service" value={formData.service} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-[#a39446]">
              <option value="">Choose Service</option>
              {services.map((service) => (<option key={service.name} value={service.name}>{service.name} (Rs {service.price}, {service.duration})</option>))}
            </select>
          </div>

          {formData.service_price && <p className="text-[#a39446] font-semibold">Service Price: Rs {formData.service_price} | Duration: {formData.duration}</p>}

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-[#a39446]" />
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Time</label>
            <select name="time" value={formData.time} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-[#a39446]">
              <option value="">Choose Time Slot</option>
              {timeSlots.map((slot, index) => (<option key={index} value={slot}>{slot}</option>))}
            </select>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-[#a39446] text-white font-medium py-2 rounded-lg transition hover:bg-amber-500">
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
