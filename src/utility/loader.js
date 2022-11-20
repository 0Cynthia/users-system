/**
 * author: Refaat
 * this module exports a utility function that
 * initializes the web application
 */
// import environment variables
require('dotenv').config({ path: '.././.env' });

// import libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import routers
const userRouter = require('../routes/api/user-routes');
const studentRouter = require('../routes/api/student-routes');
const instructorRouter = require('../routes/api/instructor-routes');
const preceptorRouter = require('../routes/api/preceptor-routes');
const administratorRouter = require('../routes/api/administrator-routes');
const authRouter = require('../routes/auth/auth-routes');

// import middleware
const errorHandler = require('../middleware/error-handler');


// this function initializes the web application
const load = (app) => {
    // connect to the database
    mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost:27017/usersystem')
        .then((connect) => console.log('connected to the database!'))
        .catch((error) => console.log('database connection failure!'))

    // middleware
    app.use(cors());
    app.use(express.json({ limit: '12mb' }));

    // initialize routers
    app.use(authRouter);
    app.use(userRouter);
    app.use(studentRouter);
    app.use(preceptorRouter);
    app.use(instructorRouter);
    app.use(administratorRouter);

    // more middleware...
    app.use(errorHandler);
}


module.exports = { load }