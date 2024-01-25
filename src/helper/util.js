const { StatusCodes } = require('http-status-codes');

exports.ERROR = StatusCodes;

exports.formatErrorResponse = (errorMessage, status = "") => {
    let error = new Error(errorMessage)
    error.status = status
    return error;
};

exports.formatResponse = (result) => ({ "Items": result });

exports.isEmptyObject = (val) => this.isNullOrEmpty(val) || (val && Object.keys(val).length === 0);

exports.isNullOrEmpty = (str) => !str;