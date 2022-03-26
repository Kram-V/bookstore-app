const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Mark Anthony",
    email: "mark@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

module.exports = users;
