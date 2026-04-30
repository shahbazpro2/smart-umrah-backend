import { Router } from 'express';
import { getUserProgress, markRitualComplete } from '../controllers/progress.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getUserProgress);
router.post('/', authMiddleware, markRitualComplete);

export default router;
