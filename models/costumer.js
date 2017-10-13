'use strict';

const helper = require('../helpers/datapassenger/fullname')

module.exports = function(sequelize, DataTypes) {
  var Costumer = sequelize.define('Costumer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email already used!'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please insert your valid Email Address!'
        }
      }
    },
    no_telp: DataTypes.STRING,
    no_booking: DataTypes.STRING,
    cityID: DataTypes.INTEGER,
    seatID: DataTypes.INTEGER
  });

  Costumer.associate=function(models){
    // Costumer.hasMany(models.City, {foreignKey: 'cityID'})
    Costumer.belongsToMany(models.City,{through:'Booked',foreignKey:'CostumerId'})
    Costumer.hasMany(models.Booked, {foreignKey:'CostumerId'})
  }

  Costumer.prototype.getFullName = function(){
    return helper(this.first_name, this.last_name)
  }

  return Costumer;
};
