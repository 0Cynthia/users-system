/**
 * author: Refaat
 * this module exports a Joi instructor for validating a preceptor object
 * in the request body
 */
const Joi = require('joi');

const instructorSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string(),
    intructorId: Joi.string().required()
});


module.exports = { instructorSchema }