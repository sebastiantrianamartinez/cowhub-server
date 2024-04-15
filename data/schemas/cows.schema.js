const Joi = require('joi');

const idSchema = Joi.number().integer();
const codeSchema = Joi.string().max(20);
const nameSchema = Joi.string().max(255);
const raceSchema = Joi.number().integer();
const sexSchema = Joi.number().integer();
const colorSchema = Joi.string().max(255);
const detailsSchema = Joi.string().max(255).allow('', null);

// Esquema para crear una nueva vaca
const createCowSchema = Joi.object({
    code: codeSchema.required(),
    name: nameSchema.required(),
    race: raceSchema.required(),
    sex: sexSchema.required(),
    color: colorSchema.required(),
    details: detailsSchema
});

// Esquema para obtener una vaca por su ID
const getCowSchema = Joi.object({
    id: idSchema.required(),
});

// Esquema para actualizar una vaca por su ID
const updateCowSchema = Joi.object({
    code: codeSchema,
    name: nameSchema,
    race: raceSchema,
    sex: sexSchema,
    color: colorSchema,
    details: detailsSchema
}).or('code', 'name', 'race', 'sex', 'color', 'details');

// Esquema para eliminar una vaca por su ID
const deleteCowSchema = Joi.object({
    id: idSchema.required(),
});

module.exports = {
    createCowSchema,
    getCowSchema,
    updateCowSchema,
    deleteCowSchema
};
