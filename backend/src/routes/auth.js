const router = require('express').Router();
const controller = require('../controllers/authController');
const validation = require('../validations/userValidation');

const { signup, signin, signout } = controller;
const { validateSignup, validateSignin } = validation;

// POST /auth/signup
router.post('/signup', validateSignup, signup); // register
// POST /auth/signin
router.post('/signin', validateSignin, signin); // log in
// POST /auth/signout
router.post('/signout', signout); // log out

module.exports = router;