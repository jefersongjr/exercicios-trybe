const bookServices = require('../services/bookServices');

const getAllBooks = async (req, res) => {
    const books = await bookServices.getAll();
    console.log(books);
    return res.status(200).json(books);
}

const getBookById = async (req, res) => {
   try {
    const { id } = req.params;
    const book = await bookServices.getById(id);
    console.log('ID:', id);
    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(book);
   } catch (error) {
    return null;
   }
}

module.exports = {
    getAllBooks,
    getBookById,
}