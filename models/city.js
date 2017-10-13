'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    city: DataTypes.STRING,
    date_departure : DataTypes.STRING,
    city_code: DataTypes.STRING
  });

  City.associate=function(models){
    // City.belongsTo(models.Costumer, {foreignKey: 'cityID'})
    City.belongsToMany(models.Costumer, {through:'Booked', foreignKey: 'CityId'})
    City.hasMany(models.Booked,{foreignKey:'CityId'})
  }
  return City;
};
