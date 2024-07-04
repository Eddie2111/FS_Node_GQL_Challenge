"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileEmailSchema = exports.ProfileIdSchema = exports.signUpSchema = exports.signInSchema = void 0;
const zod_1 = require("zod");
const signInSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.signInSchema = signInSchema;
const signUpSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(1),
    password: zod_1.z.string().min(6),
});
exports.signUpSchema = signUpSchema;
const ProfileIdSchema = zod_1.z.string().uuid();
exports.ProfileIdSchema = ProfileIdSchema;
const ProfileEmailSchema = zod_1.z.string().max(35).min(8);
exports.ProfileEmailSchema = ProfileEmailSchema;
//# sourceMappingURL=users.js.map