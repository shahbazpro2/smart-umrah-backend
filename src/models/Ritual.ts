import mongoose, { Schema, Document } from 'mongoose';

interface Translation {
  title: string;
  description: string;
  tips: string[];
  commonMistakes: string[];
}

export interface IRitual extends Document {
  sequence: number;
  key: string;
  isRequired: boolean;
  estimatedDuration: string;
  icon?: string;
  translations: {
    en: Translation;
    ar: Translation;
    ur: Translation;
  };
  createdAt: Date;
  updatedAt: Date;
}

const translationSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tips: [{ type: String }],
  commonMistakes: [{ type: String }],
}, { _id: false });

const ritualSchema = new Schema<IRitual>(
  {
    sequence: { type: Number, required: true, unique: true, min: 1, max: 10 },
    key: { type: String, required: true, unique: true },
    isRequired: { type: Boolean, default: true },
    estimatedDuration: { type: String, default: '15-30 min' },
    icon: { type: String, default: '📖' },
    translations: {
      en: translationSchema,
      ar: translationSchema,
      ur: translationSchema,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IRitual>('Ritual', ritualSchema);
