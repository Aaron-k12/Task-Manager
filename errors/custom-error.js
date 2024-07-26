/** Child class of the JavaScript Error parent class */
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

/** function invokes constructor */
const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}


module.exports = { CustomAPIError, createCustomError }