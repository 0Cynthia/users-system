/**
 * author: Refaat
 * this module exports a Instructor model
 * Instructors *are* expicitly created
 * this model inherits from the User model and add's
 * attributes that are specific to a Instructor 
 */
const mongoose = require('mongoose');
const User = require('./user-model');

const Instructor = User.discriminator('Instructor', new mongoose.Schema({
    instructorId: {
        type: String,
        required: [true, 'an instructor id is required'],
        unique: true
    },

    role: {
        type: String,
        default: "2"
    }
}));


module.exports = Instructor;