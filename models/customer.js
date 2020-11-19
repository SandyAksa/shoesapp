'use strict';
const {
  Model
} = require('sequelize');
const fullname = require('../helpers/fullname')
const { hash } = require('../helpers/passwordBcrypt.js')

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Shoe, {
        through: models.ShoeCustomer
      })
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username harus di isi!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : 'Password harus di isi!'
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Firstname harus di isi!'
        }
      }
    },
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email harus di isi!'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options) {
        if(!instance.lastname){
          instance.lastname = instance.firstname
        } else {
          instance.lastname = instance.lastname
        }
        instance.name = fullname(instance.firstname,instance.lastname)
        let hashed = hash(instance.password)
        instance.password = hashed
      }
    },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};