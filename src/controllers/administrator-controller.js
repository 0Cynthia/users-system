/**
 * author: Refaat
 * this controller is a mediator between the administrator-router & administrator-service
 */
const administratorService = require('../services/administrator-service');

// this controller responds with an array of administrator objects
const getAllAdministrators = async (request, response, next) => {
    try {
        const administrators = await administratorService.getAllAdministrators();
        response.status(200).json(administrators);
    } catch (error) {
        next(error);
    }
}

// this controller responds with a administrator object specified by an id
const getAdministratorById = async (request, response, next) => {
    try {
        const administrator = await administratorService.getAdministratorById(request.params.id);
        response.status(200).json(administrator);
    } catch (error) {
        next(error);
    }
}

// this controller creates and responds with an administrator object
const createAdministrator = async (request, response, next) => {
    try {
        const administrator = await administratorService.createAdministrator(request.body);
        response.status(200).json(administrator);
    } catch (error) {
        next(error);
    }
}

// this controller updates and responds with an administrator object
const updateAdministrator = async (request, response, next) => {
    try {
        const administrator = await administratorService.updateAdministrator(request.params.id, request.body);
        response.status(200).json(administrator);
    } catch (error) {
        next(error);
    }
}

// this controller deletes and responds with an administrator object
const deleteAdministrator = async (request, response, next) => {
    try {
        const administrator = await administratorService.deleteAdministrator(request.params.id);
        response.status(200).json(administrator);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllAdministrators, getAdministratorById, createAdministrator, updateAdministrator, deleteAdministrator }