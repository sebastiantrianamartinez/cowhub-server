function boomErrorHandler(error, req, res, next) {
    if (error.isBoom) {
        const { output } = error;
        res.status(output.statusCode)
            .json({
                statusCode: output.statusCode,
                error: output.payload.error,
                message: output.payload.message
            });
    } else {
        next(error); // Pasa al siguiente middleware si el error no es de tipo Boom
    }
}

function errorHandler(error, req, res, next) {
    res.status(500)
        .json({
            message: "" + error.message,
            stack: error.stack
        });
}


module.exports = { errorHandler, boomErrorHandler };
