import express from 'express';
import { createTask, getTeamTasks, updateTask, deleteTask } from '../controller/team_tasks.controller.js';

const router = express.Router();

router.post('/:teamId/tasks', createTask);
router.get('/:teamId/tasks', getTeamTasks);
router.put('/tasks/:taskId', updateTask);
router.delete('/tasks/:taskId', deleteTask);

export default router;
