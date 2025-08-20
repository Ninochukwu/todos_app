import { DataTypes } from 'sequelize';
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';

const sequelize = new SequelizeAdapter().getConnection();

export const TaskComment = sequelize.define('TaskComment', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    taskId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
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
