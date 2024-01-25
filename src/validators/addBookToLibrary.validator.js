const Joi = require('joi');

const addBookToLibrarySchema = Joi.object({
    author: Joi.string().required(),
    genre: Joi.string().required(),
    publishedYear: Joi.number().min(1000),
    title: Joi.string().required(),
});

module.exports = addBookToLibrarySchema;