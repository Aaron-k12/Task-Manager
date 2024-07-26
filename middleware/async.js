/** Async Wrapper function handles all errors in try catch block
 * Takes a controller as an argument and passes express (req, res, next) to it
 * Function catches and error from the controller and passes it using next() to the error-handler middleware
 */

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } catch (error) {
        next(error)
      }
    }
  }
  
  module.exports = asyncWrapper
  