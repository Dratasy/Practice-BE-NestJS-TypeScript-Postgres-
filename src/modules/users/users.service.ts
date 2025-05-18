import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    // Constructor nhận vào Repository<User> thông qua dependency injection
    // @InjectRepository(User) là decorator để inject repository của entity User
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    // Phương thức tạo mới một user
    // Nhận vào createUserDto chứa thông tin user cần tạo
    // Trả về Promise chứa user đã được tạo
    async create(createUserDto: CreateUserDto): Promise<User> {
        // Tạo instance mới của entity User từ createUserDto
        const user = this.usersRepository.create(createUserDto);
        // Lưu user vào database và trả về kết quả
        return await this.usersRepository.save(user);
    }

    // Phương thức lấy tất cả users
    // Trả về Promise chứa mảng các user
    findAll(): Promise<User[]> {
        return this.usersRepository.find({ relations: ['tasks']}); 
      }

    // Phương thức tìm một user theo id
    // Nhận vào id của user cần tìm
    // Trả về Promise chứa user tìm được hoặc throw NotFoundException
    async findOne(id: number): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { id }, relations: ['tasks']}); // 
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    // Phương thức cập nhật thông tin user
    // Nhận vào id và updateUserDto chứa thông tin cần cập nhật
    // Trả về Promise chứa user đã được cập nhật
    async update(id: number, dto: UpdateUserDto): Promise<User> {
        const user = await this.findOne(id);
        Object.assign(user, dto);
        return this.usersRepository.save(user);
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await this.usersRepository.remove(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ where: { email } });
        return user || undefined;
    }

    async findByEmailOrUsername(email: string, username: string) {
        return this.usersRepository.findOne({
          where: [
            { email },
            { username },
          ],
        });
      }
      
}
