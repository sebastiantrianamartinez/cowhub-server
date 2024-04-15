const express = require('express');
const Joi = require('joi');
const router = express.Router();
const BugsController = require('./../services/bugs.service');
const { createBugSchema, getBugSchema, updateBugSchema, deleteBugSchema } = require('./../data/schemas/bugs.schema');

const bugsController = new BugsController();

// GET all bugs
router.get('/', async (req, res, next) => {
    try {
        const bugs = await bugsController.getAllBugs();
        res.json(bugs);
    } catch (error) {
        next(error);
    }
});

// GET a bug by its ID
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        // Validate ID parameter using Joi schema
        await getBugSchema.validateAsync({ id });
        const bug = await bugsController.getBugById(id);
        res.json(bug);
    } catch (error) {
        next(error);
    }
});

// POST create a new bug
router.post('/', async (req, res, next) => {
    const { body } = req;
    try {
        // Validate request body using Joi schema
        await createBugSchema.validateAsync(body);

        const newBug = await bugsController.createBug(body);
        res.status(201).json(newBug);
    } catch (error) {
        next(error);
    }
});

// PUT update a bug by its ID
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        // Validate ID parameter using Joi schema
        await getBugSchema.validateAsync({ id });
        // Validate request body using Joi schema
        await updateBugSchema.validateAsync(body);

        const updatedBug = await bugsController.updateBug(id, body);
        res.json(updatedBug);
    } catch (error) {
        next(error);
    }
});

// DELETE a bug by its ID
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        // Validate ID parameter using Joi schema
        await deleteBugSchema.validateAsync({ id });

        await bugsController.deleteBug(id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
