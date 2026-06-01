import { Request, Response } from 'express';
import ElderlyGuide from '../models/ElderlyGuide';

export async function getAllElderlyGuides(req: Request, res: Response) {
  try {
    const { language = 'en' } = req.query;

    const guides = await ElderlyGuide.find();

    const filtered = guides.map(guide => ({
      _id: guide._id,
      ritualId: guide.ritualId,
      ritualKey: guide.ritualKey,
      isModified: guide.isModified,
      healthWarnings: guide.healthWarnings,
      ...guide.translations[language as 'en' | 'ar' | 'ur'],
      allLanguages: guide.translations,
    }));

    res.json(filtered);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getElderlyGuideByRitual(req: Request, res: Response) {
  try {
    const { ritualId } = req.params;
    const { language = 'en' } = req.query;

    const guide = await ElderlyGuide.findOne({ ritualId });
    if (!guide) {
      return res.status(404).json({ error: 'Elderly guide not found for this ritual' });
    }

    const response = {
      _id: guide._id,
      ritualId: guide.ritualId,
      ritualKey: guide.ritualKey,
      isModified: guide.isModified,
      healthWarnings: guide.healthWarnings,
      ...guide.translations[language as 'en' | 'ar' | 'ur'],
      allLanguages: guide.translations,
    };

    res.json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getElderlyGuideById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { language = 'en' } = req.query;

    const guide = await ElderlyGuide.findById(id);
    if (!guide) {
      return res.status(404).json({ error: 'Elderly guide not found' });
    }

    const response = {
      _id: guide._id,
      ritualId: guide.ritualId,
      ritualKey: guide.ritualKey,
      isModified: guide.isModified,
      healthWarnings: guide.healthWarnings,
      ...guide.translations[language as 'en' | 'ar' | 'ur'],
      allLanguages: guide.translations,
    };

    res.json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function createElderlyGuide(req: Request, res: Response) {
  try {
    const { ritualId, ritualKey, translations, healthWarnings, isModified } = req.body;

    const newGuide = new ElderlyGuide({
      ritualId,
      ritualKey,
      translations,
      healthWarnings,
      isModified,
    });

    await newGuide.save();
    res.status(201).json(newGuide);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateElderlyGuide(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { translations, healthWarnings, isModified } = req.body;

    const guide = await ElderlyGuide.findByIdAndUpdate(
      id,
      { translations, healthWarnings, isModified },
      { new: true }
    );

    if (!guide) {
      return res.status(404).json({ error: 'Elderly guide not found' });
    }

    res.json(guide);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getElderlyModifications(req: Request, res: Response) {
  try {
    const { ritualId } = req.params;
    const { language = 'en' } = req.query;

    const guide = await ElderlyGuide.findOne({ ritualId });
    if (!guide) {
      return res.status(404).json({ error: 'No elderly modifications available for this ritual' });
    }

    const translation = guide.translations[language as 'en' | 'ar' | 'ur'];

    res.json({
      _id: guide._id,
      ritualKey: guide.ritualKey,
      modifications: translation.modifications,
      restBreaks: translation.restBreaks,
      physicalConsiderations: translation.physicalConsiderations,
      healthWarnings: guide.healthWarnings,
      accompaniments: translation.accompaniments,
      emergencyTips: translation.emergencyTips,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getHealthWarnings(req: Request, res: Response) {
  try {
    const guides = await ElderlyGuide.find({}, { healthWarnings: 1, ritualKey: 1 });

    const warnings = guides
      .filter(g => g.healthWarnings && g.healthWarnings.length > 0)
      .map(g => ({
        ritualKey: g.ritualKey,
        warnings: g.healthWarnings,
      }));

    res.json(warnings);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
