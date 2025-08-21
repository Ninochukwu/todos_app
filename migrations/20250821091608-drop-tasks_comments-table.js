'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("task_comments", {
      id: {
              type: Sequelize.DataTypes.UUID,
              allowNull: false,
              primaryKey: true,
          },
          taskId: {
              type: Sequelize.DataTypes.UUID,
              allowNull: false,
          },
          authorId: {
              type: Sequelize.DataTypes.UUID,
              allowNull: false,
          },
          content: {
              type: Sequelize.DataTypes.TEXT,
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
    await queryInterface.dropTable('task_comments');
  }
};
