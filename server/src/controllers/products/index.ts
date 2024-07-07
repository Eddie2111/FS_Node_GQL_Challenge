import { v4 as uuidv4 } from 'uuid';

import { Categories, ProductStatus } from '@prisma/client';
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
  const products = await prisma.products.findMany({
    skip: (page - 1) * 10,
    take: 10,
  });
  return products;
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
  {
    id,
    name,
    description,
    price,
    category,
    status,
  }: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Categories;
    status: ProductStatus;
  }
): Promise<Partial<Products | null>> => {
  return await prisma.products.update({
    where: { id },
    data: { name, description, price, category, status },
  })
};

const ChangeStatus = async (
  _: any,
  { id, status }: { id: string; status: ProductStatus }
): Promise<Partial<Products | null>> => {
  return await prisma.products.update({
    where: { id },
    data: { status },
  })
};

export { CreateProduct, DeleteProduct, ReadAllProducts, ReadOneProduct, UpdateProduct, ChangeStatus };
