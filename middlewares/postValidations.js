const isValidTitle = (request, response, next) => {
    const { title } = request.body;

    if (!title) {
      return response.status(400)
      .json({ message: '"title" is required' });
    }
    next();
  };
  
  const isValidContent = (request, response, next) => {
    const { content } = request.body;

    if (!content) {
      return response.status(400)
      .json({ message: '"content" is required' });
    }
    next();
  };

  module.exports = { isValidTitle, isValidContent };