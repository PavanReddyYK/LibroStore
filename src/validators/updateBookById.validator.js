const Joi = require('joi');

const updateBookByIdSchema = Joi.object({
    author: Joi.string(),
    genre: Joi.string(),
    id: Joi.string().uuid().required(),
    publishedYear: Joi.number().min(1000).max(new Date().getFullYear()),
    title: Joi.string(),
});

module.exports = updateBookByIdSchema;