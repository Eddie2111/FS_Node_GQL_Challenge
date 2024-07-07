"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersByPage = exports.getUserCount = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../lib/db"));
const getUserCount = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const count = yield db_1.default.user.count();
    return count;
});
exports.getUserCount = getUserCount;
const getUsersByPage = (_1, _a) => tslib_1.__awaiter(void 0, [_1, _a], void 0, function* (_, { page }) {
    return yield db_1.default.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
        },
        take: 10,
        skip: (page - 1) * 10,
    });
});
exports.getUsersByPage = getUsersByPage;
//# sourceMappingURL=users.js.map