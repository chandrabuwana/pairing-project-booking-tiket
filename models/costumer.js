'use strict';
module.exports = function(sequelize, DataTypes) {
  var Costumer = sequelize.define('Costumer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    no_booking: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Costumer;
};