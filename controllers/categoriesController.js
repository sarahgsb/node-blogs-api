const { Category } = require('../models');

const createNewCategory = async (request, response) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400)
    .json({ message: '"name" is required' });
  }

  const category = await Category.create({ name });

  return response.status(201).json(category);
};

const getAllCategories = async (_request, response) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });

    return response.status(200).json(categories);
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
};

module.exports = {
  createNewCategory,
  getAllCategories,
};