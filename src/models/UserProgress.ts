import mongoose, { Schema, Document } from 'mongoose';

export interface IUserProgress extends Document {
  userId: mongoose.Types.ObjectId;
  ritualId: mongoose.Types.ObjectId;
  isCompleted: boolean;
  completedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userProgressSchema = new Schema<IUserProgress>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ritualId: { type: Schema.Types.ObjectId, ref: 'Ritual', required: true },
    isCompleted: { type: Boolean, default: false },
    completedAt: { type: Date },
    notes: { type: String },
  },
  { timestamps: true }
);

userProgressSchema.index({ userId: 1, ritualId: 1 }, { unique: true });

export default mongoose.model<IUserProgress>('UserProgress', userProgressSchema);
