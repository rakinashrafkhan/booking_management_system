'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bus_times', {
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
      busId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buses',
          key: 'id'
        },
        allowNull: false
      },
      timeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'times',
          key: 'id'
        },
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bus_times');
  }
};
