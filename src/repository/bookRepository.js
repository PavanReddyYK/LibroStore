const { bookModel } = require('../models')
let { baseRepository } = require("./genericRepository");

baseRepository = baseRepository( bookModel );

module.exports = {
  ...baseRepository,
}