# users-system #
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)
[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
<hr></hr>

This repository contains a users api that allows authenticated & authorized users to preform CRUD operations against the user models. It features:
- json-web-token authentication
- role based authorization
- models utilitizing mongoose discriminators
- hashing & salting passwords


## Getting Started
### Prerequisites
1. node.js must be installed
2. must have access to a mongodb database (locally or cloud)

### Installing
clone repository
```
  C:\Users\Ether> git clone https://github.com/Ether2003/users-system .
```

run npm install in the root directory
```
  C:\Users\Ether> npm install
```

create a .env file in the root directory, and set `MONGODB_URI` to your mongodb connection string.
import users.json to the database. It is located in `/src/config/users.json`

**Note: all users in the users.json use "Password" as the password**  
```
# running npm install in the root directory...
C:/Users/Refaat/Desktop/users-system> npm install
```
```
# example with a local mongodb connection
MONGODB_URI="mongodb://localhost:27017/yourdatabase"
```
