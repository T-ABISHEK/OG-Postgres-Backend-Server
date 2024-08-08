import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel, Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userData: Prisma.UserCreateInput): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') userId: string): Promise<UserModel> {
    return this.usersService.getUser(Number(userId));
  }

  @Put(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.usersService.updateUser(Number(userId), userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<UserModel> {
    return this.usersService.deleteUser(Number(userId));
  }
}
