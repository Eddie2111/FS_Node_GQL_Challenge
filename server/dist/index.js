"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = tslib_1.__importDefault(require("express"));
const types_1 = require("./graphql/types");
const resolvers_1 = require("./resolvers");
const server = new apollo_server_express_1.ApolloServer({ typeDefs: types_1.typeDefs, resolvers: resolvers_1.resolvers });
function startServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield server.start();
        const app = (0, express_1.default)();
        server.applyMiddleware({ app });
        app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
    });
}
startServer();
//# sourceMappingURL=index.js.map