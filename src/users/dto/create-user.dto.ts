import { IsString, IsOptional, IsEmail, IsInt, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  phoneNumber: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsEmail()
  emailId: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsInt()
  @IsOptional()
  points?: number;

  @IsNumber()
  @IsOptional()
  wallet?: number;
}
