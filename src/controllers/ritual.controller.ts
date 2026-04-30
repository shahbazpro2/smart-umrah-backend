import { Request, Response } from 'express';
import Ritual from '../models/Ritual';

export async function getAllRituals(req: Request, res: Response) {
  try {
    const rituals = await Ritual.find().sort({ sequence: 1 });
    res.json(rituals);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getRitualById(req: Request, res: Response) {
  try {
    const ritual = await Ritual.findById(req.params.id);
    if (!ritual) {
      return res.status(404).json({ error: 'Ritual not found' });
    }
    res.json(ritual);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
