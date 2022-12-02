'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DirectorM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DirectorM.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    DNI: DataTypes.STRING,
    fecha_nacimientos: DataTypes.DATE,
    fecha_alta: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DirectorM',
  });
  return DirectorM;
};