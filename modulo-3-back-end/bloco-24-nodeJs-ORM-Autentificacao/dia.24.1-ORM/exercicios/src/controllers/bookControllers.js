const bookServices = require('../services/bookServices');

const getAllBooks = async (req, res) => {
    const books = await bookServices.getAll();
    console.log(books);
    return res.status(200).json(books);
}

module.exports = {
    getAllBooks,
}