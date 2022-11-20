/**
 * author: Refaat
 * this module exports a middleware function for checking if a user is
 * authorized to make a request to the route this middleware is binded to
 */
const userService = require('../services/user-service');

/**
 * this middleware checks if the authenticated users role matches the accepted roles in the functions parameters
 * @param  {...String} roles an array of user roles/permissions 
 */
const isAuthorized = (...roles) => {
    return async (request, response, next) => {
        try {
            // get token from auth header. validation has already been done in the isAuthenticated middleware
            const token = request.headers.authorization || request.headers.Authorization;

            // create user from jwt
            const user = await userService.getUserByJwt(token);

            // check if the users role matches a role in the roles parameter
            for (let i = 0; i <= roles.length; i++) {
                // authorized!
                if (user.role == roles[i]) {
                    return next();
                }
            }

            // not authorized :(
            return response.status(400).json({
                error: 'you are not authorized to make this request!'
            });
        } catch (error) {
            // pass to error handling middleware
            next(error);
        }
    }
}


module.exports = { isAuthorized }