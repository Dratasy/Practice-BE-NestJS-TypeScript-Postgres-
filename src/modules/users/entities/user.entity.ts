// Import các decorator cần thiết từ typeorm để định nghĩa entity
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

// user-role.enum.ts
export enum UserRole {
    ADMIN = 'ADMIN',
    STAFF = 'STAFF',
}
  
// Đánh dấu class này là một entity với tên bảng là 'users' trong database
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.STAFF })
    role: UserRole;

    @OneToMany(() => Task, task => task.assignee)
    tasks: Task[];
    

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}