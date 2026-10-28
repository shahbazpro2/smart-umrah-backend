import { Request, Response } from 'express';
import UserProgress from '../models/UserProgress';

export async function getUserProgress(req: Request, res: Response) {
  try {
    const progress = await UserProgress.find({ userId: req.user?.id }).populate('ritualId');
    res.json(progress);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function markRitualComplete(req: Request, res: Response) {
  try {
    const { ritualId } = req.body;

    let progress = await UserProgress.findOne({ userId: req.user?.id, ritualId });

    if (!progress) {
      progress = new UserProgress({
        userId: req.user?.id,
        ritualId,
        isCompleted: true,
        completedAt: new Date(),
      });
    } else {
      progress.isCompleted = true;
      progress.completedAt = new Date();
    }

    await progress.save();
    res.json(progress);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function resetUserProgress(req: Request, res: Response) {
  try {
    await UserProgress.deleteMany({ userId: req.user?.id });
    res.json({ message: 'Umrah journey reset to step 1 successfully', success: true });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
