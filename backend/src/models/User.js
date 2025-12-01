const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const user_schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before save
user_schema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
user_schema.methods.matchPassword = async function (entered_password) {
  return await bcrypt.compare(entered_password, this.password);
};

module.exports = mongoose.model("User", user_schema);
