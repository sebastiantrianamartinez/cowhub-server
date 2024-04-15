'use strict';

const { BugsSchema, BUGS_TABLE } = require('../models/bugs.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(BUGS_TABLE, BugsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(BUGS_TABLE);
  }
};

