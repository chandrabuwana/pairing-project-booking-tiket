'use strict';

const helper = require('../helpers/mailer/mailer')

module.exports = function(sequelize, DataTypes) {
  var Booked = sequelize.define('Booked', {
    CostumerId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    date_departure: DataTypes.STRING
  })
  Booked.associate=function(models){
    Booked.belongsTo(models.Costumer, {foreignKey: 'CostumerId'})
    Booked.belongsTo(models.City, {foreignKey: 'CityId'})
  }

  Booked.prototype.mailer = function(flight, date, name, email, phone, nobook){

    helper(flight, date, name, email, phone, nobook)
  }
  return Booked;
};
