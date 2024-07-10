"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.queryTypeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    # test
    hello: String

    # user queries
    getUserById(id: Int!): User
    logout(id: String!): String

    # product queries
    readOneProduct(id: String!): FullProduct
    readAllProducts(page: Int!): [Product]
    getIntactProducts(page: Int!): [FullProduct]
    getBoughtProducts(page: Int!): [FullProduct]
    getRentedProducts(page: Int!): [FullProduct]
    getOneRent(id: String!): Rent
    # product analytics
    getIntactProductsCount: Int
    getBoughtProductsCount: Int
    getRentedProductsCount: Int
    getProductCount: Int # Assuming this fetches total product count
    # analytics
    getUserCount: Int
    getUsersByPage(page: Int!): [User]
    GetRentedProductsByUser(id: String!): [Rent]
  }
`;
//# sourceMappingURL=query.js.map