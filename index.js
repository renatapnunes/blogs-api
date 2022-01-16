const express = require('express');
const routes = require('./routes');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
