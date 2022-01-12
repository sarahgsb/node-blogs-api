const express = require('express');
require('dotenv').config();

const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');
const categoriesRouter = require('./routes/categoriesRoute');
const postRouter = require('./routes/postRoute');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

app.use(userRouter);
app.use(loginRouter);
app.use(categoriesRouter);
app.use(postRouter);
