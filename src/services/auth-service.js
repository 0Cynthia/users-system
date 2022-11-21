/**
 * author: Refaat
 * this module exports service functions for the authentication process
 */
const userService = require('../services/user-service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * this service tries to authenticated a user &,
 * generate a jwt with the users id if successful
 * @param {String} username a users username
 * @param {String} password a users password
 * @return a json-web-token with ...
 */
const authenticateUser = async (username, password) => {
    try {
        const user = await userService.getUserByUsername(username);

        if (user === null) {
            throw new Error('invalid username');
        } else {
            // todo: compare hashed passwords
            if (await bcrypt.compare(password, user.password)) {
                // generate jwt with the users mongo object id in the payload
                const token = jwt.sign(
                    { _id: user._id },                   // payload
                    process.env.JWT_SECRET || 'secret',  // secret signature
                    { expiresIn: '1h'});                 // options
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