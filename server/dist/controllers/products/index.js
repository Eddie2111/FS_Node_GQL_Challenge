"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRentedProductsByUser = exports.RentProduct = exports.GetOneRent = exports.getRentedProducts = exports.getIntactProducts = exports.getBoughtProducts = exports.ChangeStatus = exports.UpdateProduct = exports.ReadOneProduct = exports.ReadAllProducts = exports.DeleteProduct = exports.CreateProduct = void 0;
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
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            category: true,
            status: true,
            created_at: true,
            updated_at: true,
            user_id: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
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
                status: 'INTACT'
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
        data: { name, description, price, category, status, updated_at: new Date() },
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
const getBoughtProducts = (_7, _g) => tslib_1.__awaiter(void 0, [_7, _g], void 0, function* (_, { page }) {
    return yield db_1.default.products.findMany({
        where: { status: 'BOUGHT' },
        take: 10,
        skip: (page - 1) * 10,
        select: {
            id: true,
            name: true,
            price: true,
            status: true,
            category: true,
            description: true,
            created_at: true,
            updated_at: true,
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
});
exports.getBoughtProducts = getBoughtProducts;
const getIntactProducts = (_8, _h) => tslib_1.__awaiter(void 0, [_8, _h], void 0, function* (_, { page }) {
    return yield db_1.default.products.findMany({
        where: { status: 'INTACT' },
        take: 10,
        skip: (page - 1) * 10,
        select: {
            id: true,
            name: true,
            price: true,
            status: true,
            category: true,
            description: true,
            created_at: true,
            updated_at: true,
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
});
exports.getIntactProducts = getIntactProducts;
const getRentedProducts = (_9, _j) => tslib_1.__awaiter(void 0, [_9, _j], void 0, function* (_, { page }) {
    return yield db_1.default.products.findMany({
        where: { status: 'RENTED' },
        take: 10,
        skip: (page - 1) * 10,
        select: {
            id: true,
            name: true,
            price: true,
            status: true,
            category: true,
            description: true,
            created_at: true,
            updated_at: true,
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
});
exports.getRentedProducts = getRentedProducts;
const RentProduct = (_10, _k) => tslib_1.__awaiter(void 0, [_10, _k], void 0, function* (_, { product_id, createdby, rentedby, from, to, }) {
    return yield db_1.default.rented.create({
        data: {
            id: (0, uuid_1.v4)(),
            product_id,
            createdby,
            rentedby,
            from: new Date(from.toString()),
            to: new Date(to.toString()),
        },
    });
});
exports.RentProduct = RentProduct;
const GetOneRent = (_11, _l) => tslib_1.__awaiter(void 0, [_11, _l], void 0, function* (_, { id }) {
    return yield db_1.default.rented.findUnique({
        where: { product_id: id },
    });
});
exports.GetOneRent = GetOneRent;
const GetRentedProductsByUser = (_12, _m) => tslib_1.__awaiter(void 0, [_12, _m], void 0, function* (_, { id }) {
    const userid = parseInt(id !== null && id !== void 0 ? id : "0", 10);
    return yield db_1.default.rented.findMany({
        where: { rentedby: userid },
    });
});
exports.GetRentedProductsByUser = GetRentedProductsByUser;
//# sourceMappingURL=index.js.map