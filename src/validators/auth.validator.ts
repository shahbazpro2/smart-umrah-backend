import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  age: z.number().min(1).optional(),
  gender: z.enum(['male', 'female']).optional(),
  preferredLanguage: z.enum(['en', 'ar', 'ur']).default('en'),
  experienceLevel: z.enum(['first_time', 'experienced']).default('first_time'),
  isElderly: z.boolean().default(false),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Invalid password'),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
