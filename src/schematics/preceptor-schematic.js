/**
 * author: Refaat
 * this module exports a Joi schematic for validating a preceptor object
 * in the request body
 */
const Joi = require('joi');

const preceptorSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string(),
    preceptorId: Joi.string().required()
});


module.exports = { preceptorSchema }