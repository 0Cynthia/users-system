/**
 * author: Refaat
 * this controller is a mediator between the user-router & user-service
 */
const userService = require('../services/user-service');

// this controller responds with an array of user objects, of every role 
const getAllUsers = async (request, response, next) => {
    try {
        const users = await userService.getAllUsers();
        response.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

// this controller responds with an array of user objects, of every role 
const getUserById = async (request, response, next) => {
    try {
        const user = await userService.getUserById();
        response.status(200).json(user);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllUsers, getUserById }