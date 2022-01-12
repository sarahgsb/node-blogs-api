const router = require('express').Router();

const { isValidToken } = require('../middlewares/auth');

const { isValidTitle, isValidContent } = require('../middlewares/postValidations');
const { createNewPost, getAllPosts, isValidCategoryId } = require('../controllers/postController');

router.post('/post', isValidToken, isValidTitle, isValidContent, isValidCategoryId, createNewPost);
router.get('/post', isValidToken, getAllPosts);

module.exports = router;
