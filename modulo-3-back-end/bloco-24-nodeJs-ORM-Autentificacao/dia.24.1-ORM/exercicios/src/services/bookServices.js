const { Book } = require('../models');

const getAll = async () => Book.findAll();

const getById = async (id) => {
    const book = await Book.findByPk(id);
  
    return book;
  };

module.exports = {
    getAll,
    getById,
}