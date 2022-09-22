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
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
   } catch (error) {
    return null;
   }
}
const createNewBook = async (req, res) => {
    try {
      const { title, author, pageQuantity } = req.body;
      const newBook = await bookServices.createBook(title, author, pageQuantity);
  
      return res.status(201).json(newBook);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'error' });
    }
  };

  const updateBook = async (req, res) => {
    try {
      const { title, author, pageQuantity } = req.body;
      const { id } = req.params;
      const updatedBook = await bookServices.updateBook(id, title, author, pageQuantity);
  
      if (!updatedBook) return res.status(404).json({ message: 'Book not found!' });
  
      return res.status(200).json({ message: 'Book updated!!' });    
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'error' });
    }
  };

  const deleteBooks = async (req, res) => {
    try {
      const { id } = req.params;
      await bookServices.deleteBook(id);
  
      return res.status(200).json({ message: 'Book was been removed!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  };



module.exports = {
    getAllBooks,
    getBookById,
    createNewBook,
    updateBook,
    deleteBooks,
}