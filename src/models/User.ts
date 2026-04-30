import mongoose, { Schema, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  gender?: 'male' | 'female';
  preferredLanguage: 'en' | 'ar' | 'ur';
  experienceLevel: 'first_time' | 'experienced';
  isElderly: boolean;
  avatarPath?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    age: { type: Number },
    gender: { type: String, enum: ['male', 'female'] },
    preferredLanguage: { type: String, enum: ['en', 'ar', 'ur'], default: 'en' },
    experienceLevel: { type: String, enum: ['first_time', 'experienced'], default: 'first_time' },
    isElderly: { type: Boolean, default: false },
    avatarPath: { type: String },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (this: IUser, enteredPassword: string) {
  return bcryptjs.compare(enteredPassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema);
