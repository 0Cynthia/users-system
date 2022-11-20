/**
 * author: Refaat
 * this module exports a Joi schematic for validating a login credentials
 * in the request body
 */
const Joi = require('joi');

const credentialSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});


module.exports = { credentialSchema }