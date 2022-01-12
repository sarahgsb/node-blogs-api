const router = require('express').Router();

const { isValidToken } = require('../middlewares/auth');

const { createNewCategory, getAllCategories } = require('../controllers/categoriesController');

router.post('/categories', isValidToken, createNewCategory);
router.get('/categories', isValidToken, getAllCategories);

module.exports = router;