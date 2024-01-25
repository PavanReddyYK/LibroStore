const { baseController } = require("./genericController");
const { bookService } = require("../service");
const { util: { formatResponse } } = require('../helper');

const baseBookController = baseController(bookService);

const addBookToLibrary = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await bookService.addBookToLibrary(request);
        res.send(formatResponse(result));
    } catch (error) {
        next(error);
    }
};

const deleteBookById = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await bookService.deleteBookById(request);
        res.send(formatResponse(result));
    } catch (error) {
        next(error);
    }
};

const getBookById = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await bookService.getBookById(request);
        res.send(formatResponse(result));
    } catch (error) {
        next(error);
    }
};

const updateBookById = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await bookService.updateBookById(request);
        res.send(formatResponse(result));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    ...baseBookController,

    addBookToLibrary,
    deleteBookById,
    getBookById,
    updateBookById,
};
