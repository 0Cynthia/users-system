/**
 * author: Refaat
 * this module exports a middleware function for validating
 * a request body against a provided Joi schematic
 */

/**
 * this middleware validates a request body with the provided Joi schematic
 * @param {Object} schema 
 */
const sanitizeBody = (schema) => {
    return (request, response, next) => {
        // ...
        const result = schema.validate(request.body);

        // if error is not in the result object then the validation has passed
        if (result.error === undefined) {
            // success
            next();
        } else {
            response.status(400).json({
                msg: result.error.message
            });
        }
    }
}


module.exports = { sanitizeBody }