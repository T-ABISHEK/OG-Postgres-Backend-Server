"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
class ExtendedPrismaClient extends client_1.PrismaClient {
    $on(event, callback) {
        super.$on(event, callback);
    }
}
exports.prisma = new ExtendedPrismaClient();
//# sourceMappingURL=prisma.client.js.map