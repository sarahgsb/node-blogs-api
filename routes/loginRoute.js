const router = require('express').Router();

const { emailIsRequired, passwordIsRequired } = require('../middlewares/loginValidations');
const { isValidLogin } = require('../controllers/loginController');

router.post('/login', emailIsRequired, passwordIsRequired, isValidLogin);

module.exports = router;