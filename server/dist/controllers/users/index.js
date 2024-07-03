"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signIn = exports.logOut = void 0;
const tslib_1 = require("tslib");
const logOut = (_1, _a) => tslib_1.__awaiter(void 0, [_1, _a], void 0, function* (_, { id }) { return `User with ID ${id} logged out`; });
exports.logOut = logOut;
const signIn = (_2, _b) => tslib_1.__awaiter(void 0, [_2, _b], void 0, function* (_, { email, password }) {
    return `User signed in with email ${email}`;
});
exports.signIn = signIn;
const signUp = (_3, _c) => tslib_1.__awaiter(void 0, [_3, _c], void 0, function* (_, { email, name, password }) {
    return `User signed up with email ${email}, name ${name}`;
});
exports.signUp = signUp;
//# sourceMappingURL=index.js.map