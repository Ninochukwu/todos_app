'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("todo", 
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
          },
          title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.DataTypes.TEXT,
          },
          completed: {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false,
          },
          createdAt: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
            allowNull: false,
          },
          deletedAt: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
            allowNull: false,
          },
        },
        {
          tableName: "todo",
          timestamps: true,
        }
      );
    
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('todo');
  }
};
