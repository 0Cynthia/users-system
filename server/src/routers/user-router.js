/**
 * this module exports a router that contains all the endpoints for the User resource
 */
const express = require('express');
const router = express.Router();

// import controller functions
const { getAllUsers, getAllUsersByType, getUserById,
    createUserByType, updateUser, deleteUser } = require('../controllers/user-controller');

// import schematics
// import validation functions


// this route returns a list of all User objects
router.get('/api/users', 
    getAllUsers);

// this route returns a list of all specified User objects 
router.get('/api/users/:role/', 
    getAllUsersByType);

// this route returns a User object specified by a mongodb object id
router.get('/api/users/:id', 
    getUserById);

// this creates a new specified user & returns it
router.post('/api/users/:role/', 
    createUserByType);

// this route updates a specified user by its mongodb object id & returns it
router.put('/api/users/:id', 
    updateUser);

// this route deletes a specified user object & returns it
router.delete('/api/users/:id', 
    deleteUser);


module.exports = router;