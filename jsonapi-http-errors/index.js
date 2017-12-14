const HttpStatus = require('http-status-codes');

const errorMiddleware = (errCode, req, res, next) => {
    const err = new Error(errCode);
    const errorDump = Object.keys(err).map((elem) => err[elem]);
    const errorResponse = {
        errors: [
            {
                title: err.message,
                status: HttpStatus[errCode] || errCode.status || errCode.code,
                detail: HttpStatus.getStatusText(HttpStatus[errCode] || HttpStatus.INTERNAL_SERVER_ERROR),
                source: err.stack,
                meta: {
                    code: err.code,
                    stack: errorDump.length > 0 ? errorDump : undefined
                }
            }
        ]
    };
    res.status(errorResponse.errors[0].status);
    res.json(errorResponse);
};

module.exports = errorMiddleware;