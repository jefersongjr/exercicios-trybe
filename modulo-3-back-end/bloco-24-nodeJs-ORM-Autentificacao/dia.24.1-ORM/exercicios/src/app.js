const express = require('express');
const bookControllers = require('../src/controllers/bookControllers')

const app = express();

app.use(express.json());

app.get('/books', bookControllers.getAllBooks);
app.get('/books/:id', bookControllers.getBookById);
app.post('/books', bookControllers.createNewBook);
app.put('/books/:id', bookControllers.updateBook);




module.exports = app;