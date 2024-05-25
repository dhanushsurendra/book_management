const express = require('express')
const router = express.Router()

const { login, regsiter, logout } = require('../controllers/auth')

router.post('/login', login)
router.post('/register', regsiter)
router.post('/logout', logout)

module.exports = router