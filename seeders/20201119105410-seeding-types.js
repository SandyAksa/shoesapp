'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let dataTypes = require('../data/type.json')

   dataTypes.forEach(e => {
     e.createdAt = new Date();
     e.updatedAt = new Date();
   });

   return queryInterface.bulkInsert('Types', dataTypes, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   return queryInterface.bulkDelete('Types', null, {});
  }
};
