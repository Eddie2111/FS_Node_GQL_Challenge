import prisma from '../../lib/db';

const getProductCount = async(): Promise<number>=>{
    const count = await prisma.products.count();
    return count;
}


export { getProductCount};