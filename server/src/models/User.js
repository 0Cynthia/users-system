/**
 * this module exports a User model
 * this model is the parent of every other User in the applicaiton
 * authors:  
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // can be a student, instructor, preceptor, or admin applicaitonId
    applicationId: {
        type: String,
        required: [true, 'an application is required']
    },

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
    role: {
        type: Integer,
        required: [true, 'A role is required!']
    },
});


module.exports = mongoose.model("User", UserSchema);