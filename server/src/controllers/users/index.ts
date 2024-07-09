import {
  signInSchema,
  signUpSchema,
  ProfileIdSchema,
  ProfileEmailSchema,
} from '../../validations/users';
import bcrypt from 'bcrypt';

import type { User as UserProps } from '@prisma/client';

import prisma from '../../lib/db';

const logOut = async (_: any, { id }: { id: string }): Promise<string> => {
  const data = ProfileIdSchema.parse(id);
  return `User with id ${data} has been logged out`;
};

const getUserByID = async (
  _: any,
  { id }: { id: number }
): Promise<Partial<UserProps | null>> => {
  const userID = ProfileIdSchema.parse(id);
  return await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      Products: true,
    },
  });
};

const signIn = async (
  _: any,
  { email, password }: { email: string; password: string }
): Promise<Partial<UserProps | null>> => {
  const data = signInSchema.parse({ email, password });
  const userData = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });
  if (userData && (await bcrypt.compare(password, userData.password ?? ''))) {
    return userData;
  } else {
    return null;
  }
};

const signUp = async (
  _: any,
  { email, name, password }: { email: string; name: string; password: string }
): Promise<UserProps> => {
  const data = signUpSchema.parse({ email, name, password });
  const hash_password = await bcrypt.hash(data?.password ?? '', 2);
  return await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hash_password,
    },
  });
};
const RemoveUser = async (_: any, { email }: { email: string }): Promise<string> => {
  const data = ProfileEmailSchema.parse(email);
  await prisma.user.delete({ where: { email: data } });
  return `User with email ${data} has been removed`;
};

export { logOut, signIn, signUp, RemoveUser, getUserByID };
