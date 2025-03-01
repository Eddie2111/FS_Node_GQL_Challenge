"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.ProductIdSchema = void 0;
const zod_1 = require("zod");
const productSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    name: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    price: zod_1.z.string().regex(/^\d+(\.\d{1,2})?$/),
});
exports.productSchema = productSchema;
const ProductIdSchema = zod_1.z.string().uuid();
exports.ProductIdSchema = ProductIdSchema;
//# sourceMappingURL=products.js.map