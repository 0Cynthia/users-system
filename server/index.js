/**
 * this module is the entry point of the applicaiton
 * this module imports all libraries, routers, initializes the appication, and opens the port
 * author:
 */

// imports 
const express = require('express');
const loader = require('./src/utility/loader');
const app = express();

// load the web application 🔧
loader.load(app);

// hello, world 👋
app.get('/', (request, response) => {
    response.status(200).json({ message: 'hello, world 👋' });
});

// open port 🐸
app.listen(process.env.PORT, () => {
    console.log(`listening @ http://localhost:${process.env.PORT}`);
});
