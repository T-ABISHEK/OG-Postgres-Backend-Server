import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(emailId: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(user: User): Promise<{
        userId: number;
        phoneNumber: string;
        name: string;
        points: number;
        wallet: number;
        age: number;
        city: string | null;
        emailId: string;
        state: string | null;
        createdAt: Date;
        updatedAt: Date;
        password: string;
    }>;
}
