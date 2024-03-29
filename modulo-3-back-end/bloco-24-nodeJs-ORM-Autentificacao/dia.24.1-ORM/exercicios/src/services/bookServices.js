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

  const updateBook = async (id, title, author, pageQuantity) => {
    const [updatedBook] = await Book.update(
      { title, author, pageQuantity},
      { where: { id } },
    );
    console.log(updatedBook)

    return updatedBook;
  };

  const deleteBook = async (id) => {
    const book = await Book.destroy(
      { where: { id } },
    );
      return book;
  };

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
}