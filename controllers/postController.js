const { BlogPost, User, Category } = require('../models');

const createNewPost = async (request, response) => {
  const { title, content } = request.body;
  const { email } = request.user;

  const { id } = await User.findOne({ where: { email } });

  const post = await BlogPost.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });
  return response.status(201).json(post);
};

const getAllPosts = async (_request, response) => {
  try {
    const all = await BlogPost.findAll({ include: [{ all: true }] });
    return response.status(200).json(all);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const isValidCategoryId = async (request, response, next) => {
  const { categoryIds } = request.body;

  if (!categoryIds) {
    return response.status(400)
    .json({ message: '"categoryIds" is required' });
  }
  const id = await Category.findOne({ where: { id: categoryIds[0] } });
  if (!id) { 
    return response.status(400)
    .json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  createNewPost,
  getAllPosts,
  isValidCategoryId,
};