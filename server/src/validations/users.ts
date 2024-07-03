import { z } from 'zod';

// Define Zod schemas
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(6),
});

const ProfileIdSchema = z.string().uuid();

export { signInSchema, signUpSchema, ProfileIdSchema };
