/**
 * author: Refaat
 * this module exports service functions for the authentication process
 */
const userService = require('../services/user-service');
const jwt = require('jsonwebtoken');

/**
 * this service tries to authenticated a user &,
 * generate a jwt with the users id if successful
 * @param {String} username ...
 * @param {String} password ...
 * @return a json-web-token with ...
 */
const authenticateUser = async (username, password) => {
    try {
        const user = await userService.getUserByUsername(username);

        if (user === null) {
            throw new Error('invalid username');
        } else {
            if (user.password === password) {
                // generate jwt with users mongo object id in the payload
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'secret');
                return token
            } else {
                throw new Error('invalid password');
            }
        }
    } catch (error) {
        throw error;
    }
}


module.exports = { authenticateUser }