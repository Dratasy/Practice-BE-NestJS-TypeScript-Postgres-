import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John', email: 'john@gmail.com' },
        { id: 2, name: 'Jane', email: 'jane@gmail.com' },
        { id: 3, name: 'Doe', email: 'doe@gmail.com' },
    ];      

    findAll() {
        return this.users;
    }

    // Phương thức findOne nhận vào một tham số id kiểu number
    // Sử dụng phương thức find() của mảng để tìm user có id trùng khớp
    // find() sẽ tự động truyền từng phần tử của mảng this.users vào arrow function
    // - this.users là mảng users được khai báo ở đầu class: private users = [...]
    // - Với mỗi lần lặp, find() sẽ gán một phần tử của mảng this.users vào biến user
    // - Arrow function (user => user.id === id) sẽ kiểm tra id của user hiện tại
    // - Trả về user đầu tiên thỏa mãn điều kiện, hoặc undefined nếu không tìm thấy
    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    // Dấu ... (spread operator) được sử dụng để:
    // 1. Trong { id: this.users.length + 1, ...createUserDto }:
    //    - Tạo một object mới với thuộc tính id
    //    - Sau đó copy tất cả thuộc tính từ createUserDto vào object mới
    //    - VD: Nếu createUserDto = { name: "John", email: "john@gmail.com", password: "123456" }
    //    - Kết quả: { id: 4, name: "John", email: "john@gmail.com", password: "123456" }
    create(createUserDto: CreateUserDto) {
        const newUser = { id: this.users.length + 1, ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }   

    update(id: number, updateUserDto: UpdateUserDto) {
        const user = this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        // Cú pháp return { ...user, ...updateUserDto }:
        // - Dấu {} tạo một object mới
        // - ...user spread tất cả thuộc tính của user vào object mới
        // - ...updateUserDto spread và ghi đè các thuộc tính từ updateUserDto
        // - Thứ tự spread quan trọng: thuộc tính spread sau sẽ ghi đè thuộc tính trước
        // - Kết quả là một object mới với các thuộc tính được merge từ cả 2 object
        // Tạo object mới với các thuộc tính được merge từ user và updateUserDto
        const updatedUser = {
            ...user,
            ...updateUserDto,
        };

        // Cập nhật user trong mảng this.users
        const index = this.users.findIndex(u => u.id === id);
        this.users[index] = updatedUser;

        return updatedUser;
    }

    remove(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return {
            message: 'User deleted successfully',
        };
    }
}
