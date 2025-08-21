'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
      id: {
              type: Sequelize.DataTypes.UUID,
              allowNull: false,
              primaryKey: true,
          },
          name: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
          },
          email: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
          },
          password: {
              type: Sequelize.DataTypes.UUID,
              allowNull: false,
          },
          isActive: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: true,
          },
          createdAt:{
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.NOW,
          },
          updatedAt: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.DataTypes.NOW,
          },
          deletedAt: {
              type: Sequelize.DataTypes.DATE,
              allowNull: true,
          },
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};
