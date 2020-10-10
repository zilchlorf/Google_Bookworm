const express = require('express');
const router = express.Router();

const booksController = require("../controllers/booksController");

router.route("/books")
    .get(booksController.findAll)
    .post(booksController.save)

router.route("/books/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)

module.exports = router;