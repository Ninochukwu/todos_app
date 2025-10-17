import { DataTypes } from 'sequelize';
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';
import { Teams } from './teams.models.js'; // 
import { User } from './user.models.js'; 

const sequelize = new SequelizeAdapter().getConnection();

export const TeamMembers = sequelize.define('TeamMembers', {
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
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  role: {
    type: DataTypes.ENUM('owner', 'editor', 'viewer'),
    allowNull: false,
    defaultValue: 'viewer',
  },
}, {
  timestamps: true,
  paranoid: true, // enables soft deletes (using deletedAt)
});
