const express = require('express');
const { loginUser, registerUser } = require('../controllers/user');
const router = express.Router();

// user login
router.post("/login", loginUser)

// register user
router.post("/register", registerUser);

module.exports = router;