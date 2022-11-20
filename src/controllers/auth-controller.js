/**
 * author: Refaat
 * this controller is a mediator between the auth-router & auth-service
 */
const authService = require('../services/auth-service');


// this controller genereates a jwt if the given user credentials are correct
const authenticateUser = async (request, response, next) => {
    try {  
        const token = await authService.authenticateUser(request.body.username, request.body.password);
        response.status(200).json({ token });
    } catch (error) {
        next(error);
    }
}


module.exports = { authenticateUser }