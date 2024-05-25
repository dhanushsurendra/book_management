const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/auth');

const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/books')

router.use(protect)

router.route('/').get(getBooks).post(createBook)

router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)

module.exports = router;