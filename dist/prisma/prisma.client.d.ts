import { PrismaClient } from '@prisma/client';
declare class ExtendedPrismaClient extends PrismaClient {
    $on(event: 'beforeExit', callback: () => Promise<void>): void;
}
export declare const prisma: ExtendedPrismaClient;
export {};
