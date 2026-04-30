import mongoose, { Schema, Document } from 'mongoose';

export interface IMedia extends Document {
  title: string;
  type: 'video' | 'audio' | 'image' | 'youtube';
  ritualId?: mongoose.Types.ObjectId;
  language: 'en' | 'ar' | 'ur' | 'all';
  filePath: string;
  fileName: string;
  mimeType: string;
  fileSize: number;
  youtubeUrl?: string;
  youtubeId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const mediaSchema = new Schema<IMedia>(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["video", "audio", "image", "youtube"], required: true },
    ritualId: { type: Schema.Types.ObjectId, ref: "Ritual" },
    language: { type: String, enum: ["en", "ar", "ur", "all"], default: "all" },
    filePath: { type: String, default: "" },
    fileName: { type: String, default: "" },
    mimeType: { type: String, default: "" },
    fileSize: { type: Number, default: 0 },
    youtubeUrl: { type: String },
    youtubeId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IMedia>("Media", mediaSchema);
