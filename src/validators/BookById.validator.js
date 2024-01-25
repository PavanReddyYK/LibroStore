const Joi = require('joi');

const bookByIdSchema = Joi.object({
    id: Joi.string().uuid().required(),
});

module.exports = bookByIdSchema;