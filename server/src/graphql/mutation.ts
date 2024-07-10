import { gql } from 'apollo-server-express';

const userBasedMutations = `
    signIn(email: String!, password: String!): User
    signUp(email: String!, name: String!, password: String!): User
    removeUser(email: String!): String
`;
const productBasedMutations = `
    createProduct(
      name: String!
      description: String!
      price: Int!
      category: Categories!
      user_id: Int!
    ): Product
    updateProduct(
      id: String!
      name: String!
      description: String!
      price: Int!
      category: Categories
      status: ProductStatus
    ): Product
    removeProduct(serial: Int!): String
    changeStatus(
      id: String!
      status: String!
      ): Product
    rentProduct(
    product_id: String
    createdby: Int
    rentedby: Int
    from: String
    to: String
    ): Rent
`;
export const mutationTypeDefs = gql`
  type Mutation {
    ${userBasedMutations}
    ${productBasedMutations}
  }
`;
