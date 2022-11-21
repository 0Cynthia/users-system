/**
 * author: Refaat
 * this module defines an administrator schema & exports an Administrator model
 * Administrators *are* expicitly created
 * this model inherits from the User model and add's
 * attributes that are specific to an Administrator 
 */
const mongoose = require('mongoose');
const User = require('./user-model');

const Administrator = User.discriminator('Administrator', new mongoose.Schema({
    administratorId: {
        type: String,
        required: [true, 'an administrator id is required']
    },

    role: {
        type: String,
        default: "4"
    }
}));


module.exports = Administrator;