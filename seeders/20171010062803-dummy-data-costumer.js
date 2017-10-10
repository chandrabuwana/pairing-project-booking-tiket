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
    return queryInterface.bulkInsert('Costumers',[{
      first_name:'Chandra',
      last_name:'Buwana',
      email:'Cbuwana@gmail.com',
      no_telp: '085224568965',
      no_booking: '0048ABJ',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      first_name:'Daniel',
      last_name:'Pangkey',
      email:'daniel@gmail.com',
      no_telp: '08529898998',
      no_booking: '0241ABJ',
      createdAt:new Date(),
      updatedAt:new Date()
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
