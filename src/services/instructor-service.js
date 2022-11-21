/**
 * author: Refaat
 * this module exports service functions for the instructor resource
 */
const Instructor = require('../models/instructor-model');
const { hash } = require('../utility/hash');

/**
 * this service queries the database for an array of instructor objects
 * @returns an array of instructor objects
 * todo: pagination
 */
const getAllInstructors = async () => {
    try {
        // query the db for all instructors
        const instrcutors = await Instructor.find();
        return instrcutors;
    } catch (error) {
        throw error;
    }
}

/**
 * this service queries the database for a instructor object specified by an id
 * @param {String} id a mongodb object id
 * @returns a instructor object
 */
const getInstructorById = async (_id) => {
    try {
        // query the db for the specified instructor
        const instructor = await Instructor.findOne({ _id });

        // throw an error if it does not exist
        if (instructor === null) {
            throw new Error(`${_id} does not exist!`);
        }
        return instructor;
    } catch (error) {
        throw error;
    }
}

/**
 * this service crreates a new instructor in the database
 * @param {JSON} instructor a instructor object
 * @returns the created instructor obkect
 */
const createInstructor = async (instructor) => {
    try {
        // hash password before saving
        instructor.password = hash(instructor.password);

        // create & return an instructor
        const newInstructor = await Instructor.create(instructor);
        return newInstructor;
    } catch (error) {
        throw error;
    }
}

/**
 * this service updates an existing instructor object in the database
 * @param {String} id a mongodb object id
 * @param {JSON} instructor a instructor object
 * @returns the instructor object before it is updated
 */
const updateInstructor = async (_id, instructor) => {
    try {
        // hash password before saving. does not matter if it is the same password or not
        instructor.password = hash(instructor.password);

        // update & return an existing instructor
        const oldInstructor = await Instructor.findOneAndUpdate({ _id }, instructor);

        // throw an error if it does not exist
        if (oldInstructor === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return oldInstructor;
    } catch (error) {
        throw error;
    }
}

/**
 * this service deletes an existing instructor object in the databaes
 * @param {String} id a mongodb object id
 * @returns the deleted instructor object
 */
const deleteInstructor = async () => {
    try {
        // delete & return an existing instructor
        const deletedInstructor = await Instructor.findOneAndDelete({ _id });

        // throw an error if it does not exist
        if (deletedInstructor === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return deletedInstructor;
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllInstructors, getInstructorById, createInstructor, updateInstructor, deleteInstructor }