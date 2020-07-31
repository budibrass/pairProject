'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, 
        { 
          through : models.UserProduct,
          foreignKey: 'UserId'
        })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    hp: DataTypes.STRING
  }, {
    hooks:
    {
      beforeCreate(instance, options)
      {
        if(instance.gender === 'Pria')
        {
          instance.name = `Mr.${instance.name}`
        }
        else
        {
          instance.name = `Mrs.${instance.name}`
        }
      },

      afterFind(instance, options)
      {
        for(let i = 0; i < instance.length; i++)
        {
          if(instance[i].gender === 'Pria')
          {
            instance[i].name = `Mr.${instance[i].name}`
          }
          else
          {
            instance[i].name = `Mrs.${instance[i].name}`
          }
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};