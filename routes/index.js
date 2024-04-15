const express = require('express');
const cowsRouter = require('./cows.router');
const bugsRouter = require('./bugs.router');
const productionRouter = require('./production.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api', router);

    router.use('/cows', cowsRouter);
    router.use('/bugs', bugsRouter);
    router.use('/production', productionRouter);
}

module.exports = routerApi;
