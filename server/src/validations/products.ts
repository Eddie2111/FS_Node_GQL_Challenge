import { z } from 'zod';

const productSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
});

const ProductIdSchema = z.string().uuid();

export { ProductIdSchema, productSchema };
