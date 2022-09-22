const { Book } = require('../models');

const getAll = async () => Book.findAll();

const getById = async (id) => {
    const book = await Book.findByPk(id);
  
    return book;
  };

const createBook = async (title, author, pageQuantity) => {
    const newBook = await Book.create({ title, author, pageQuantity });
  
    return newBook;
  };

module.exports = {
    getAll,
    getById,
    createBook,
}