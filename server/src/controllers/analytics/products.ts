import prisma from '../../lib/db';
import type { Products } from '@prisma/client';

const getProductCount = async(): Promise<number>=>{
    const count = await prisma.products.count();
    return count;
}
const getBoughtProductsCount = async(): Promise<number> => {
    return await prisma.products.count({
        where: {
            status: 'BOUGHT'
        }
    });
}
const getRentedProductsCount = async(): Promise<number> => {
    return await prisma.products.count({
      where: {
        status: 'RENTED',
      },
    });
}
const getIntactProductsCount = async (): Promise<number> => {
  return await prisma.products.count({
    where: {
      status: 'INTACT',
    },
  });
};

export { 
    getProductCount,
    getBoughtProductsCount,
    getIntactProductsCount,
    getRentedProductsCount,
};
