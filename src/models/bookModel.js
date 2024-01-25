const dynamoose = require("dynamoose");
const { v4: uuidv4 } = require('uuid');
const { tables: { TABLE_NAMES }} = require('../constants');

const bookSchema = new dynamoose.Schema(
    {
        "id": { type: String, default: () => uuidv4(), hashKey: true },
        "title": { type: String, required: true },
        "author": { type: String, required: true },
        "genre": { type: String },
        "publishedYear": { type: Number },
    },
    {
        "timestamps": true,
    }
);

const bookModel = dynamoose.model(TABLE_NAMES.BOOKS_TABLE, bookSchema, {
    create: true,
    throughput: "ON_DEMAND",
});

module.exports = bookModel