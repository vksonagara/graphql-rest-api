const router = require('express').Router();
const signUpHandler = require('./signup.js');
const loginHandler = require('./login.js');

// Signup route
router.post('/signup', signUpHandler.signUp);

// Login route
router.post('/login', loginHandler.login);

module.exports = router;