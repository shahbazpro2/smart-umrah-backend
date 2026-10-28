import { Router } from 'express';
import {
  getAllMistakeGuides,
  getMistakeGuideByRitual,
  getMistakeGuideById,
  createMistakeGuide,
  updateMistakeGuide,
  getMistakesByRitualKey,
} from '../controllers/mistakeGuide.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllMistakeGuides);
router.get('/:id', authMiddleware, getMistakeGuideById);
router.get('/ritual/:ritualId', authMiddleware, getMistakeGuideByRitual);
router.get('/by-key/:ritualKey', authMiddleware, getMistakesByRitualKey);
router.post('/', authMiddleware, createMistakeGuide);
router.put('/:id', authMiddleware, updateMistakeGuide);

export default router;
