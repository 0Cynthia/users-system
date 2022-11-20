/**
 * author: Refaat
 * this router contains all the URI's for the user resource
 */
const express = require('express');
const router = express.Router();

// import roles
const { roles } = require('../../config/roles');

// import controller functions
const { getAllUsers, getUserById }= require('../../controllers/user-controller');

// import validation middleware
const { sanitizeId } = require('../../middleware/sanitize-id');

// import auth middleware
const { isAuthenticated } = require('../../middleware/is-authenticated');
const { isAuthorized } = require('../../middleware/is-authorized');


/** user api endpoints **/
router.get('/api/users/all',
    isAuthenticated,
    isAuthorized(roles.administrator),
    getAllUsers);

router.get('/api/users/all/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    getUserById);


module.exports = router;