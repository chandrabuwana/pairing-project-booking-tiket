'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Cities',[{
      city:'Jakarta',
      createdAt : new Date(),
      updatedAt : new Date(),
      city_code : '0048',
      date_departure :new Date()
    },{
      city:'Medan',
      createdAt : new Date(),
      updatedAt : new Date(),
      city_code : '0201',
      date_departure :new Date()
    },{
      city:'Bandung',
      createdAt : new Date(),
      updatedAt : new Date(),
      city_code : '1201',
      date_departure :new Date()
    },{
      city:'Surabaya',
      createdAt : new Date(),
      updatedAt : new Date(),
      city_code : '2201',
      date_departure :new Date()
    },{
      city:'Bali',
      createdAt : new Date(),
      updatedAt : new Date(),
      city_code : '8901',
      date_departure :new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
