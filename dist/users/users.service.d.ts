import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<User[]>;
    getUser(userId: number): Promise<User | null>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(userId: number, data: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(userId: number): Promise<User>;
}
