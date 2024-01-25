const addBookToLibrary = require('./addBookToLibrary.validator')
const bookById = require('./BookById.validator')
const updateBookById = require('./updateBookById.validator')

module.exports = {
    addBookToLibrary,
    bookById,
    updateBookById
}