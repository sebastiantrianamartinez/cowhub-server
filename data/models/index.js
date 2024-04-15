const { Bugs, BugsSchema } = require('./bugs.model');
const { Production, ProductionSchema } = require('./production.model');
const { Lots, LotsSchema } = require('./lots.model');

function setupModels(sequelize) {
  Bugs.init(BugsSchema, Bugs.config(sequelize));
  Production.init(ProductionSchema, Production.config(sequelize));
  Lots.init(LotsSchema, Lots.config(sequelize));
}

module.exports = setupModels;
