const Validators = require('../validators')
const { util: { ERROR } } = require("../helper")

const validator = (validatorName) => {
    if (!Validators.hasOwnProperty(validatorName))
        throw new Error(`'${validatorName}' validator is not exist`)

    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };

    return async function (req, res, next) {
        try {
            await Validators[validatorName].validateAsync(req.body, options)
            next()
        } catch (err) {
            if (err.isJoi)
                return next({ status: ERROR.UNPROCESSABLE_ENTITY, message: `Validation error: ${err.details.map(x => x.message).join(', ')}` });
            next({ message: err.message || "Invalid request data. Please review request and try again." });
        }
    }
}

module.exports = validator;