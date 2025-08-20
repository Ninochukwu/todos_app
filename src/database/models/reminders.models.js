import { DataTypes } from 'sequelize';
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';

const sequelize = new SequelizeAdapter().getConnection();

export const Reminders = sequelize.define('Reminders', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    taskId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    remindAt: {
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
