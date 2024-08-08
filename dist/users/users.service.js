"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        try {
            return this.prisma.user.create({
                data: {
                    ...data,
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException('Error creating user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUsers() {
        try {
            return this.prisma.user.findMany();
        }
        catch (error) {
            throw new common_1.HttpException('Error retrieving users', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUser(userId) {
        try {
            const user = await this.prisma.user.findUnique({ where: { userId } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            return user;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.HttpException('Error retrieving user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateUser(userId, data) {
        try {
            const user = await this.prisma.user.findUnique({ where: { userId } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            return this.prisma.user.update({
                where: { userId },
                data: {
                    ...data,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.HttpException('Error updating user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteUser(userId) {
        try {
            const user = await this.prisma.user.findUnique({ where: { userId } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            return this.prisma.user.delete({ where: { userId } });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.HttpException('Error deleting user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map