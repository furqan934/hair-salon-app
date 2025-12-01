const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Middleware to test route
router.use((req, res, next) => {
  console.log("Auth route working");
  next();
});

// POST /api/auth/signup
router.post('/signup', signup);

// POST /api/auth/login
router.post('/login', login);

module.exports = router;
