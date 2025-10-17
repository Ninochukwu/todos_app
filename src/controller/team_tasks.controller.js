import { v4 as uuidv4 } from 'uuid';
import {TeamTasks} from '../database/models/team_tasks.models.js';
import {TeamMembers} from '../database/models/team_members.models.js';


// 🧩 CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { teamId } = req.params;
    const { title, description, due_date } = req.body;
    const userId = req.user.id;

    // Check membership
    const member = await TeamMembers.findOne({
      where: { team_id: teamId, user_id: userId },
    });
    if (!member) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }

    const task = await TeamTasks.create({
      id: uuidv4(),
      team_id: teamId,
      created_by: userId,
      title,
      description,
      due_date,
    });

    return res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 📋 GET ALL TASKS IN A TEAM
export const getTeamTasks = async (req, res) => {
  try {
    const { teamId } = req.params;

    const tasks = await TeamTasks.findAll({
      where: { team_id: teamId },
      order: [['createdAt', 'DESC']],
    });

    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE TASK
export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, status, due_date } = req.body;
    const userId = req.user.id;

    const task = await TeamTasks.findByPk(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Verify the user is part of the team
    const member = await TeamMembers.findOne({
      where: { team_id: task.team_id, user_id: userId },
    });
    if (!member) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }

    // Optional: only owner/editor can update
    if (member.role === 'viewer') {
      return res.status(403).json({ message: 'Viewers cannot update tasks' });
    }

    await task.update({ title, description, status, due_date });
    return res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ❌ DELETE TASK
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const userId = req.user.id;

    const task = await TeamTasks.findByPk(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const member = await TeamMembers.findOne({
      where: { team_id: task.team_id, user_id: userId },
    });
    if (!member) {
      return res.status(403).json({ message: 'You are not a member of this team' });
    }

    // Only owner or task creator can delete
    if (member.role !== 'owner' && task.created_by !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this task' });
    }

    await task.destroy();
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
