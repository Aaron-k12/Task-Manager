
const { CustomAPIError } = require('../errors/custom-error')

/** Function allows error message to be customized
 * Function returns error that are instance of the child error class CustomAPIError
 */
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: 'Something went wrong, please try again later'})
}


module.exports = errorHandler