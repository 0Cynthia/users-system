/**
 * this module exports a User model
 * this model is the parent of every other User in the applicaiton
 * authors:  
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

    // a list of Week object-id's
    // represents a one-to-many relationship in which one User can have many Weeks
    // i (Refaat) think that it should be in a child user model like student or preceptor >:D
    weeks: [{
        type: String,
    }]

    //
});


module.exports = mongoose.model("User", UserSchema);