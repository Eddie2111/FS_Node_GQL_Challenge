import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: String
    email: String
    name: String
    password: String
  }
`;
