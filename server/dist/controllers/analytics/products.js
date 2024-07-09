"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRentedProductsCount = exports.getIntactProductsCount = exports.getBoughtProductsCount = exports.getProductCount = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../lib/db"));
const getProductCount = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const count = yield db_1.default.products.count();
    return count;
});
exports.getProductCount = getProductCount;
const getBoughtProductsCount = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.products.count({
        where: {
            status: 'BOUGHT'
        }
    });
});
exports.getBoughtProductsCount = getBoughtProductsCount;
const getRentedProductsCount = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.products.count({
        where: {
            status: 'RENTED',
        },
    });
});
exports.getRentedProductsCount = getRentedProductsCount;
const getIntactProductsCount = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.products.count({
        where: {
            status: 'INTACT',
        },
    });
});
exports.getIntactProductsCount = getIntactProductsCount;
//# sourceMappingURL=products.js.map