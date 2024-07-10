"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const tslib_1 = require("tslib");
const products_1 = require("../controllers/products");
const users_1 = require("../controllers/users");
const products_2 = require("../controllers/analytics/products");
const users_2 = require("../controllers/analytics/users");
const hello_1 = tslib_1.__importDefault(require("../controllers/hello"));
exports.resolvers = {
    Query: {
        hello: hello_1.default,
        getUserById: users_1.getUserByID,
        logout: users_1.logOut,
        readOneProduct: products_1.ReadOneProduct,
        readAllProducts: products_1.ReadAllProducts,
        getBoughtProducts: products_1.getBoughtProducts,
        getIntactProducts: products_1.getIntactProducts,
        getRentedProducts: products_1.getRentedProducts,
        getOneRent: products_1.GetOneRent,
        getUserCount: users_2.getUserCount,
        getUsersByPage: users_2.getUsersByPage,
        GetRentedProductsByUser: products_1.GetRentedProductsByUser,
        getProductCount: products_2.getProductCount,
        getBoughtProductsCount: products_2.getBoughtProductsCount,
        getIntactProductsCount: products_2.getIntactProductsCount,
        getRentedProductsCount: products_2.getRentedProductsCount,
    },
    Mutation: {
        signIn: users_1.signIn,
        signUp: users_1.signUp,
        removeUser: users_1.RemoveUser,
        createProduct: products_1.CreateProduct,
        updateProduct: products_1.UpdateProduct,
        deleteProduct: products_1.DeleteProduct,
        changeStatus: products_1.ChangeStatus,
        rentProduct: products_1.RentProduct,
    },
};
//# sourceMappingURL=index.js.map