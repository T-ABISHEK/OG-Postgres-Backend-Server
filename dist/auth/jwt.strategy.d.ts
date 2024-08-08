import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        userId: number;
        emailId: string;
    }>;
}
export {};
