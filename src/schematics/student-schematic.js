/**
 * author: Refaat
 * this module exports a Joi schematic for validating a student object
 * in the request body
 */
const Joi = require('joi');

const studentSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string(),
    studentId: Joi.string().required()
});


module.exports = { studentSchema }