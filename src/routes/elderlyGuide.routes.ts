import { Router } from 'express';
import {
  getAllElderlyGuides,
  getElderlyGuideByRitual,
  getElderlyGuideById,
  createElderlyGuide,
  updateElderlyGuide,
  getElderlyModifications,
  getHealthWarnings,
} from '../controllers/elderlyGuide.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Specific routes before generic :id parameter
router.get('/warnings/all', authMiddleware, getHealthWarnings);
router.get('/ritual/:ritualId', authMiddleware, getElderlyGuideByRitual);
router.get('/modifications/:ritualId', authMiddleware, getElderlyModifications);
router.get('/', authMiddleware, getAllElderlyGuides);
router.get('/:id', authMiddleware, getElderlyGuideById);
router.post('/', authMiddleware, createElderlyGuide);
router.put('/:id', authMiddleware, updateElderlyGuide);

export default router;
