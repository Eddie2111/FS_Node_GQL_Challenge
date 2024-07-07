import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(6),
});

const ProfileIdSchema = z.number().int();
const ProfileEmailSchema = z.string().max(35).min(8);

export { signInSchema, signUpSchema, ProfileIdSchema, ProfileEmailSchema };
