const express = require('express');
const app = express();

app.use(express.json());

app.use('/sailors', require('./controllers/sailor'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
