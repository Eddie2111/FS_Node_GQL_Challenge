import { gql } from 'apollo-server-express';

export const queryTypeDefs = gql`
  type Query {
    hello: String
    getUserById(id: Int!): User
    logout(id: String!): String
    deleteProduct(id: String!): String
    readOneProduct(id: String!): Product
    readAllProducts(page: Int!): [Product]
    getUserCount: Int
    getProductCount: Int
    getUsersByPage(page: Int!): [User]
  }
`;
