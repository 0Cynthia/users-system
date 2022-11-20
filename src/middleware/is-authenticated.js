/**
 * author: Refaat
 * this module exports a middleware function for checking if a user is
 * authenticated to make a request to the route this middleware is binded to
 */
const jwt = require("jsonwebtoken");

/**
 * this middleware treis to authenticate a json-web-token found in a requests authorization header
 */
const isAuthenticated = (request, response, next) => {
    try {
        // get token from the requests authorization header
        const token = request.headers.authorization || request.headers.Authorization;

        // validate that there is a token in the authorization header
        if (token === undefined) {
            return response.status(400).json({
                error: 'please provide an authorization token with your request!'
            });
        }

        // authentication successfull
        if (jwt.verify(token, process.env.JWT_SECRET || 'secret')) {
            return next();
        }

        // authentication failed
        return response.status(400).json({
            error: 'you are not authenticated to make this request!'
        });
    } catch (error) {
        // pass to error handling middleware
        next(error);
    }
}


module.exports = { isAuthenticated }