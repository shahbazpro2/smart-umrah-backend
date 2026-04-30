import { Request, Response } from 'express';
import Media from '../models/Media';

export async function getAllMedia(req: Request, res: Response) {
  try {
    const { type, language, ritualId } = req.query;
    const filter: any = {};

    if (type) filter.type = type;
    if (language) filter.language = { $in: [language, 'all'] };
    if (ritualId) filter.ritualId = ritualId;

    const media = await Media.find(filter).populate('ritualId');
    res.json(media);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getMediaById(req: Request, res: Response) {
  try {
    const media = await Media.findById(req.params.id).populate('ritualId');
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }
    res.json(media);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function uploadMedia(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { title, type, language, ritualId } = req.body;

    const media = new Media({
      title,
      type,
      language: language || 'all',
      ritualId: ritualId || null,
      filePath: `/uploads/${req.file.filename}`,
      fileName: req.file.originalname,
      mimeType: req.file.mimetype,
      fileSize: req.file.size,
    });

    await media.save();
    res.status(201).json(media);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

/**
 * Extract YouTube video ID from various URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export async function addYoutubeMedia(req: Request, res: Response) {
  try {
    const { title, youtubeUrl, language, ritualId } = req.body;

    if (!title || !youtubeUrl) {
      return res.status(400).json({ error: 'title and youtubeUrl are required' });
    }

    const youtubeId = extractYoutubeId(youtubeUrl);
    if (!youtubeId) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    const media = new Media({
      title,
      type: 'youtube',
      language: language || 'all',
      ritualId: ritualId || null,
      youtubeUrl,
      youtubeId,
      filePath: '',
      fileName: '',
      mimeType: 'video/youtube',
      fileSize: 0,
    });

    await media.save();
    res.status(201).json(media);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
