'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booked = sequelize.define('Booked', {
    CostumerId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Booked;
};