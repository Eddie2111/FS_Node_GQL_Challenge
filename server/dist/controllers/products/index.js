"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStatus = exports.UpdateProduct = exports.ReadOneProduct = exports.ReadAllProducts = exports.DeleteProduct = exports.CreateProduct = void 0;
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const db_1 = tslib_1.__importDefault(require("../../lib/db"));
const products_1 = require("../../validations/products");
const DeleteProduct = (_1, _a) => tslib_1.__awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
    if (!products_1.ProductIdSchema.parse(id)) {
        throw new Error('Invalid product ID');
    }
    yield db_1.default.products.delete({ where: { id } });
    return `Product with ID ${id} deleted`;
});
exports.DeleteProduct = DeleteProduct;
const ReadOneProduct = (_2, _b) => tslib_1.__awaiter(void 0, [_2, _b], void 0, function* (_, { id }) {
    if (!products_1.ProductIdSchema.parse(id)) {
        throw new Error('Invalid product ID');
    }
    return yield db_1.default.products.findUnique({
        where: { id },
    });
});
exports.ReadOneProduct = ReadOneProduct;
const ReadAllProducts = (_3, _c) => tslib_1.__awaiter(void 0, [_3, _c], void 0, function* (_, { page }) {
    const products = yield db_1.default.products.findMany({
        skip: (page - 1) * 10,
        take: 10,
    });
    return products;
});
exports.ReadAllProducts = ReadAllProducts;
const CreateProduct = (_4, _d) => tslib_1.__awaiter(void 0, [_4, _d], void 0, function* (_, { name, description, price, category, user_id, }) {
    const id = (0, uuid_1.v4)();
    if (user_id) {
        const newProduct = yield db_1.default.products.create({
            data: {
                id,
                name,
                description,
                price,
                category,
                user_id,
            },
        });
        return newProduct;
    }
    else {
        throw new Error('Invalid user ID');
    }
});
exports.CreateProduct = CreateProduct;
const UpdateProduct = (_5, _e) => tslib_1.__awaiter(void 0, [_5, _e], void 0, function* (_, { id, name, description, price, category, status, }) {
    return yield db_1.default.products.update({
        where: { id },
        data: { name, description, price, category, status },
    });
});
exports.UpdateProduct = UpdateProduct;
const ChangeStatus = (_6, _f) => tslib_1.__awaiter(void 0, [_6, _f], void 0, function* (_, { id, status }) {
    return yield db_1.default.products.update({
        where: { id },
        data: { status },
    });
});
exports.ChangeStatus = ChangeStatus;
//# sourceMappingURL=index.js.map