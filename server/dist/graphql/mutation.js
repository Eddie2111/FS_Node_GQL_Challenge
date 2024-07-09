"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
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
`;
exports.mutationTypeDefs = (0, apollo_server_express_1.gql) `
  type Mutation {
    ${userBasedMutations}
    ${productBasedMutations}
  }
`;
//# sourceMappingURL=mutation.js.map