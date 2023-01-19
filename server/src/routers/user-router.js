/**
 * this module exports a router that contains all the endpoints for the User resource
 */
const express = require('express');
const router = express.Router();

// import controller functions
const { getAllUsers, getAllUsersByType, getUserById,
    createUserByType, updateUser, deleteUser } = require('../controllers/user-controller');

// import schematics
const { UserSchematic } = require('../schematics/user-schematic');

// import validation functions
const { validateBody } = require('../middleware/validateBody');
const { validateId } = require('../middleware/validateId');

// this route returns a list of all User objects
router.get('/api/users',
    getAllUsers);

// this route returns a list of all User objects of a specified role 
router.get('/api/users/role/:role/',
    getAllUsersByType);

// this route returns a User object specified by a mongodb object id
router.get('/api/users/:id',
    validateId,
    getUserById);

// this creates a new user object of a specified role & returns it
// this endpoint should only be accessed by admins for their admin work
// user registration will have its own route the :role logic will be in a jwt signup code
router.post('/api/users/:role/',
    validateBody(UserSchematic),
    createUserByType);

// this route updates an existing User object by its mongodb object id & returns it
router.put('/api/users/:id',
    validateId,
    validateBody(UserSchematic),
    updateUser);

// this route deletes an existing User object & returns it
router.delete('/api/users/:id',
    validateId,
    deleteUser);


module.exports = router;