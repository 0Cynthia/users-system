/**
 * author: Refaat
 * this controller is a mediator between the preceptor-router & preceptor-service
 */
const preceptorService = require('../services/preceptor-service');

// this controller responds with an array of preceptor objects
const getAllPreceptors = async (request, response, next) => {
    try {
        const preceptors = await preceptorService.getAllPreceptors();
        response.status(200).json(preceptors);
    } catch (error) {
        next(error);
    }
}

// this controller responds with a preceptor object specified by an id
const getPreceptorById = async (request, response, next) => {
    try {
        const preceptor = await preceptorService.getAllPreceptors(request.params.id);
        response.status(200).json(preceptor);
    } catch (error) {
        next(error);
    }
}

// this controller creates and responds with a preceptor object
const createPreceptor = async (request, response, next) => {
    try {
        const preceptor = await preceptorService.createPreceptor(request.body);
        response.status(200).json(preceptor);
    } catch (error) {
        next(error);
    }
}

// this controller updates and responds with preceptor object
const updatePreceptor = async (request, response, next) => {
    try {
        const preceptor = await preceptorService.updatePreceptor(request.params.id, request.body);
        response.status(200).json(preceptor);
    } catch (error) {
        next(error);
    }
}

// this controller deletes and responds with preceptor object
const deletePreceptor = async (request, response, next) => {
    try {
        const preceptor = await preceptorService.deletePreceptor(request.params.id);
        response.status(200).json(preceptor);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllPreceptors, getPreceptorById, createPreceptor, updatePreceptor, deletePreceptor }