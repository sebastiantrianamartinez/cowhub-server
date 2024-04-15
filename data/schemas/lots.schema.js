const Joi = require('joi');

const idSchema = Joi.number().integer();
const nameSchema = Joi.string().max(255);
const detailsSchema = Joi.string().max(65535).allow('', null); // Assuming text type maps to 65535 characters
const dateSchema = Joi.date().timestamp();

// Schema for creating a new lot
const createLotSchema = Joi.object({
    name: nameSchema.required(),
    details: detailsSchema.required(),
    date: dateSchema.required()
});

// Schema for getting a lot by its ID
const getLotSchema = Joi.object({
    id: idSchema.required(),
});

// Schema for updating a lot by its ID
const updateLotSchema = Joi.object({
    name: nameSchema,
    details: detailsSchema,
    date: dateSchema
}).or('name', 'details', 'date');

// Schema for deleting a lot by its ID
const deleteLotSchema = Joi.object({
    id: idSchema.required(),
});

module.exports = {
    createLotSchema,
    getLotSchema,
    updateLotSchema,
    deleteLotSchema
};
