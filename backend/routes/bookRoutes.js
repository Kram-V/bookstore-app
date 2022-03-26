const express = require("express");
const {
  bookList,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", protect, createBook);
router.get("/", bookList);
router.get("/:id", getBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;
