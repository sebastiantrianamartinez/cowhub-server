const Joi = require('joi');

const idSchema = Joi.number().integer();
const nameSchema = Joi.string().max(255);
const detailsSchema = Joi.string().max(255).allow('', null);

// Schema for creating a new bug (disease)
const createBugSchema = Joi.object({
    name: nameSchema.required(),
    details: detailsSchema
});

// Schema for getting a bug (disease) by its ID
const getBugSchema = Joi.object({
    id: idSchema.required(),
});

// Schema for updating a bug (disease) by its ID
const updateBugSchema = Joi.object({
    name: nameSchema,
    details: detailsSchema
}).or('name', 'details');

// Schema for deleting a bug (disease) by its ID
const deleteBugSchema = Joi.object({
    id: idSchema.required(),
});

module.exports = {
    createBugSchema,
    getBugSchema,
    updateBugSchema,
    deleteBugSchema
};
