/**
 * author: Refaat
 * this module exports service functions for the user resource
 */
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

/**
 * this service returns an array of user objects
 * @returns an array of user objects
 */
const getAllUsers = async () => {
    try {
        // query the db for all users
        const users = await User.find();
        return users
    } catch (error) {
        throw error;
    }
}

/**
 * this service returns a specified user object
 * @param {String} _id a mongodb object id
 * @returns an array of user objects
 */
const getUserById = async (_id) => {
    try {
        // query the db for the specified user
        const user = await User.findOne({ _id });

        // throw an error if it does not exist
        if (user === null) {
            throw new Error(`${username} does not exist!`);
        }

        return user;
    } catch (error) {
        throw error;
    }
}

/**
 * this service returns a specified user object
 * @param {String} username a users username
 * @return a user object
 */
const getUserByUsername = async (username) => {
    try {
        // query the db for the specified user
        const user = await User.findOne({ username });

        // throw an error if it does not exist
        if (user === null) {
            throw new Error(`${username} does not exist!`);
        }

        return user;
    } catch (error) {
        throw error;
    }
}


/**
 * this service returns a user object from a jwt
 * @param {String} token a json-web-token
 * @return a user object
 */
const getUserByJwt = async (token) => {
    try {
        // extract _id from the json-web-token
        const userId = jwt.verify(token, process.env.JWT_SECRET || 'secret');

        // find and return user with that id
        const user = await getUserById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = { getAllUsers, getUserById, getUserByJwt, getUserByUsername }