'use strict';
module.exports = function(sequelize, DataTypes) {
  var Costumer = sequelize.define('Costumer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    no_booking: DataTypes.STRING
  });

  Costumer.associate=function(models){
    Costumer.belongsToMany(models.City,{through:'Booked',foreignKey:'CostumerId'})
    Costumer.hasMany(models.Booked,{foreignKey:'CityId'})
  }
  return Costumer;
};
