'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booked = sequelize.define('Booked', {
    CostumerId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    date_departure: DataTypes.STRING
  })
  Booked.associate=function(models){
    // Booked.belongsTo(models.Costumer)
    // Booked.belongsTo(models.City, {foreignKey: 'CityId'})
  }
  return Booked;
};
