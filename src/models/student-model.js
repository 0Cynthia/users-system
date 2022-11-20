/**
 * author: Refaat
 * this module exports a Student model
 * Students *are* expicitly created
 * this model inherits from the User model and add's
 * attributes that are specific to a Student 
 */
const mongoose = require('mongoose');
const User = require('./user-model');

const Student = User.discriminator('Student', new mongoose.Schema({
    studentId: {
        type: String,
        required: [true, 'a student-id is required'],
        unique: true
    },

    role: {
        type: String,
        default: "1"
    }
}));


module.exports = Student;