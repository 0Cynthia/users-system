# users-system #
[![MongoDB](https://custom-icon-badges.demolab.com/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://custom-icon-badges.demolab.com/badge/-Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black)](https://expressjs.com/)
[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
<hr></hr>

### About ###
This repository contains a users api that allows authenticated & authorized users to preform CRUD operations against the user models. It features:
- json-web-token authentication
- role based authorization
- models utilitizing mongoose discriminators
- hashing & salting passwords

### Prerequisites ###
1. node.js must be installed
2. must have access to a mongodb database (locally or cloud)

**Installation instructions**
1. clone repository
2. run npm install in the root directory
3. create a .env file in the root directory
4. set `MONGODB_URI` to your mongodb connection uri
5. import users.json to the database. It is located in `/src/config/users.json`

**note: all users in the users.json use "Password" as the password**  
Guide to importing json in MongoDB: https://www.mongodb.com/docs/compass/current/import-export/

```
# running npm install in the root directory...
C:/Users/Refaat/Desktop/users-system> npm install
```
```
# example with a local mongodb connection
MONGODB_URI="mongodb://localhost:27017/yourdatabase"
```

**Run instructions**
1. change to the src directory
2. run node .\index.js
```
C:/Users/Refaat/Desktop/users-system/src> node .\index.js
```
