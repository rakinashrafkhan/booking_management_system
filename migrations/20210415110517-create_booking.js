'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date:{
        type: Sequelize.DATE
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
      bus_timeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bus_times',
          key: 'id'
        },
        allowNull: false
      },
      passengerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'passengers',
          key: 'id'
        },
        allowNull: false
      },
      driverId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers',
          key: 'id'
        },
        allowNull: false
      },
      pickPointId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'points',
          key: 'id'
        },
        allowNull: false
      },
      dropPointId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'points',
          key: 'id'
        },
        allowNull: false
      },
      isCompleted:{
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};
