const http = require("http");
const express = require("express");
const app = express();
var timeout = require('connect-timeout');
app.use(timeout('20s'));
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');

require('./awsConfig');

const { bookController } = require('./src/controller')
const { validator } = require('./src/middleware');

var NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 100000,
}));

app.use(express.json({
    type: "application/json",
    limit: '50mb'
}));

app.use(cors());

app.get('/', (req, res) => { res.send('Welcome To Library!!') });

app.post('/addBookToLibrary', validator('addBookToLibrary'), bookController.addBookToLibrary);

app.post('/deleteBookById', validator('bookById'), bookController.deleteBookById);

app.post('/getBookById', validator('bookById'), bookController.getBookById);

app.post('/updateBookById', validator('updateBookById'), bookController.updateBookById);

app.use((err, req, res, next) => {
    console.log(`Path: ${req.path} -> Status Code: ${err.status || 500} -> Stack: ${err.stack}`)
    res.status(err.status || 500).send(err.message);
});

if (NODE_ENV === 'development') {
    app.set("port", process.env.PORT || 3001);

    let server = http.createServer(app);

    server.listen(app.get("port"), "0.0.0.0", () => {
        console.log(`Express server listening on http://localhost:${app.get("port")}`);
    });
} else {
    const serverless = require("serverless-http");
    module.exports.beam_server = serverless(app);
}