const conn = require("./db.js");
const User = require("./models/User.js");
const users = require("./data/users.js");

conn();

const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
