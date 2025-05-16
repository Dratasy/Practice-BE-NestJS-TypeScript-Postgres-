// Import Module decorator từ @nestjs/common để đánh dấu đây là một module
import { Module } from '@nestjs/common';
// Import TypeOrmModule để có thể sử dụng các tính năng của TypeORM trong module này
import { TypeOrmModule } from '@nestjs/typeorm';
// Import các thành phần cần thiết của module
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// Import entity User để đăng ký với TypeORM
import { User } from './entities/user.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature([User]) đăng ký entity User với TypeORM
    // Điều này cho phép chúng ta inject Repository<User> vào các service
    TypeOrmModule.forFeature([User])
  ],
  // Đăng ký controller xử lý các request liên quan đến user
  controllers: [UsersController],
  // Đăng ký service chứa business logic để xử lý dữ liệu user
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
