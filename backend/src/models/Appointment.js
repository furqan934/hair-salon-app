// backend/src/models/Appointment.js
const mongoose = require("mongoose");

const appointment_schema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // user full name
    phone: { type: String, required: true }, // user phone
    employee: { type: String, required: true },
    employee_price: { type: Number, required: true },
    service: { type: String, required: true },
    service_price: { type: Number, required: true },
    duration: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointment_schema);
