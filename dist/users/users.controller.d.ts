import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<{
        userId: number;
        phoneNumber: string;
        name: string;
        city: string | null;
        emailId: string;
        state: string | null;
        createdAt: Date;
        updatedAt: Date;
        points: number;
        wallet: number;
    }[]>;
    getUserById(id: string): Promise<{
        userId: number;
        phoneNumber: string;
        name: string;
        city: string | null;
        emailId: string;
        state: string | null;
        createdAt: Date;
        updatedAt: Date;
        points: number;
        wallet: number;
    }>;
    createUser(createUserDto: CreateUserDto): Promise<{
        userId: number;
        phoneNumber: string;
        name: string;
        city: string | null;
        emailId: string;
        state: string | null;
        createdAt: Date;
        updatedAt: Date;
        points: number;
        wallet: number;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<{
        userId: number;
        phoneNumber: string;
        name: string;
        city: string | null;
        emailId: string;
        state: string | null;
        createdAt: Date;
        updatedAt: Date;
        points: number;
        wallet: number;
    }>;
    deleteUser(id: string): Promise<{
        userId: number;
        phoneNumber: string;
        name: string;
        city: string | null;
        emailId: string;
        state: string | null;
        createdAt: Date;
        updatedAt: Date;
        points: number;
        wallet: number;
    }>;
}
