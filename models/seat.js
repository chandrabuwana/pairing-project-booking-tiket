'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seat = sequelize.define('Seat', {
    no_seat: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    CostumerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Seat;
};