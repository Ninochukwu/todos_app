'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("task_labels", {
      id: {
              type: Sequelize.DataTypes.UUID,
              allowNull: false,
              primaryKey: true,
          },
          name: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
          },
          color: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
          },
          createdAt: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.DataTypes.NOW,
          },
          updatedAt: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.DataTypes.NOW,
          },
      });
    },
      
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('task_labels');
  }
};
