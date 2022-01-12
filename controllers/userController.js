const { createNewToken } = require('../middlewares/auth');
const { User } = require('../models');

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createNewUser = async (request, response) => {
  const { displayName, password, email, image } = request.body;

  const login = { password, email };
  const user = await findByEmail(email);

  if (user) {
    return response.status(409)
    .json({ message: 'User already registered' });
  }

  const token = await createNewToken(login);

  await User.create({ displayName, password, email, image });
  return response.status(201).json({ token });
};

const getAllUsers = async (_request, response) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id', 'displayName', 'email', 'image',
      ],
    });
    return response.status(200).json(users);
  } catch (error) {
    return response.status(404).json({ message: error.message });
  }
};

const getUserById = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await User.findOne({ where: { id } });

    if (!user) {
 return response.status(404)
    .json({ message: 'User does not exist' }); 
}
    return response.status(200).json(user);
  } catch (error) {
    return response.status(404)
    .json({ message: 'User does not exist' });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};