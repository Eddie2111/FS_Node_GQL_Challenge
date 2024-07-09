"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByID = exports.RemoveUser = exports.signUp = exports.signIn = exports.logOut = void 0;
const tslib_1 = require("tslib");
const users_1 = require("../../validations/users");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const db_1 = tslib_1.__importDefault(require("../../lib/db"));
const logOut = (_1, _a) => tslib_1.__awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
    const data = users_1.ProfileIdSchema.parse(id);
    return `User with id ${data} has been logged out`;
});
exports.logOut = logOut;
const getUserByID = (_2, _b) => tslib_1.__awaiter(void 0, [_2, _b], void 0, function* (_, { id }) {
    const userID = users_1.ProfileIdSchema.parse(id);
    return yield db_1.default.user.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            Products: true,
        },
    });
});
exports.getUserByID = getUserByID;
const signIn = (_3, _c) => tslib_1.__awaiter(void 0, [_3, _c], void 0, function* (_, { email, password }) {
    var _d;
    const data = users_1.signInSchema.parse({ email, password });
    const userData = yield db_1.default.user.findFirst({
        where: {
            email: data.email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
        },
    });
    if (userData && (yield bcrypt_1.default.compare(password, (_d = userData.password) !== null && _d !== void 0 ? _d : ''))) {
        return userData;
    }
    else {
        return null;
    }
});
exports.signIn = signIn;
const signUp = (_4, _e) => tslib_1.__awaiter(void 0, [_4, _e], void 0, function* (_, { email, name, password }) {
    var _f;
    const data = users_1.signUpSchema.parse({ email, name, password });
    const hash_password = yield bcrypt_1.default.hash((_f = data === null || data === void 0 ? void 0 : data.password) !== null && _f !== void 0 ? _f : '', 2);
    return yield db_1.default.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hash_password,
        },
    });
});
exports.signUp = signUp;
const RemoveUser = (_5, _g) => tslib_1.__awaiter(void 0, [_5, _g], void 0, function* (_, { email }) {
    const data = users_1.ProfileEmailSchema.parse(email);
    yield db_1.default.user.delete({ where: { email: data } });
    return `User with email ${data} has been removed`;
});
exports.RemoveUser = RemoveUser;
//# sourceMappingURL=index.js.map