import { Router } from 'express';
import {
  syncOfflineData,
  getOfflineData,
  getSyncStatus,
  getOfflineRituals,
  getOfflineMedia,
  getOfflineMistakeGuides,
  getOfflineElderlyGuides,
  clearOfflineCache,
  getOfflineStats,
} from '../controllers/offlineAssistant.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/sync', authMiddleware, syncOfflineData);
router.get('/data', authMiddleware, getOfflineData);
router.get('/status', authMiddleware, getSyncStatus);
router.get('/rituals', authMiddleware, getOfflineRituals);
router.get('/media', authMiddleware, getOfflineMedia);
router.get('/mistake-guides', authMiddleware, getOfflineMistakeGuides);
router.get('/elderly-guides', authMiddleware, getOfflineElderlyGuides);
router.get('/stats', authMiddleware, getOfflineStats);
router.delete('/cache', authMiddleware, clearOfflineCache);

export default router;
