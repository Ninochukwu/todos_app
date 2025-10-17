import express from 'express';
import { createTeam, addTeamMember } from '../controllers/teams.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, createTeam);
router.post('/:teamId/members', authMiddleware, addTeamMember);

export default router;
