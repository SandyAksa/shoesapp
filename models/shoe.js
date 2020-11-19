'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shoe.belongsTo(models.Color);
      Shoe.belongsTo(models.Type);
      Shoe.belongsToMany(models.Customer, {
        through: models.ShoeCustomer
      })
    }
  };
  Shoe.init({
    type: DataTypes.STRING,
    color: DataTypes.INTEGER,
    ColorId: DataTypes.INTEGER,
    TypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shoe',
  });
  return Shoe;
};