import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  age: z.number().min(1).optional(),
  gender: z.enum(['male', 'female']).optional(),
  preferredLanguage: z.enum(['en', 'ar', 'ur']).optional(),
  isElderly: z.boolean().optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
