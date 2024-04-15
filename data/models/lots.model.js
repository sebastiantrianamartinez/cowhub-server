const { Model, DataTypes } = require('sequelize');

const LOTS_TABLE = 'lots';

const LotsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING, // Asumiendo que name es un varchar en la base de datos
    unique: true
  },
  details: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE // Asumiendo que date es un timestamp en la base de datos
  }
};

class Lots extends Model {
  static associate(models) {
    // Aquí puedes definir asociaciones con otros modelos si es necesario
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOTS_TABLE,
      modelName: 'Lots',
      timestamps: false
    };
  }
}

module.exports = { LOTS_TABLE, LotsSchema, Lots };
