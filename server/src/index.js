/**
 * this module is the entry point of the applicaiton
 * this module imports all libraries, routers, initializes the appication, and opens the port
 * author:  
 */

// import libraries & routers
require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import routers 

// create an instance of express 
const app = express();

// connect to mongodb
// mongoose.connect() etc etc

// initialize middleware
app.use(cors());            // enables cross orgin requests so React.js can communicate with this server
app.use(express.json());    // enables express to parse JSON payloads

// initialize routers

// initialize error-handling middleware

// hello, world 👋
app.get('/', (request, response) => {
    response.status(200).json({
        message: 'hello, world 👋'
    });
});

// open port 🐸
app.listen(process.env.PORT, () => {
    console.log(`listening @ http://localhost:${process.env.PORT}`);
});