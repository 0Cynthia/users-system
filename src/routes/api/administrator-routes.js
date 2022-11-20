/**
 * author: Refaat
 * this router contains all the URI's for the administrator resource
 */
const express = require('express');
const router = express.Router();

// import roles
const { roles } = require('../../config/roles');

// import controller functions
const { getAllAdministrators, getAdministratorById, createAdministrator, updateAdministrator, deleteAdministrator } = require('../../controllers/administrator-controller');

// import validation middleware
const { administratorSchema } = require('../../schematics/administrator-schematic');
const { sanitizeBody } = require('../../middleware/sanitize-body');
const { sanitizeId } = require('../../middleware/sanitize-id');

// import auth middleware
const { isAuthenticated } = require('../../middleware/is-authenticated');
const { isAuthorized } = require('../../middleware/is-authorized');


/** administrator api endpoints **/
router.get('/api/users/administrators',
    isAuthenticated,
    isAuthorized(roles.administrator),
    getAllAdministrators);

router.get('/api/users/administrators/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeId,
    getAdministratorById);

router.post('/api/users/administrators',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeBody(administratorSchema),
    createAdministrator);

router.put('/api/users/administrators/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeId,
    sanitizeBody(administratorSchema),
    updateAdministrator);

router.delete('/api/users/administrators/:id',
    isAuthenticated,
    isAuthorized(roles.administrator),
    sanitizeId,
    deleteAdministrator);


module.exports = router;