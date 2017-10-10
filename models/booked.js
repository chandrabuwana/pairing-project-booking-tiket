'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booked = sequelize.define('Booked', {
    CostumerId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER
  })
  Booked.associate=function(models){
    Booked.belongsTo(models.Costumer)
    Booked.belongsTo(models.City)
  }
  return Booked;
};
