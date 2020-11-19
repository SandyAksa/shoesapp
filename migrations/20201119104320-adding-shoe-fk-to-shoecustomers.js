'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('ShoeCustomers', {
      fields: ['ShoeId'],
      type: 'foreign key',
      name: 'add-shoe-fk-constraint',
      references: {
        table: 'Shoes',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('ShoeCustomers', 'add-shoe-fk-constraint', {})
  }
};
