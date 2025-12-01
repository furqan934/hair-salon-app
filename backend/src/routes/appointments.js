const express = require("express");
const router = express.Router();
const { createAppointment, getAppointments } = require("../controllers/appointmentController");

router.use((req, res, next) => {
  console.log("Appointments route working");
  next();
});

// POST /api/appointments
router.post("/", createAppointment);

// GET /api/appointments
router.get("/", getAppointments);

module.exports = router;
