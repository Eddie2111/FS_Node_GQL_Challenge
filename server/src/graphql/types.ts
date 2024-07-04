import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum Categories {
    ELECTRONICS
    FURNITURE
    HOME_APPLIANCES
    SPORTING_GOODS
    OUTDOOR
    TOYS
  }
  type Query {
    hello: String
    logout(id: String!): String
    deleteProduct(id: String!): String
    readOneProduct(id: String!): Product
    readAllProducts(page: Int!): [Product]
  }

  type Mutation {
    signIn(email: String!, password: String!): User
    signUp(email: String!, name: String!, password: String!): User
    removeUser(email: String!): String
    createProduct(
      name: String!
      description: String!
      price: Int!
      category: Categories!
      user_id: Int!
    ): Product
    updateProduct(
      serial: Int!
      name: String!
      description: String!
      price: Int!
      category: Categories!
    ): Product
  }

  type Product {
    serial: Int
    id: String
    name: String
    description: String
    price: Int
    category: Categories
    user_id: Int
    createdAt: String
    updatedAt: String
  }
  type User {
    id: String
    email: String
    name: String
    password: String
  }
`;
