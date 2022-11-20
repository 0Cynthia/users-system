/**
 * author: Refaat
 * this controller is a mediator between the student-router & student-service
 */
const studentService = require('../services/student-service');

// this controller responds with an array of student objects
const getAllStudents = async (request, response, next) => {
    try {
        const students = await studentService.getAllStudents();
        response.status(200).json(students);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

// this controller responds with a student object specified by an id
const getStudentById = async (request, response, next) => {
    try {
        const student = await studentService.getStudentById(request.params.id);
        response.status(200).json(student);
    } catch (error) {
        next(error);
    }
}

// this controller creates and responds with a user object
const createStudent = async (request, response, next) => {
    try {
        const student = await studentService.createStudent(request.body);
        response.status(200).json(student);
    } catch (error) {
        next(error);
    }
}

// this controller updates and responds with a user object
const updateStudent = async (request, response, next) => {
    try {
        const student = await studentService.updateStudent(request.params.id,request.body);
        response.status(200).json(student);
    } catch (error) {
        next(error);
    }
}

// this controller deletes and responds with a user object
const deleteStudent = async (request, response, next) => {
    try {
        const student = await studentService.deleteStudent(request.params.id);
        response.status(200).json(student);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent }