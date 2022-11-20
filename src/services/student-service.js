/**
 * author: Refaat
 * this module exports service functions for the student resource
 */
const Student = require('../models/student-model');

/**
 * this service queries the database for an array of student objects
 * @returns an array of student objects
 * todo: pagination
 */
const getAllStudents = async () => {
    try {
        // query the db for all students
        const students = await Student.find();
        return students;
    } catch (error) {
        throw error;
    }
}

/**
 * this service queries the database for a student object specified by an id
 * @param {String} _id a mongodb object id
 * @returns a student object
 */
const getStudentById = async (_id) => {
    try {
        // query the db for the specifed student
        const student = await Student.findOne({ _id });

        // throw an error if it does not exist
        if (student === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return student;
    } catch (error) {
        throw error;
    }
}

/**
 * this service crreates a new student in the database
 * @param {JSON} student a student object
 * @returns the created student obkect
 */
const createStudent = async (student) => {
    try {
        // create and return a new student to the db
        const newStudent = await Student.create(student);
        return newStudent;
    } catch (error) {
        throw error;
    }
}

/**
 * this service updates an existing student object in the database
 * @param {String} _id a mongodb object id
 * @param {JSON} student a student object
 * @returns the student object before it is updated
 */
const updateStudent = async (_id, student) => {
    try {
        // update & return an existing student from the db
        const oldStudent = await Student.findOneAndUpdate({ _id }, student)

        // throw an error if it does not exist
        if (oldStudent === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return oldStudent;
    } catch (error) {
        throw error;
    }
}

/**
 * this service deletes an existing student object in the databaes
 * @param {String} _id a mongodb object id
 * @returns the deleted student object
 */
const deleteStudent = async (_id) => {
    try {
        // delete & return an existing student from the db
        const deletedStudent = await Student.findOneAndDelete({ _id });

        // throw an error if it does not exist
        if (deletedStudent === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return deletedStudent;
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent }