/**
 * author: Refaat
 * this router contains all the URI's for the student resource
 */
const express = require('express');
const router = express.Router();

// import roles
const { roles } = require('../../config/roles');

// import controller functions
const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../../controllers/student-controller');

// import validation middleware
const { studentSchema } = require('../../schematics/student-schematic');
const { sanitizeBody } = require('../../middleware/sanitize-body');
const { sanitizeId } = require('../../middleware/sanitize-id');

// import auth middleware
const { isAuthenticated } = require('../../middleware/is-authenticated');
const { isAuthorized } = require('../../middleware/is-authorized');

/** student api endpoints **/
router.get('/api/users/students',
    isAuthenticated,
    isAuthorized(roles.administrator, roles.instructor),
    getAllStudents);

router.get('/api/users/students/:id',
    sanitizeId,
    isAuthorized(roles.administrator, roles.instructor),
    getStudentById);

router.post('/api/users/students',
    sanitizeBody(studentSchema),
    isAuthorized(roles.administrator, roles.instructor),
    createStudent);

router.put('/api/users/students/:id',
    sanitizeBody(studentSchema),
    isAuthorized(roles.administrator, roles.instructor),
    updateStudent);

router.delete('/api/users/students/:id',
    sanitizeId,
    isAuthorized(roles.administrator, roles.instructor),
    deleteStudent);


module.exports = router;