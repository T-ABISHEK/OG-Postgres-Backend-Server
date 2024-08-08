import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUser(userId: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { phoneNumber: data.phoneNumber },
    });
    if (existingUser) {
      throw new ConflictException('User with this phone number already exists');
    }

    return this.prisma.user.create({
      data: {
        ...data,
      },
    });
  }

  async updateUser(userId: number, data: Prisma.UserUpdateInput): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.user.update({
      where: { userId },
      data: {
        ...data,
      },
    });
  }

  async deleteUser(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.user.delete({ where: { userId } });
  }
}
