const { Model, DataTypes, Sequelize } = require('sequelize');

const BUGS_TABLE = 'bugs';

const BugsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  details: {
    allowNull: true,
    type: DataTypes.TEXT
  }
};

class Bugs extends Model {
  static associate() {
    // Define associations if any
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BUGS_TABLE,
      modelName: 'Bugs',
      timestamps: false
    };
  }
}

module.exports = { BUGS_TABLE, BugsSchema, Bugs};
