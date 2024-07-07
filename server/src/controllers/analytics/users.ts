import { User } from '@prisma/client';

import prisma from '../../lib/db';

const getUserCount = async ():Promise<number> => {
  const count = await prisma.user.count();
  return count;
};
const getUsersByPage = async (
  _: any,
  { page }: { page: number }
): Promise<Partial<{ id: number; email: string; name: string }[] | null>> => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
    take: 10,
    skip: (page-1) * 10,
  });
};
export { getUserCount, getUsersByPage };
