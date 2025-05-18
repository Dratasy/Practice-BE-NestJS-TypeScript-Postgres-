import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';
// PartialType là một utility type của @nestjs/mapped-types
// Nó tạo ra một class mới với tất cả các thuộc tính của class gốc (CreateUserDto) 
// nhưng tất cả các thuộc tính đều là optional (không bắt buộc)
// VD: Khi update user, có thể chỉ cần update một vài trường, không cần update tất cả
export class UpdateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
    @IsOptional()
    @IsString()
    username?: string;

    @ApiProperty({ example: '123456', description: 'The password of the user' })
    @IsOptional() 
    @IsString()
    password?: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty({ example: 'STAFF', description: 'The role of the user' })
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;
} 