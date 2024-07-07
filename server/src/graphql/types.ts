import { gql } from 'apollo-server-express';

import { productTypeDefs } from './types/products';
import { userTypeDefs } from './types/user';
import { enumDefs } from "./enums";
import { mutationTypeDefs } from './mutation';
import { queryTypeDefs } from './query';

const baseTypeDefs = gql`
  type Query
  type Mutation
`;

export const typeDefs = [
  baseTypeDefs,
  enumDefs,
  userTypeDefs,
  productTypeDefs,
  queryTypeDefs,
  mutationTypeDefs,
];