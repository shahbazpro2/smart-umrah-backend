import mongoose, { Schema, Document } from 'mongoose';

interface CachedData {
  rituals: any[];
  media: any[];
  mistakeGuides: any[];
  elderlyGuides: any[];
}

interface OfflineFeatures {
  canViewRituals: boolean;
  canViewMistakeGuides: boolean;
  canViewElderlyGuides: boolean;
  canAccessMedia: boolean;
}

export interface IOfflineAssistant extends Document {
  userId: mongoose.Types.ObjectId;
  syncedAt: Date;
  version: string;
  cachedData: CachedData;
  offlineFeatures: OfflineFeatures;
  syncStatus: 'synced' | 'pending' | 'failed';
  lastSyncError?: string;
}

const offlineAssistantSchema = new Schema<IOfflineAssistant>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true } as any,
    syncedAt: { type: Date, default: new Date() },
    version: { type: String, default: '1.0.0' },
    cachedData: {
      rituals: [Schema.Types.Mixed],
      media: [Schema.Types.Mixed],
      mistakeGuides: [Schema.Types.Mixed],
      elderlyGuides: [Schema.Types.Mixed],
    } as any,
    offlineFeatures: {
      canViewRituals: { type: Boolean, default: true },
      canViewMistakeGuides: { type: Boolean, default: true },
      canViewElderlyGuides: { type: Boolean, default: true },
      canAccessMedia: { type: Boolean, default: true },
    } as any,
    syncStatus: { type: String, enum: ['synced', 'pending', 'failed'], default: 'synced' },
    lastSyncError: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IOfflineAssistant>('OfflineAssistant', offlineAssistantSchema);
