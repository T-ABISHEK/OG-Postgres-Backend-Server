import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(userId: number): Promise<User | null>;
    updateUser(userId: number, data: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(userId: number): Promise<User>;
}
