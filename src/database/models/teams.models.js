import { DataTypes } from 'sequelize';
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';

const sequelize = new SequelizeAdapter().getConnection();

export const Teams = sequelize.define('Teams', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
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
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});