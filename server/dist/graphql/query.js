"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.queryTypeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    hello: String
    getUserById(id: Int!): User
    logout(id: String!): String
    deleteProduct(id: String!): String
    readOneProduct(id: String!): Product
    readAllProducts(page: Int!): [Product]
  }
`;
//# sourceMappingURL=query.js.map