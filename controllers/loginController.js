const { createNewToken } = require('../middlewares/auth');
const { User } = require('../models');

const findUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
  };

const isValidLogin = async (request, response) => {
    const { password, email } = request.body;
  
    const login = { password, email };
    const user = await findUserByEmail(email);
  
    if (!user) {
      return response.status(400)
      .json({ message: 'Invalid fields' });
    }
  
    const token = await createNewToken(login);
  
    return response.status(200).json({ token });
  };

  module.exports = { isValidLogin };