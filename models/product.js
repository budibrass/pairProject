'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Admin, { foreignKey: 'AdminId'})

      Product.belongsToMany(models.User, 
        { 
          through : models.UserProduct,
          foreignKey: 'ProductId'
        })
    }

    static getTotalLaba()
    {
        return Product.findAll({
            attributes: [[sequelize.literal('SUM(stock*price)'), 'result']]
            
        });
    }

    getFullName()
    {
      return `${this.category} ${this.name}`
    }

    getLabaBersih()
    {
      let disc = this.price * 10 / 100;
      return `${this.stock * disc}`
    }
  };
  Product.init({
    name: 
    {
      type: DataTypes.STRING,
      validate:
      {
        notEmpty: true
      }
    },
    category: 
    {
      type: DataTypes.STRING,
      validate:
      {
        notEmpty: true
      }
    },
    stock: 
    {
      type: DataTypes.INTEGER,
      validate:
      {
        notEmpty: true
      }
    },
    price: 
    {
      type: DataTypes.INTEGER,
      validate:
      {
        notEmpty: true
      }
    },
    AdminId: 
    {
      type: DataTypes.INTEGER,
      validate:
      {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};