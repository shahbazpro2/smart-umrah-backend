import mongoose, { Schema, Document } from 'mongoose';

interface TranslationContent {
  title: string;
  description: string;
  modifications: string[];
  restBreaks: {
    recommendedMinutes: number;
    position: string;
  };
  physicalConsiderations: string[];
  accompaniments: string[];
  emergencyTips: string[];
}

export interface IElderlyGuide extends Document {
  ritualId: mongoose.Types.ObjectId;
  ritualKey: string;
  translations: {
    en: TranslationContent;
    ar: TranslationContent;
    ur: TranslationContent;
  };
  healthWarnings: string[];
  hasModifications: boolean;
}

const elderlyGuideSchema = new Schema<IElderlyGuide>(
  {
    ritualId: { type: Schema.Types.ObjectId, ref: 'Ritual' } as any,
    ritualKey: { type: String, required: true },
    translations: {
      en: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        modifications: [String],
        restBreaks: {
          recommendedMinutes: Number,
          position: String,
        },
        physicalConsiderations: [String],
        accompaniments: [String],
        emergencyTips: [String],
      },
      ar: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        modifications: [String],
        restBreaks: {
          recommendedMinutes: Number,
          position: String,
        },
        physicalConsiderations: [String],
        accompaniments: [String],
        emergencyTips: [String],
      },
      ur: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        modifications: [String],
        restBreaks: {
          recommendedMinutes: Number,
          position: String,
        },
        physicalConsiderations: [String],
        accompaniments: [String],
        emergencyTips: [String],
      },
    } as any,
    healthWarnings: [String],
    hasModifications: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IElderlyGuide>('ElderlyGuide', elderlyGuideSchema);
