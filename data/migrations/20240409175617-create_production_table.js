'use strict';

const { ProductionSchema, PRODUCTION_TABLE } = require('./../models/production.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PRODUCTION_TABLE, ProductionSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PRODUCTION_TABLE);
  }
};
