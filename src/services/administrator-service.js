/**
 * author: Refaat
 * this module exports service functions for the administrator resource
 */
const Administrator = require('../models/administrator-model');
const { hash } = require('../utility/hash');

/**
 * this service queries the database for an array of administrator objects
 * @returns an array of administrator objects
 */
const getAllAdministrators = async () => {
    try {
        // query the db for all administrators
        const administrators = Administrator.find();
        return administrators;
    } catch (error) {
        throw error;
    }
}

/**
 * this service queries the database for a administrator object specified by an id
 * @param {String} id a mongodb object id
 * @returns a administrator object
 */
const getAdministratorById = async (_id) => {
    try {
        // query the db for a specified administrator
        const administrator = await Administrator.findOne({ _id });

        // throw an error if it does not exist
        if (administrator === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return administrator;
    } catch (error) {
        throw error;
    }
}

/**
 * this service crreates a new administrator in the database
 * @param {JSON} administrator a administrator object
 * @returns the created administrator obkect
 */
const createAdministrator = async (administrator) => {
    try {
        // hash password before saving
        administrator.password = hash(administrator.password);

        // create & return an administrator
        const newAdministrator = await Administrator.create(administrator);
        return newAdministrator;
    } catch (error) {
        throw error;
    }
}

/**
 * this service updates an existing administrator object in the database
 * @param {String} id a mongodb object id
 * @param {JSON} administrator a administrator object
 * @returns the administrator object before it is updated
 */
const updateAdministrator = async (_id, administrator) => {
    try {
        // hash password before saving. does not matter if it is the same password or not
        administrator.password = hash(administrator.password);

        // update & return an existing administrator
        const oldAdministrator = await Administrator.findOneAndUpdate({ _id }, administrator);

        // throw an error if it does not exist
        if (oldAdministrator === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return oldAdministrator;
    } catch (error) {
        throw error;
    }
}

/**
 * this service deletes an existing administrator object in the databaes
 * @param {String} id a mongodb object id
 * @returns the deleted administrator object
 */
const deleteAdministrator = async (_id) => {
    try {
        // delete & return an existing administrator
        const deletedAdministrator = await Administrator.findOneAndDelete({ _id });

        // throw an error if it does not exist
        if (deletedAdministrator === null) {
            throw new Error(`${_id} does not exist!`);
        }

        return deletedAdministrator;
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllAdministrators, getAdministratorById, createAdministrator, updateAdministrator, deleteAdministrator }