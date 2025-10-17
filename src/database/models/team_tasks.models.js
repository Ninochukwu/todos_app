import { DataTypes } from 'sequelize';
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';
import { Teams } from './teams.models.js';
import { User } from './user.models.js';

const sequelize = new SequelizeAdapter().getConnection();

export const TeamTasks = sequelize.define('TeamTasks', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  team_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Teams,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
  paranoid: true,
});
