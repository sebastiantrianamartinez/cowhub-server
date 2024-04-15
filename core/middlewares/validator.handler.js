const boom = require('@hapi/boom');

function validatorHandler(schema, propriety){
    return (req, res, next) => {
        const data = req[propriety];
        const { error } = schema.validate(data,  { abortEarly: false });
        if(error){
            next(boom.badRequest(error || 'Validation Error'));
        }
        else{
            next();
        }
    }
}

module.exports = {validatorHandler};
