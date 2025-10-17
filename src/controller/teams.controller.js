import { Teams, TeamMembers } from '../models/index.js';
import { v4 as uuidv4 } from 'uuid';

export const createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    const owner_id = req.user.id;

    const team = await Teams.create({
      id: uuidv4(),
      name,
    });

    await TeamMembers.create({
      team_id: team.id,
      user_id: owner_id,
      role: 'owner',
    });

    return res.status(201).json({
      message: 'Team created successfully',
      team,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addTeamMember = async (req, res) => {
  try {
    const { teamId } = req.params;
    const { userId, role } = req.body;

    const existing = await TeamMembers.findOne({
      where: { team_id: teamId, user_id: userId },
    });

    if (existing) {
      return res.status(400).json({ message: 'User already in team' });
    }

    await TeamMembers.create({
      team_id: teamId,
      user_id: userId,
      role,
    });

    return res.status(201).json({ message: 'Member added successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

