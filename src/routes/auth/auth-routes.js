/**
 * author: Refaat
 * this router contains all the URI's for the authentication process
 */
const express = require('express');
const router = express.Router();

// import controller functions
const { authenticateUser } = require('../../controllers/auth-controller');

// import validation middleware
const { credentialSchema } = require('../../schematics/credential-schematic');
const { sanitizeBody } = require('../../middleware/sanitize-body');

/** auth api endpoints **/
router.post('/auth/login',
    sanitizeBody(credentialSchema),
    authenticateUser);

router.post('/auth/logout', (request, response) => {
    response.status(400).json({
        msg: 'todo: implementation'
    });
});


module.exports = router;