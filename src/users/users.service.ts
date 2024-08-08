import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...data,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUser(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { userId } });
  }

  async updateUser(userId: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { userId },
      data: {
        ...data,
      },
    });
  }

  async deleteUser(userId: number): Promise<User> {
    return this.prisma.user.delete({ where: { userId } });
  }
}
