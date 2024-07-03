import { z } from 'zod';

const productSchema = z.object({
  serial: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
});

const paginationSchema = z.object({
  page: z.string().regex(/^\d+$/),
});

const ProductIdSchema = z.string().uuid();

export {
  ProductIdSchema,
  productSchema,
  paginationSchema,
  // ... other validations
};
