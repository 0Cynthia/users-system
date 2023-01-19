/**
 * this module exports a middleware function for validating a request body against a provided Joi schematic
 * authors: Refaat
 */

/**
 * this middleware validates a request body with the provided Joi schematic
 * @param {Object} schematic a Joi schematic
 */
const validateBody = (schematic) => {
    return (request, response, next) => {
        // ...
        const result = schematic.validate(request.body);

        if (result.error === undefined) return next();                          // passed
        return response.status(400).json({ message: result.error.message });    // failed

    }
}


module.exports = { validateBody }