const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, 'Please add a book title']
	},
	author: {
		type: String,
		trim: true,
		required: [true, 'Please add a book author']
	},
	genre: {
		type: String,
		trim: true,
		required: [true, 'Please add a book genre']
	},
	yearPublished: {
		type: Number,
		required: true,
		required: [true, 'Please add a book published year']
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Book', BookSchema)
