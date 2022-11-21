/**
 * author: Refaat
 * this module defines a Preceptor schema & exports a Preceptor model
 * Preceptor *are* expicitly created
 * this model inherits from the User model and add's
 * attributes that are specific to a Preceptor 
 */
const mongoose = require('mongoose');
const User = require('./user-model');

const Preceptor = User.discriminator('Preceptor', new mongoose.Schema({
    preceptorId: {
        type: String,
        required: [true, 'a preceptor id is required']
    },

    role: {
        type: String,
        default: "3"
    }
}));


module.exports = Preceptor;