/**
 * author: Refaat
 * this controller is a mediator between the instructor-router & instructor-service
 */
const instructorService = require('../services/instructor-service');

// this controller responds with an array of instructor objects
const getAllInstructors = async (request, response, next) => {
    try {
        const instructors = await instructorService.getAllInstructors();
        response.status(200).json(instructors);
    } catch (error) {
        next(error);
    }
}

// this controller responds with a instructor object specified by an id
const getInstructorById = async (request, response, next) => {
    try {
        const instructor = await instructorService.getInstructorById(request.params.id);
        response.status(200).json(instructor);
    } catch (error) {
        next(error);
    }
}

// this controller creates and responds with an instructor object
const createInstructor = async (request, response, next) => {
    try {
        const instructor = await instructorService.createInstructor(request.body);
        response.status(200).json(instructor);
    } catch (error) {
        next(error);
    }
}

// this controller updates and responds with an instructor object
const updateInstructor = async (request, response, next) => {
    try {
        const instructor = await instructorService.updateInstructor(request.params.id, request.body);
        response.status(200).json(instructor);
    } catch (error) {
        next(error);
    }
}

// this controller deletes and responds with an instructor object
const deleteInstructor = async (request, response, next) => {
    try {
        const instructor = await instructorService.deleteInstructor(request.params.id);
        response.status(200).json(instructor);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllInstructors, getInstructorById, createInstructor, updateInstructor, deleteInstructor }