const express = require('express');
const Joi = require('joi');
const router = express.Router();
const ProductionService = require('./../services/production.service');
const { createProductionSchema, getProductionSchema, updateProductionSchema, deleteProductionSchema } = require('./../data/schemas/production.schema');

const productionService = new ProductionService();

// GET all productions
router.get('/', async (req, res, next) => {
    try {
        const productions = await productionService.getAllProductions();
        res.json(productions);
    } catch (error) {
        next(error);
    }
});

// GET a production by its ID
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        // Validate ID parameter using Joi schema
        await getProductionSchema.validateAsync({ id });
        const production = await productionService.getProductionById(id);
        res.json(production);
    } catch (error) {
        next(error);
    }
});

router.get('/cow/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        // Validate ID parameter using Joi schema
        await getProductionSchema.validateAsync({ id });
        const production = await productionService.getProductionByCow(id);
        res.json(production);
    } catch (error) {
        next(error);
    }
});

// POST create a new production
router.post('/', async (req, res, next) => {
    const { body } = req;
    try {
        // Validate request body using Joi schema
        await createProductionSchema.validateAsync(body);

        const newProduction = await productionService.createProduction(body);
        res.status(201).json(newProduction);
    } catch (error) {
        next(error);
    }
});

// PUT update a production by its ID
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        // Validate ID parameter using Joi schema
        await getProductionSchema.validateAsync({ id });
        // Validate request body using Joi schema
        await updateProductionSchema.validateAsync(body);

        const updatedProduction = await productionService.updateProduction(id, body);
        res.json(updatedProduction);
    } catch (error) {
        next(error);
    }
});

// DELETE a production by its ID
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        // Validate ID parameter using Joi schema
        await deleteProductionSchema.validateAsync({ id });

        await productionService.deleteProduction(id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
