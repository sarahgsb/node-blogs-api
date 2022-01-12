const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createNewToken = async (user) => {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);

  return token;
};

const isValidToken = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = await jwt.verify(authorization, SECRET);
    request.user = decoded.data;
    next();
  } catch (error) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createNewToken,
  isValidToken,
};
