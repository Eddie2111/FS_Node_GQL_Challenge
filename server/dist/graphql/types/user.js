"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userTypeDefs = (0, apollo_server_express_1.gql) `
  type User {
    id: String
    email: String
    name: String
    password: String
    Products: [FullProduct]
  }
`;
//# sourceMappingURL=user.js.map