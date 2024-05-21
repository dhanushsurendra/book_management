const express = require('express')

const app = express()

//parse incoming request
app.use(express())

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
