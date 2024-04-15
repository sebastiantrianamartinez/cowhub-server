const { Model, DataTypes } = require('sequelize');

const PRODUCTION_TABLE = 'production';

const ProductionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cow: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  amount: {
    allowNull: false,
    type: DataTypes.DOUBLE
  },
  quality: {
    allowNull: false,
    type: DataTypes.STRING
  },
  details: {
    allowNull: true,
    type: DataTypes.TEXT
  }
};

class Production extends Model {
  static associate(models) {
    // Aquí puedes definir asociaciones con otros modelos si es necesario
    // Por ejemplo, si cowId es una referencia a otra tabla, puedes definir la asociación aquí.
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTION_TABLE,
      modelName: 'Production',
      timestamps: false
    };
  }
}

module.exports = { PRODUCTION_TABLE, ProductionSchema, Production };
