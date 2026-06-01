import { Request, Response } from 'express';
import MistakeGuide from '../models/MistakeGuide';

export async function getAllMistakeGuides(req: Request, res: Response) {
  try {
    const { severity, language = 'en' } = req.query;

    const filter: any = {};
    if (severity) filter.severity = severity;

    const guides = await MistakeGuide.find(filter);

    // Filter by language in response
    const filtered = guides.map(guide => ({
      _id: guide._id,
      ritualId: guide.ritualId,
      ritualKey: guide.ritualKey,
      severity: guide.severity,
      ...guide.translations[language as 'en' | 'ar' | 'ur'],
      allLanguages: guide.translations,
    }));

    res.json(filtered);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getMistakeGuideByRitual(req: Request, res: Response) {
  try {
    const { ritualId } = req.params;
    const { language = 'en' } = req.query;

    const guide = await MistakeGuide.findOne({ ritualId });
    if (!guide) {
      return res.status(404).json({ error: 'Mistake guide not found for this ritual' });
    }

    const response = {
      _id: guide._id,
      ritualId: guide.ritualId,
      ritualKey: guide.ritualKey,
      severity: guide.severity,
      ...guide.translations[language as 'en' | 'ar' | 'ur'],
      allLanguages: guide.translations,
    };

    res.json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getMistakeGuideById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { language = 'en' } = req.query;

    const guide = await MistakeGuide.findById(id);
    if (!guide) {
      return res.status(404).json({ error: 'Mistake guide not found' });
    }

    const response = {
      _id: guide._id,
      ritualId: guide.ritualId,
      ritualKey: guide.ritualKey,
      severity: guide.severity,
      ...guide.translations[language as 'en' | 'ar' | 'ur'],
      allLanguages: guide.translations,
    };

    res.json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function createMistakeGuide(req: Request, res: Response) {
  try {
    const { ritualId, ritualKey, translations, severity } = req.body;

    const newGuide = new MistakeGuide({
      ritualId,
      ritualKey,
      translations,
      severity,
    });

    await newGuide.save();
    res.status(201).json(newGuide);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateMistakeGuide(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { translations, severity } = req.body;

    const guide = await MistakeGuide.findByIdAndUpdate(
      id,
      { translations, severity },
      { new: true }
    );

    if (!guide) {
      return res.status(404).json({ error: 'Mistake guide not found' });
    }

    res.json(guide);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getMistakesByRitualKey(req: Request, res: Response) {
  try {
    const { ritualKey } = req.params;
    const { language = 'en' } = req.query;

    const guide = await MistakeGuide.findOne({ ritualKey });
    if (!guide) {
      return res.status(404).json({ error: 'No mistakes guide found for this ritual' });
    }

    res.json({
      _id: guide._id,
      ritualKey: guide.ritualKey,
      severity: guide.severity,
      mistakes: guide.translations[language as 'en' | 'ar' | 'ur'].commonMistakes,
      tips: guide.translations[language as 'en' | 'ar' | 'ur'].tips,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
