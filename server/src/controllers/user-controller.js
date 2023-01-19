/**
 * this module exports controller functions for the User resource
 */
const User = require('../models/User');

/**
 * this controller returns a list of all User objects
 */
const getAllUsers = async (request, response) => {
    try {
        // query the database for all user object
        const users = await User.find();
        return response.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * this controller returns a list of all user objects specified by their role
 */
getAllUsersByType = async (request, response, next) => {
    try {
        // deconstruct user role from parameter list
        const { role } = request.params;

        // query the database for all users with the latter role
        const users = await User.find({ role });
        return response.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * this controller return a User object specified by a mongodb object id
 */
getUserById = async (request, response, next) => {
    try {
        // deconstruct user's mongodb object id from parameter list
        const _id = request.params.id;

        // query the database for a user specified by the mongodb object id the the request parameters
        const user = await User.findOne({ _id });

        // repsond with a message if user is null
        if (!user) return response.status(400).json({ message: 'user does not exist' });

        // respond with the specified user
        return response.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

/**
 * this controller creates a User object of a certian type and returns it
 */
createUserByType = async (request, response, next) => {
    try {
        const { role } = request.params; // deconstruct user role from the parameter list
        const body = request.body;       // deconstruct user object from the request body

        // assign a role key in the body object based on the role given in the parameters
        switch (role) {
            case 'ContractInstructor':
                body.role = 1;
                break;
            case 'Administrator':
                body.role = 2;
                break;
            case 'Instructor':
                body.role = 3;
                break;
            case 'Preceptor':
                body.role = 4;
                break;
            case 'Student':
                body.role = 5;
                break;
            default:
                return response.status(400).json({ message: 'that role does not exist!' });
        }

        // create user object
        const user = await User.create(body);
        return response.status(200).json(user);
    } catch (error) {
        return next(error);
    }
}

/**
 * this controller updates a User object by its mongodb object id
 */
updateUser = async (request, response, next) => {
    try {
        // deconstruct user's mongodb object id from parameter list
        const { id } = request.params;
        const body = request.body;

        // update a specified User
        const user = await User.findOneAndUpdate({ _id }, body);

        // repsond with a message if user is null
        if (!user) return response.status(400).json({ message: 'user does not exist' });

        // respond with the user object BEFORE it is updated
        return response.status(200).json(user);
    } catch (error) {
        return next(error);
    }
}

/**
 * this controller deletes a user object by its mongodb object id and returns it
 */
deleteUser = async (request, response, next) => {
    try {
        // deconstruct user's mongodb object id from parameter list
        const { id } = request.params;

        // delete the specified User
        const user = User.findOneAndDelete({ _id });

        // repsond with a message if user is null
        if (!user) return response.status(400).json({ message: 'user does not exist' });

        // respond with the deleted User object
        return response.status(200).json(user);
    } catch (error) {
        return next(error);
    }
}


module.exports = { getAllUsers, getAllUsersByType, getUserById, createUserByType, updateUser, deleteUser }