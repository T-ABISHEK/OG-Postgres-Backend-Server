import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(user: any): Promise<{
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
