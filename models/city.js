'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    city: DataTypes.STRING,
    city_code: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return City;
};
