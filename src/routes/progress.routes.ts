import { Router } from 'express';
import { getUserProgress, markRitualComplete, resetUserProgress } from '../controllers/progress.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getUserProgress);
router.post('/', authMiddleware, markRitualComplete);
router.post('/reset', authMiddleware, resetUserProgress);
router.delete('/', authMiddleware, resetUserProgress);

export default router;
