/**
 * author: Refaat
 * this module exports a Joi administrator for validating a preceptor object
 * in the request body
 */
const Joi = require('joi');

const administratorSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string(),
    administratorId: Joi.string().required()
});


module.exports = { administratorSchema }