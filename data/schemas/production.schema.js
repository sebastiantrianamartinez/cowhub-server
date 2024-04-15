const Joi = require('joi');

const idSchema = Joi.number().integer();
const cowSchema = Joi.number().integer().positive(); // Assuming cow is also an integer
const dateSchema = Joi.date().iso(); // Assuming date is in ISO format
const amountSchema = Joi.number().positive();
const qualitySchema = Joi.string().max(500) // Assuming quality has specific values
const detailsSchema = Joi.string().max(1000).allow('', null);

// Schema for creating a new production record
const createProductionSchema = Joi.object({
    cow: cowSchema.required(),
    date: dateSchema,
    amount: amountSchema.required(),
    quality: qualitySchema.required(),
    details: detailsSchema
});

// Schema for getting a production record by its ID
const getProductionSchema = Joi.object({
    id: idSchema.required(),
});

// Schema for updating a production record by its ID
const updateProductionSchema = Joi.object({
    cow: cowSchema,
    date: dateSchema,
    amount: amountSchema,
    quality: qualitySchema,
    details: detailsSchema
}).or('cow', 'date', 'amount', 'quality', 'details');

// Schema for deleting a production record by its ID
const deleteProductionSchema = Joi.object({
    id: idSchema.required(),
});

module.exports = {
    createProductionSchema,
    getProductionSchema,
    updateProductionSchema,
    deleteProductionSchema
};
