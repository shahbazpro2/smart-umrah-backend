import { Router } from 'express';
import { getAllRituals, getRitualById } from '../controllers/ritual.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllRituals);
router.get('/:id', authMiddleware, getRitualById);

export default router;
