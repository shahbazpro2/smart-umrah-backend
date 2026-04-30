import { Router } from 'express';
import { getProfile, updateProfile, uploadAvatar } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { uploadAvatarMiddleware } from '../middleware/upload.middleware';

const router = Router();

router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.post('/avatar', authMiddleware, uploadAvatarMiddleware.single('avatar'), uploadAvatar);

export default router;
