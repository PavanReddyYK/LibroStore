const { baseService } = require("./genericService");
const { bookRepository } = require('../repository');
const { constant: { Messages } } = require("../constants");
const { util } = require('../helper');

const baseBookService = baseService(bookRepository);

const addBookToLibrary = async (request) => {
    try {
        const { title, author, genre, publishedYear } = request;
        const bookData = {
            title,
            author,
            genre,
            publishedYear,
        };
        return await bookRepository.create(bookData);
    } catch (error) {
        throw util.formatErrorResponse(Messages.ERROR_ADDING_BOOK, util.ERROR.INTERNAL_SERVER_ERROR);
    }
};

const deleteBookById = async (request) => {
    try {
        const { id } = request;
        await bookRepository.deleteById(id);    // returns ?
    } catch (error) {
        throw util.formatErrorResponse(Messages.ERROR_DELETING_BOOK, util.ERROR.INTERNAL_SERVER_ERROR);
    }
};

const getBookById = async (request) => {
    try {
        const { id } = request;
        const book = await bookRepository.getById(id);
        if (!util.isEmptyObject(book)) {
            return book;
        } else {
            throw util.formatErrorResponse(Messages.BOOK_DOES_NOT_EXIST, util.ERROR.NOT_FOUND);
        }
    } catch (error) {
        throw util.formatErrorResponse(Messages.ERROR_GETTING_BOOK, util.ERROR.INTERNAL_SERVER_ERROR);
    }
};

const updateBookById = async (request) => {
    try {
        const { id, title, author, genre, publishedYear } = request;
        const bookData = {
            title,
            author,
            genre,
            publishedYear,
        };
        const updatedBook = await bookRepository.update(request);
        if (!util.isEmptyObject(updatedBook)) {
            return updatedBook;
        } else {
            throw util.formatErrorResponse(Messages.BOOK_DOES_NOT_EXIST, util.ERROR.NOT_FOUND);
        }
    } catch (error) {
        throw util.formatErrorResponse(Messages.ERROR_UPDATING_BOOK, util.ERROR.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    ...baseBookService,
    
    addBookToLibrary,
    getBookById,
    updateBookById,
    deleteBookById,
};