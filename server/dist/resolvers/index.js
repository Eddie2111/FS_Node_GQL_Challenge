"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const tslib_1 = require("tslib");
const products_1 = require("../controllers/products");
const users_1 = require("../controllers/users");
const hello_1 = tslib_1.__importDefault(require("../controllers/hello"));
exports.resolvers = {
    Query: {
        hello: hello_1.default,
        getUserById: users_1.getUserID,
        logout: users_1.logOut,
        deleteProduct: products_1.DeleteProduct,
        readOneProduct: products_1.ReadOneProduct,
        readAllProducts: products_1.ReadAllProducts,
    },
    Mutation: {
        signIn: users_1.signIn,
        signUp: users_1.signUp,
        removeUser: users_1.RemoveUser,
        createProduct: products_1.CreateProduct,
        updateProduct: products_1.UpdateProduct,
        changeStatus: products_1.ChangeStatus,
    },
};
//# sourceMappingURL=index.js.map