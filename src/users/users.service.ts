import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    try {
      return this.prisma.user.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      throw new HttpException('Error creating user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      return this.prisma.user.findMany();
    } catch (error) {
      throw new HttpException('Error retrieving users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUser(userId: number): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({ where: { userId } });
      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException('Error retrieving user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(userId: number, data: Prisma.UserUpdateInput): Promise<User> {
    try {
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
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException('Error updating user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteUser(userId: number): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { userId } });
      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      return this.prisma.user.delete({ where: { userId } });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException('Error deleting user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
