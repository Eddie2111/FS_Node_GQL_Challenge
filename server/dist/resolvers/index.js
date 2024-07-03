"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const tslib_1 = require("tslib");
const hello_1 = tslib_1.__importDefault(require("../controllers/hello"));
const users_1 = require("../controllers/users");
exports.resolvers = {
    Query: {
        hello: hello_1.default,
        logout: users_1.logOut,
        deleteProduct: (_, { id }) => `Product with ID ${id} deleted`,
        readOneProduct: (_, { id }) => {
            return {
                id,
                serial: '123',
                name: 'Product 1',
                description: 'A great product',
                price: '100',
            };
        },
        readAllProducts: (_, { page }) => {
            return [
                {
                    id: '1',
                    serial: '123',
                    name: 'Product 1',
                    description: 'A great product',
                    price: '100',
                },
                {
                    id: '2',
                    serial: '124',
                    name: 'Product 2',
                    description: 'Another great product',
                    price: '200',
                },
            ];
        },
    },
    Mutation: {
        signIn: users_1.signIn,
        signUp: users_1.signUp,
        createProduct: (_, { serial, name, description, price, }) => {
            return { id: '1', serial, name, description, price };
        },
        updateProduct: (_, { serial, name, description, price, }) => {
            return { id: '1', serial, name, description, price };
        },
    },
};
//# sourceMappingURL=index.js.map