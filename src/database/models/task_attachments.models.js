import { DataTypes } from 'sequelize';
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';

const sequelize = new SequelizeAdapter().getConnection();

export const TaskAttachment = sequelize.define('TaskAttachment', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    taskId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});
