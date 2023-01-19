/**
 * author: Refaat
 * this module exports a middleware function for validating that request.params.id is a mongodb object-id
 */
const ObjectId = require('mongoose').Types.ObjectId;

/**
 * this middleware validates that the id in the request parameters
 * is a mongodb object id
 */
const validateId = (request, response, next) => {
    if (ObjectId.isValid(request.params.id)) return next();         // passed
    return response.status(400).json({ message: 'invalid id' });    // failed
}


module.exports = { validateId }