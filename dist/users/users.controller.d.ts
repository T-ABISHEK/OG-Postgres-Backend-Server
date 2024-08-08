import { UsersService } from './users.service';
import { User as UserModel, Prisma } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(userData: Prisma.UserCreateInput): Promise<UserModel>;
    getUsers(): Promise<UserModel[]>;
    getUser(userId: string): Promise<UserModel>;
    updateUser(userId: string, userData: Prisma.UserUpdateInput): Promise<UserModel>;
    deleteUser(userId: string): Promise<UserModel>;
}
