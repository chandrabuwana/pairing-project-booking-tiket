'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return City;
};