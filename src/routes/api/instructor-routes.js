/**
 * author: Refaat
 * this router contains all the URI's for the instructor resource
 */
const express = require('express');
const router = express.Router();

// import roles
const { roles } = require('../../config/roles');

// import controller functions
const { getAllInstructors, getInstructorById, createInstructor, updateInstructor, deleteInstructor } = require('../../controllers/instructor-controller');

// import validation middleware
const { instructorSchema } = require('../../schematics/instructor-schematic');
const { sanitizeBody } = require('../../middleware/sanitize-body');
const { sanitizeId } = require('../../middleware/sanitize-id');

// import auth middleware
const { isAuthenticated } = require('../../middleware/is-authenticated');
const { isAuthorized } = require('../../middleware/is-authorized');


/** instructor api endpoints **/
router.get('/api/users/instructors',
    isAuthenticated,
    isAuthorized(roles.administrator),
    getAllInstructors);

router.get('/api/users/instructors/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeId,
    getInstructorById);

router.post('/api/users/instructors',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeBody(instructorSchema),
    createInstructor);

router.put('/api/users/instructors/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeId,
    sanitizeBody(instructorSchema),
    updateInstructor);

router.delete('/api/users/instructors/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeId,
    deleteInstructor);


module.exports = router;