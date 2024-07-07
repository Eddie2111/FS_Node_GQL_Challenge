"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const products_1 = require("./types/products");
const user_1 = require("./types/user");
const enums_1 = require("./enums");
const mutation_1 = require("./mutation");
const query_1 = require("./query");
const baseTypeDefs = (0, apollo_server_express_1.gql) `
  type Query
  type Mutation
`;
exports.typeDefs = [
    baseTypeDefs,
    enums_1.enumDefs,
    user_1.userTypeDefs,
    products_1.productTypeDefs,
    query_1.queryTypeDefs,
    mutation_1.mutationTypeDefs,
];
//# sourceMappingURL=types.js.map