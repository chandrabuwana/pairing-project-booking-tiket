'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seat = sequelize.define('Seat', {
    no_seat: DataTypes.INTEGER,
    status: DataTypes.STRING,
    price: DataTypes.STRING
  });
  return Seat;
};
