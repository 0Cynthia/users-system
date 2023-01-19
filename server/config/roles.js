/**
 * this module exports a declaration of the web applications permissions/roles as JSON
 * the User models should have a permission/role attribute that contain its respective permission/role
 * authors: Refaat
 */
const roles = {
    Administrator: 'Administrator',
    Instructor: 'Instructor',
    Preceptor: 'Preceptor',
    Student: 'Student',
}


module.exports = roles;