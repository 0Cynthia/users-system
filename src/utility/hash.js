/**
 * author: Refaat
 * this module exports a utility function
 */
const bcrypt = require('bcrypt');

/**
 * this utility hashes a string
 * @param {String} toHash the string to be hashed
 * @return the hashed string 
 */
const hash = (toHash) => {
    try {
        const hash = bcrypt.hashSync(toHash, process.env.SALT_ROUNDS || 12);
        return hash;
    } catch (error) {
        throw error;
    }
}


module.exports = { hash }