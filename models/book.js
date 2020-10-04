const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  authors: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: "",
    unique: true
  },

  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
