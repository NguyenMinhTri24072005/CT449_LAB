class ApiError extends Error {
    constructor (statusCode, messgaes) {
        super();
        this.statusCode = statusCode;
        this.messages = messgaes;
    }
}

module.exports = ApiError;