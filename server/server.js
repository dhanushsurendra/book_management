const express = require('express')
const dotenv = require('dotenv')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')
const cors = require('cors')

// Load environment variables
dotenv.config({ path: './config/config.env' })

connectDB()

const books = require('./routes/books')

const app = express()

//parse incoming request
app.use(express.json())

// Enable cors
app.use(cors())

// mount routers
app.use('/api/v1/books', books)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err}`)
	// Close server & exit process
	server.close(() => process.exit(1))
})
