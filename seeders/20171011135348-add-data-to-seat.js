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
    return queryInterface.bulkInsert('Seats', [{
      no_seat: '1',
      price: 'Rp.5.000.000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '2',
      price: "Rp.5.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '3',
      price: "Rp.5.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '4',
      price: "Rp.5.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '5',
      price: "Rp.5.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '6',
      price: "Rp.4.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '7',
      price: "Rp.4.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '8',
      price: "Rp.4.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '9',
      price: "Rp.4.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '10',
      price: "Rp.4.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '11',
      price: "Rp.3.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '12',
      price: "Rp.3.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '13',
      price: "Rp.3.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '14',
      price: "Rp.3.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '15',
      price: "Rp.3.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '16',
      price: "Rp.2.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '17',
      price: "Rp.2.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '18',
      price: "Rp.2.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '19',
      price: "Rp.2.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      no_seat: '20',
      price: "Rp.2.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
