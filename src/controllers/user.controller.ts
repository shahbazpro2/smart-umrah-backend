import { Request, Response } from 'express';
import User from '../models/User';
import { updateProfileSchema } from '../validators/profile.validator';

export async function getProfile(req: Request, res: Response) {
  try {
    const user = await User.findById(req.user?.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const validatedData = updateProfileSchema.parse(req.body);

    const user = await User.findByIdAndUpdate(req.user?.id, validatedData, { new: true }).select(
      '-password'
    );

    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function uploadAvatar(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const avatarPath = `/uploads/${req.file.filename}`;
    const user = await User.findByIdAndUpdate(
      req.user?.id,
      { avatarPath },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
