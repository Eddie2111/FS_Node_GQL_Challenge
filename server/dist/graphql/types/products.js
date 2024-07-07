"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.productTypeDefs = (0, apollo_server_express_1.gql) `
  type Product {
    serial: Int
    id: String
    name: String
    description: String
    price: Int
    category: Categories
    status: ProductStatus
    user_id: Int
    created_at: String
    updated_at: String
  }
`;
//# sourceMappingURL=products.js.map