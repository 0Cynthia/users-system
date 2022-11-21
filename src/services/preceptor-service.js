/**
 * author: Refaat
 * this module exports service functions for the preceptor resource
 */
const Preceptor = require('../models/preceptor-model');
const { hash } = require('../utility/hash');

/**
 * this service queries the database for an array of preceptor objects
 * @returns an array of preceptor objects
 */
const getAllPreceptors = async () => {
    try {
        // query the db for all preceptors
        const preceptors = await Preceptor.find();
        return preceptors;
    } catch (error) {
        throw error;
    }
}

/**
 * this service queries the database for a preceptor object specified by an id
 * @param {String} id a mongodb object id
 * @returns a preceptor object
 */
const getPreceptorById = async (_id) => {
    try {
        // query the db for a specified preceptor
        const preceptor = await Preceptor.findOne({ _id });

        // throw an error if it does not exist
        if (preceptor === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return preceptor;
    } catch (error) {
        throw error;
    }
}

/**
 * this service crreates a new preceptor in the database
 * @param {JSON} preceptor a preceptor object
 * @returns the created preceptor obkect
 */
const createPreceptor = async (preceptor) => {
    try {
        // hash password before saving
        preceptor.password = hash(preceptor.password);

        // create & return a preceptor
        const newPreceptor = await Preceptor.create(preceptor);
        return newPreceptor;
    } catch (error) {
        throw error;
    }
}

/**
 * this service updates an existing preceptor object in the database
 * @param {String} id a mongodb object id
 * @param {JSON} preceptor a preceptor object
 * @returns the preceptor object before it is updated
 */
const updatePreceptor = async (_id, preceptor) => {
    try {
        // hash password before saving. does not matter if it is the same password or not
        preceptor.password = hash(preceptor.password);

        // update & return an existing preceptor
        const oldPreceptor = await Preceptor.findOneAndUpdate({ _id }, preceptor);

        // throw an error if it does not exist
        if (oldPreceptor === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return oldPreceptor;
    } catch (error) {
        throw error;
    }
}

/**
 * this service deletes an existing preceptor object in the databaes
 * @param {String} id a mongodb object id
 * @returns the deleted preceptor object
 */
const deletePreceptor = async (_id) => {
    try {
        // delete & return an existing preceptor
        const deletedPreceptor = await Preceptor.findOneAndDelete({ _id });

        // throw an error if it does not exist
        if (deletedPreceptor === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return deletedPreceptor;
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllPreceptors, getPreceptorById, createPreceptor, updatePreceptor, deletePreceptor }