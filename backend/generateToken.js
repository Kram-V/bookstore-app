const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "thisIsSecret", { expiresIn: "30d" });
};

module.exports = generateToken;
