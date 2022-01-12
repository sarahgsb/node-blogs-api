const router = require('express').Router();

const { isValidEmail, emailRegex, isValidNameLength,
    isValidPassword } = require('../middlewares/userValidations');
const { createNewUser, getAllUsers, getUserById } = require('../controllers/userController');

const { isValidToken } = require('../middlewares/auth');

router.post('/user', isValidEmail, emailRegex, isValidNameLength, isValidPassword, createNewUser);
router.get('/user', isValidToken, getAllUsers);
router.get('/user/:id', isValidToken, getUserById);

module.exports = router;