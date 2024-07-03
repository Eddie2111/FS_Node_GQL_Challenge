import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Query {
    hello: String
    logout(id: String!): String
    deleteProduct(id: String!): String
    readOneProduct(id: String!): Product
    readAllProducts(page: String!): [Product]
  }

  type Mutation {
    signIn(email: String!, password: String!): String
    signUp(email: String!, name: String!, password: String!): String
    createProduct(
      serial: String!
      name: String!
      description: String!
      price: String!
    ): Product
    updateProduct(
      serial: String!
      name: String!
      description: String!
      price: String!
    ): Product
  }

  type Product {
    id: String
    serial: String
    name: String
    description: String
    price: String
  }
`;
