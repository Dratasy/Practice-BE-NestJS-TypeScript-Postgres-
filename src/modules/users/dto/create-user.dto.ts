import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: '123456', description: 'The password of the user' })
    @IsNotEmpty()
    @IsString()
    password: string;
} 