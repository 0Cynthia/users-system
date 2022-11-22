# users-system #
**author:** Refaat🌻  

### about ###
this repository is contains a users api that allows authenticated & authorized users to preform CRUD operations against the user models (Students, Instructors, Preceptors, and Administrators). this repository was built in node.js & express.js, using mongodb as a database.  
the repository implements:  
- json-web-token authentication
- role based authorization
- models utilitizing mongoose discriminators
- hasing & salting passwords
- protecting endpoints with authentication & authorization middleware

### prerequisites ###
1. node.js must be installed
2. must have access to a mongodb database (locally or cloud)

**build instructions**
1. clone repository
2. run npm install in the root directory
3. create a .env file in the root directory
4. set MONGODB_URI to your mongodb connection uri
5. import users.json to the database (/src/config/users.json)

**note: all users in the users.json use "Password" as the password**  
how to import json to mongodb: https://www.mongodb.com/docs/compass/current/import-export/

```
# running npm install in the root directory...
C:/Users/Refaat/Desktop/users-system> npm install
```
```
# example with a local mongodb connection
MONGODB_URI="mongodb://localhost:27017/yourdatabase"
```

**run instructions**
1. change to the src directory
2. run node .\index.js

```
C:/Users/Refaat/Desktop/users-system/src> node .\index.js
```
