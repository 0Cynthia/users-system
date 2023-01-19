/**
 * this module exports a User model
 * this model is the parent of every other User in the applicaiton
 * authors: Refaat  
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // the users legal first name
    firstName: {
        type: String,
        required: [true, 'A first name is required!']
    },

    // the users legal last name
    lastName: {
        type: String,
        required: [true, 'A last name is required!']
    },

    // the users preffered name
    preferredName: {
        type: String,
    },

    // the users email address
    // todo: custom validation; verify the email against a regular expression
    email: {
        type: String,
        required: [true, 'An email address is required!']
    },

    // the users password
    password: {
        type: String,
        required: [true, 'A password is required!']
    },

    // the users role; see /server/config/permissions.js for more info
    // todo: validation to only accept the roles specified in the documentation
    role: {
        type: String,
        required: [true, 'A role is required!'],
        default: 'Student'
    },
});


module.exports = mongoose.model("User", UserSchema);