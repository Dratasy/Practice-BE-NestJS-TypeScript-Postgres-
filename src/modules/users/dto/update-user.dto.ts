import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType là một utility type của @nestjs/mapped-types
// Nó tạo ra một class mới với tất cả các thuộc tính của class gốc (CreateUserDto) 
// nhưng tất cả các thuộc tính đều là optional (không bắt buộc)
// VD: Khi update user, có thể chỉ cần update một vài trường, không cần update tất cả
export class UpdateUserDto extends PartialType(CreateUserDto) {} 