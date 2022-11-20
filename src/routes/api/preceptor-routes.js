/**
 * author: Refaat
 * this router contains all the URI's for the preceptor resource
 */
const express = require('express');
const router = express.Router();

// import roles
const { roles } = require('../../config/roles');

// import controller functions
const { getAllPreceptors, getPreceptorById, createPreceptor, updatePreceptor, deletePreceptor } = require('../../controllers/preceptor-controller');

// import validation middleware
const { preceptorSchema } = require('../../schematics/preceptor-schematic');
const { sanitizeBody } = require('../../middleware/sanitize-body');
const { sanitizeId } = require('../../middleware/sanitize-id');

// import auth middleware
const { isAuthenticated } = require('../../middleware/is-authenticated');
const { isAuthorized } = require('../../middleware/is-authorized');


/** preceptor api endpoints **/
router.get('/api/users/preceptors',
    isAuthenticated,
    isAuthorized(roles.administrator, roles.instructor),
    getAllPreceptors);

router.get('/api/users/preceptors/:id',
    isAuthenticated,
    isAuthorized(roles.administrator, roles.instructor),
    sanitizeId,
    getPreceptorById);

router.post('/api/users/preceptors',
    isAuthenticated,
    isAuthorized(roles.administrator, roles.instructor),
    sanitizeBody(preceptorSchema),
    createPreceptor);

router.put('/api/users/preceptors/:id',
    isAuthenticated,
    isAuthorized(roles.administrator, roles.instructor),
    sanitizeId,
    sanitizeBody(preceptorSchema),
    updatePreceptor);

router.delete('/api/users/preceptors/:id',
    isAuthenticated,
    isAuthorized(roles.administrator, roles.instructor),
    sanitizeId,
    deletePreceptor);


module.exports = router;