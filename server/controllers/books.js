const asyncHandler = require('../middleware/async')
const Book = require('../models/Book')

// @desc    Get single books
// @route   GET api/v1/books/
// @access  Public
exports.getBooks = asyncHandler(async(req, res, _) => {
    // res.status(200).json(res.advancedResults)

	const { page, limit, keyword } = req.query
	// Construct the search query
	const searchQuery = {
		$or: [
			{ title: { $regex: keyword, $options: 'i' } },
			{ genre: { $regex: keyword, $options: 'i' } },
			{ author: { $regex: keyword, $options: 'i' } }
		]
	}

	
	// If keyword is a number, include yearPublished in the search query
	if (!isNaN(keyword)) {
		searchQuery.$or.push({ yearPublished: parseInt(keyword) })
	}
	
	let totalDocs = 0
	if (keyword) {
		totalDocs = await Book.find(searchQuery).countDocuments()
	} else {
		totalDocs = await Book.find().countDocuments()
	}

	totalPages = Math.ceil(totalDocs / limit)

	let books = {}
	const pageNumber = page > 1 ? page - 1 : 0

	// Perform the search query
	if (keyword) {
		books = await Book.find(searchQuery).skip(pageNumber * limit).limit(limit)
	} else {
		books = await Book.find().skip(pageNumber * limit).limit(limit)
	}

	res.json({ success: true, totalPages, books })
})

// @desc    Get single books
// @route   GET api/v1/books/:id
// @access  Public
exports.getBook = asyncHandler(async (req, res, next) => {
	const book = await Book.findById(req.params.id)

	if (!book) {
		return next(
			new ErrorResponse(
				`Book not found with id of ${req.params.id}`,
				404
			)
		)
	}

	res.status(200).json({ success: true, data: book })
})

// @desc    Create new book
// @route   POST api/v1/books
// @access  Public
exports.createBook = asyncHandler(async (req, res) => {

	const book = await Book.create(req.body)

	res.status(201).json({
		success: true,
		data: book
	})
})

// @desc    Update book
// @route   PUT api/v1/books/:id
// @access  Public
exports.updateBook = asyncHandler(async (req, res, next) => {
	let book = await Book.findById(req.params.id)


	if (!book) {
		return next(
			new ErrorResponse(
				`Book not found with id of ${req.params.id}`,
				404
			)
		)
	}

	book = await Book.findOneAndUpdate({ _id: req.params.id}, req.body, {
		new: true,
		runValidators: true
	})

	res.status(200).json({ success: true, data: book })
})

// @desc    Delete book
// @route   DELETE api/v1/book/:id
// @access  Public
exports.deleteBook = asyncHandler(async (req, res, next) => {
	const book = await Book.findById(req.params.id)

	if (!book) {
		return next(
			new ErrorResponse(
				`Book not found with id of ${req.params.id}`,
				404
			)
		)
	}

	await Book.deleteOne({ _id: req.params.id })

	res.status(200).json({ success: true, data: {} })
})


