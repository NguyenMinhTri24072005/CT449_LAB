class ApiError extends Error {
    constructor (statusCode, messgaes) {
        super();
        this.statusCode = statusCode;
        this.message = messgaes;
    }
}

module.exports = ApiError;