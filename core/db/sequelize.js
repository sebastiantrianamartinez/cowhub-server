const { dbUser, dbPassword, dbHost,  dbPort, dbName} = require('../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('./../../data/models');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize);

module.exports = sequelize;
