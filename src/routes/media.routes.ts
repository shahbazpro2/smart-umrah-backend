import { Router } from 'express';
import { getAllMedia, getMediaById, uploadMedia, addYoutubeMedia } from '../controllers/media.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { uploadMediaMiddleware } from '../middleware/upload.middleware';

const router = Router();

router.get('/', authMiddleware, getAllMedia);
router.get('/:id', authMiddleware, getMediaById);
router.post('/', authMiddleware, uploadMediaMiddleware.single('file'), uploadMedia);
router.post('/youtube', authMiddleware, addYoutubeMedia);

export default router;
