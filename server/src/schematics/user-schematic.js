/**
 * this module exports a Joi schematic for based on the User model,
 * used for validaing 
 */
const Joi = require('joi');

const UserSchematic = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    preferredName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required()               // todo: only accept the roles defined in the documentation
});


module.exports = { UserSchematic }