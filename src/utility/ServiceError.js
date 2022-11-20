/**
 * author: Refaat
 * this class extends the base Error class & adds an http status code
 * this error is meant to be thrown by the service layer,
 * processed by the conroller layer,
 * and handled in the error-handling middleware
 */
class ServiceError extends Error {
    /**
     * user generated constructor
     * @param {String} message an error message
     * @param {Integer} statuscode a HTTP status code
     */
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
    }
}