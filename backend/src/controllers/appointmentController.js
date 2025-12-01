const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res, next) => {
  try {
    const { name, phone, employee, employee_price, service, service_price, duration, date, time } = req.body;

    if (!name || !phone || !employee || !service || !date || !time) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const newAppointment = new Appointment({
      ...req.body,
      user_id: req.body.user_id, // ensure user_id exists
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    next(err);
  }
};

exports.getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().populate("user_id", "name email");
    res.json(appointments);
  } catch (err) {
    next(err);
  }
};
