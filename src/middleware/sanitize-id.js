/**
 * author: Refaat
 * this module exports a middleware function for validating a
 * parameter id for mongodb object a id
 */
const ObjectId = require('mongoose').Types.ObjectId;

/**
 * this middleware validates that the id in the request parameters
 * is a mongodb object id
 */
const sanitizeId = (request, response, next) => {
    if (ObjectId.isValid(request.params.id)) {
        return next();
    }

    return response.status(400).json({
        msg: 'invalid id'
    });
}


module.exports = { sanitizeId }