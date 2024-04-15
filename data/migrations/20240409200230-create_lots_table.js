'use strict';

const { LotsSchema, LOTS_TABLE } = require('./../models/lots.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(LOTS_TABLE, LotsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(LOTS_TABLE);
  }
};

