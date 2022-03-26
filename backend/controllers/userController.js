const User = require("../models/User.js");
const generateToken = require("../generateToken.js");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("No User Found");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }
});

module.exports = {
  userLogin,
};
