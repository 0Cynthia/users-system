/**
 * author: Refaat
 * this module exports a User model
 * a User is never expicitly created; its the parent for more specific users,
 * that will use this application
 */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'a username is required'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'a password is required'],
    }
});


userSchema.post('save', (error, document, next) => {
    // handle all unique key violations
    if (error.name === 'MongoServerError' && error.code === 11000) {
        const violatedKey = error.message.split(':')[3].substring(2).trim();
        console.log(violatedKey);
        next(new Error(`${violatedKey} must be unique!`));
    } else {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;