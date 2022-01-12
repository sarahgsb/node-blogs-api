const isValidNameLength = (request, response, next) => {
  const { displayName } = request.body;
  if (displayName.length < 8 || !displayName) {
    return response.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const isValidEmail = (request, response, next) => {
  const { email } = request.body;

  if (!email) {
    return response.status(400)
      .json({ message: '"email" is required' });
  }
  next();
};

const emailRegex = (request, response, next) => {
  const { email } = request.body;

  // Regex em https://grabthiscode.com/javascript/javascript-regex-email

  const regex = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
  if (!regex) {
    return response.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const isValidPassword = (request, response, next) => {
  const { password } = request.body;

  if (!password) {
    return response.status(400)
    .json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return response.status(400)
    .json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  isValidNameLength,
  isValidEmail,
  emailRegex,
  isValidPassword,
};