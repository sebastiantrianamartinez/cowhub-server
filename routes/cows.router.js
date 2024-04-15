const express = require('express');
const router = express.Router();

/*const CowsController = require('../services/cows.service');
const cowsController = new CowsController();*/

const { validatorHandler } = require('../core/middlewares/validator.handler');
const { createCowSchema, getCowSchema, updateCowSchema, deleteCowSchema } = require('../data/schemas/cows.schema');

router.get('/', async (req, res, next) => {

});

router.post('/', validatorHandler(createCowSchema, 'body'), async (req, res, next) => {
    res.status(200)
    .json({
        message: "success request"
    });
});

module.exports = router;
