'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Route_points', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      routeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'routes',
          key: 'id'
        },
        allowNull: false
      },
      pointId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'points',
          key: 'id'
        },
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Route_points');
  }
};