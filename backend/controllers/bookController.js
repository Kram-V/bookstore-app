const Book = require("../models/Book.js");

const bookList = async (req, res) => {
  const maximumSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Book.countDocuments();

  const books = await Book.find()
    .limit(maximumSize)
    .skip(maximumSize * (page - 1));

  res.send({ books, page, pages: Math.ceil(count / maximumSize) });
};

const getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  res.send(book);
};

const createBook = async (req, res) => {
  const { title, author, price, stock } = req.body;

  const book = new Book({ title, author, price, stock });

  const createdBook = await book.save();
  res.send(createdBook);
};

const updateBook = async (req, res) => {
  const { title, author, price, stock } = req.body;

  const bookUpdates = { title, author, price, stock };

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, bookUpdates, {
    new: true,
  });

  res.send(updatedBook);
};

const deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);

  res.send(deletedBook);
};

module.exports = {
  bookList,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
