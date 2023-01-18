/**
 * this module exports a router that contains all the endpoints for the User resource
 * author:  
 */
const express = require('express');
const router = express.Router();

// import controller functions
// import validation functions
// declare endpoints

//
router.get('/api/users/admin', (request, response) => {response.send('to be implemented')});
router.get('/api/users/admin/:id', (request, response) => {response.send('to be implemented')});
router.post('/api/users/admin', (request, response) => {response.send('to be implemented')});
router.put('/api/users/admin/:id', (request, response) => {response.send('to be implemented')});
router.delete('/api/users/admin/:id', (request, response) => {response.send('to be implemented')});

//
router.get('/api/users/instructor', (request, response) => {response.send('to be implemented')});
router.get('/api/users/instructor/:id', (request, response) => {response.send('to be implemented')});
router.post('/api/users/instructor', (request, response) => {response.send('to be implemented')});
router.put('/api/users/instructor/:id', (request, response) => {response.send('to be implemented')});
router.delete('/api/users/instructor/:id', (request, response) => {response.send('to be implemented')});

//
router.get('/api/users/contractInstructor', (request, response) => {response.send('to be implemented')});
router.get('/api/users/contractInstructor/:id', (request, response) => {response.send('to be implemented')});
router.post('/api/users/contractInstructor', (request, response) => {response.send('to be implemented')});
router.put('/api/users/contractInstructor/:id', (request, response) => {response.send('to be implemented')});
router.delete('/api/users/contractInstructor/:id', (request, response) => {response.send('to be implemented')});

//
router.get('/api/users/preceptor', (request, response) => {response.send('to be implemented')});
router.get('/api/users/preceptor/:id', (request, response) => {response.send('to be implemented')});
router.post('/api/users/preceptor', (request, response) => {response.send('to be implemented')});
router.put('/api/users/preceptor/:id', (request, response) => {response.send('to be implemented')});
router.delete('/api/users/preceptor/:id', (request, response) => {response.send('to be implemented')});

//
router.get('/api/users/student', (request, response) => {response.send('to be implemented')});
router.get('/api/users/student/:id', (request, response) => {response.send('to be implemented')});
router.post('/api/users/student', (request, response) => {response.send('to be implemented')});
router.put('/api/users/student/:id', (request, response) => {response.send('to be implemented')});
router.delete('/api/users/student/:id', (request, response) => {response.send('to be implemented')});


module.exports = router;