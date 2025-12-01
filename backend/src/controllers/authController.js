const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generate_token = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// SIGNUP
exports.signup = async (req, res, next) => { // added next
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const user_exists = await User.findOne({ email });
    if (user_exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const user = await User.create({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generate_token(user._id)
    });

  } catch (error) {
    next(error); // use next for proper error handling
  }
};

// LOGIN
exports.login = async (req, res, next) => { // added next
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generate_token(user._id)
      });
    }

    res.status(401).json({ message: "Invalid email or password" });

  } catch (error) {
    next(error); // use next for proper error handling
  }
};
