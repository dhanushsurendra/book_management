const User = require('../models/User')
const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')

exports.regsiter = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.create({email, password})

    sendResponseToken(user, 200, res)
})

// @desc    Login user
// @route   POST api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body

	// Validate email & password
	if (!email || !password) {
		return next(
			new ErrorResponse('Please provide an email and password', 400)
		)
	}

	// Check for user
	const user = await User.findOne({ email }).select('+password')

	if (!user) {
		return next(new ErrorResponse('Invalid credentials', 401))
	}

	// Check if password matches
	const isMatch = await user.matchPassword(password)

	if (!isMatch) {
		return next(new ErrorResponse('Invalid credentials', 401))
	}

	sendResponseToken(user, 200, res)
})

// @desc    Login user
// @route   POST api/v1/auth/logout
// @access  Public
exports.logout = asyncHandler(async (req, res, next) => {
	res.cookie('token', 'none', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true
	})

	res.status(200).json({ success: true, data: {} })
})

const sendResponseToken = (user, statusCode, res) => {
    // create token 
    const token = user.getSignedJwtToken()  
    
    const options = {
        expiresIn: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') {
        options.secure = true
    }

    res.status(statusCode).cookie('token', token, options).json({
		success: true,
		token: token
	})
}