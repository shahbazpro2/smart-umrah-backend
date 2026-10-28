import { Request, Response } from 'express';
import OfflineAssistant from '../models/OfflineAssistant';
import Ritual from '../models/Ritual';
import Media from '../models/Media';
import MistakeGuide from '../models/MistakeGuide';
import ElderlyGuide from '../models/ElderlyGuide';

export async function syncOfflineData(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Fetch all required data
    const [rituals, media, mistakeGuides, elderlyGuides] = await Promise.all([
      Ritual.find(),
      Media.find(),
      MistakeGuide.find(),
      ElderlyGuide.find(),
    ]);

    // Find or create offline assistant record
    let offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant) {
      offlineAssistant = new OfflineAssistant({
        userId,
        cachedData: {
          rituals: rituals.map(r => r.toObject()),
          media: media.map(m => m.toObject()),
          mistakeGuides: mistakeGuides.map(mg => mg.toObject()),
          elderlyGuides: elderlyGuides.map(eg => eg.toObject()),
        },
        syncStatus: 'synced',
        syncedAt: new Date(),
      });
    } else {
      offlineAssistant.cachedData = {
        rituals: rituals.map(r => r.toObject()),
        media: media.map(m => m.toObject()),
        mistakeGuides: mistakeGuides.map(mg => mg.toObject()),
        elderlyGuides: elderlyGuides.map(eg => eg.toObject()),
      };
      offlineAssistant.syncStatus = 'synced';
      offlineAssistant.syncedAt = new Date();
    }

    await offlineAssistant.save();

    res.json({
      status: 'synced',
      message: 'Offline data synced successfully',
      syncedAt: offlineAssistant.syncedAt,
      dataSize: {
        rituals: rituals.length,
        media: media.length,
        mistakeGuides: mistakeGuides.length,
        elderlyGuides: elderlyGuides.length,
      },
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOfflineData(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant) {
      return res.status(404).json({
        error: 'No offline data available. Please sync first.',
        message: 'Call /sync endpoint to download offline data',
      });
    }

    res.json({
      syncedAt: offlineAssistant.syncedAt,
      version: offlineAssistant.version,
      offlineFeatures: offlineAssistant.offlineFeatures,
      cachedData: offlineAssistant.cachedData,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getSyncStatus(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne(
      { userId },
      { syncStatus: 1, syncedAt: 1, lastSyncError: 1, version: 1 }
    );

    if (!offlineAssistant) {
      return res.status(404).json({ status: 'never_synced' });
    }

    res.json({
      syncStatus: offlineAssistant.syncStatus,
      syncedAt: offlineAssistant.syncedAt,
      lastSyncError: offlineAssistant.lastSyncError,
      version: offlineAssistant.version,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOfflineRituals(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant || !offlineAssistant.offlineFeatures.canViewRituals) {
      return res.status(403).json({ error: 'Offline ritual access not available' });
    }

    res.json(offlineAssistant.cachedData.rituals);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOfflineMedia(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant || !offlineAssistant.offlineFeatures.canAccessMedia) {
      return res.status(403).json({ error: 'Offline media access not available' });
    }

    res.json(offlineAssistant.cachedData.media);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOfflineMistakeGuides(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant || !offlineAssistant.offlineFeatures.canViewMistakeGuides) {
      return res.status(403).json({ error: 'Offline mistake guide access not available' });
    }

    res.json(offlineAssistant.cachedData.mistakeGuides);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOfflineElderlyGuides(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant || !offlineAssistant.offlineFeatures.canViewElderlyGuides) {
      return res.status(403).json({ error: 'Offline elderly guide access not available' });
    }

    res.json(offlineAssistant.cachedData.elderlyGuides);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function clearOfflineCache(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await OfflineAssistant.deleteOne({ userId });

    res.json({
      status: 'cache_cleared',
      message: 'Offline cache cleared successfully',
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getOfflineStats(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id || (req as any).user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const offlineAssistant = await OfflineAssistant.findOne({ userId });

    if (!offlineAssistant) {
      return res.status(404).json({ error: 'No offline data found' });
    }

    res.json({
      syncedAt: offlineAssistant.syncedAt,
      syncStatus: offlineAssistant.syncStatus,
      version: offlineAssistant.version,
      statistics: {
        totalRituals: offlineAssistant.cachedData.rituals.length,
        totalMedia: offlineAssistant.cachedData.media.length,
        totalMistakeGuides: offlineAssistant.cachedData.mistakeGuides.length,
        totalElderlyGuides: offlineAssistant.cachedData.elderlyGuides.length,
        estimatedSize: JSON.stringify(offlineAssistant.cachedData).length,
      },
      features: offlineAssistant.offlineFeatures,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
