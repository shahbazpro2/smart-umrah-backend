import mongoose, { Schema, Document } from 'mongoose';

interface MistakeItem {
  mistake: string;
  impact: string;
  prevention: string;
}

interface MistakeTranslation {
  title: string;
  description: string;
  commonMistakes: MistakeItem[];
  tips: string[];
}

export interface IMistakeGuide extends Document {
  ritualId: mongoose.Types.ObjectId;
  ritualKey: string;
  translations: {
    en: MistakeTranslation;
    ar: MistakeTranslation;
    ur: MistakeTranslation;
  };
  severity: 'low' | 'medium' | 'high' | 'critical';
}

const mistakeGuideSchema = new Schema<IMistakeGuide>(
  {
    ritualId: { type: Schema.Types.ObjectId, ref: 'Ritual' } as any,
    ritualKey: { type: String, required: true },
    translations: {
      en: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        commonMistakes: [
          {
            mistake: String,
            impact: String,
            prevention: String,
          },
        ],
        tips: [String],
      },
      ar: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        commonMistakes: [
          {
            mistake: String,
            impact: String,
            prevention: String,
          },
        ],
        tips: [String],
      },
      ur: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        commonMistakes: [
          {
            mistake: String,
            impact: String,
            prevention: String,
          },
        ],
        tips: [String],
      },
    } as any,
    severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
  },
  { timestamps: true }
);

export default mongoose.model<IMistakeGuide>('MistakeGuide', mistakeGuideSchema);
