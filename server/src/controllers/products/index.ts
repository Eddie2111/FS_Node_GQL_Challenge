import { v4 as uuidv4 } from 'uuid';

import { Categories } from '@prisma/client';
import type { Products } from '@prisma/client';

import prisma from '../../lib/db';
import { ProductIdSchema, productSchema } from '../../validations/products';

const DeleteProduct = async (_: any, { id }: { id: string }): Promise<string> => {
  if (!ProductIdSchema.parse(id)) {
    throw new Error('Invalid product ID');
  }
  await prisma.products.delete({ where: { id } });
  return `Product with ID ${id} deleted`;
};

const ReadOneProduct = async (
  _: any,
  { id }: { id: string }
): Promise<Partial<Products | null>> => {
  if (!ProductIdSchema.parse(id)) {
    throw new Error('Invalid product ID');
  }
  return await prisma.products.findUnique({
    where: { id },
  });
};

const ReadAllProducts = async (
  _: any,
  { page }: { page: number }
): Promise<Partial<Products[] | null>> => {
  return await prisma.products.findMany({
    skip: (page - 1) * 10,
    take: 10,
  });
};

const CreateProduct = async (
  _: any,
  {
    name,
    description,
    price,
    category,
    user_id,
  }: { name: string; description: string; price: number; category: Categories; user_id: number }
) => {
  const id = uuidv4();
  if (user_id) {
    const newProduct = await prisma.products.create({
      data: {
        id,
        name,
        description,
        price,
        category,
        user_id,
      },
    });
    return newProduct;
  } else {
    throw new Error('Invalid user ID');
  }
};

const UpdateProduct = async (
  _: any,
  { id, name, description, price }: { id: string; name: string; description: string; price: number }
): Promise<Partial<Products | null>> => {
  return { id, name, description, price };
};

export { CreateProduct, DeleteProduct, ReadAllProducts, ReadOneProduct, UpdateProduct };
