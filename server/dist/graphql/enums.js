"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.enumDefs = (0, apollo_server_express_1.gql) `
  enum Categories {
    ELECTRONICS
    FURNITURE
    HOME_APPLIANCES
    SPORTING_GOODS
    OUTDOOR
    TOYS
  }
  enum ProductStatus {
    INTACT
    BOUGHT
    RENTED
  }
`;
//# sourceMappingURL=enums.js.map