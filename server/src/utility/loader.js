/**
 * this module exports a load function that initializes the application
 */
// import libraries
require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import routers
const userRouter = require('../routers/user-router');


function load(app) {
    // connect to mongodb
    mongoose.set('strictQuery', false);
    mongoose
        .connect(process.env.MONGOOSE_URI)
        .then((connection) => console.log('successfully connected to the database!'))
        .catch((error) => console.log(error));

    // initialize middleware
    app.use(cors()); // enables cross orgin requests so React.js can communicate with this server
    app.use(express.json()); // enables express to parse JSON payloads

    // initialize routers
    app.use(userRouter);

    // initialize error-handling middleware
}


module.exports = { load }