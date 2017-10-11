'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    city: DataTypes.STRING,
    city_code: DataTypes.INTEGER,
    date_departure : DataTypes.STRING
  });

  City.associate=function(models){
    // City.hasMany(models.Booked,{foreignKey:'CostumerId'})
  }
  return City;
};
