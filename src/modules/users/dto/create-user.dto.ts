import { IsString, IsEmail, MinLength, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';
export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: '123456', description: 'The password of the user' })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ enum: UserRole, default: UserRole.STAFF })
    @IsOptional()
    @IsEnum(UserRole)   
    role: UserRole;
} 