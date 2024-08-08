import { IsString, IsOptional, IsEmail, IsInt, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsEmail()
  @IsOptional()
  emailId?: string;

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
