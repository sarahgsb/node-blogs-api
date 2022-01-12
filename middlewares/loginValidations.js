const passwordIsRequired = (request, response, next) => {
  const { password } = request.body;

  if (!password && password !== '') {
    return response.status(400)
    .json({ message: '"password" is required' });
  }
  if (password === '') {
    return response.status(400)
    .json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const emailIsRequired = (request, response, next) => {
  const { email } = request.body;

    if (!email && email !== '') {
    return response.status(400)
      .json({ message: '"email" is required' });
  }
  if (email === '') {
    return response.status(400)
    .json({ message: '"email" is not allowed to be empty' });
  }
  next();
};

module.exports = { emailIsRequired, passwordIsRequired };