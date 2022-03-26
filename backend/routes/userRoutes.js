const express = require("express");
const { userLogin } = require("../controllers/userController.js");

const router = express.Router();

router.post("/", userLogin);

module.exports = router;
