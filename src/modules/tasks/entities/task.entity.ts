import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum TaskStatus {
    NEW = 'NEW',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    CANCEL = 'CANCEL',
  }
  
  export enum TaskPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
  }

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column('int', { default: 0 })
  progress: number;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.NEW,
  })
  status: TaskStatus;

  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  priority: TaskPriority;

  @ManyToOne(() => User, user => user.tasks, {
    onDelete: 'CASCADE', // hoặc 'CASCADE' nếu muốn xóa task khi user bị xóa
    nullable: true
  })
  assignee: User;

  @Column({ type: 'date', nullable: true })
  estimatedStartDate: Date;

  @Column({ type: 'date', nullable: true })
  estimatedEndDate: Date;

  @Column({ type: 'date', nullable: true })
  actualStartDate: Date;

  @Column({ type: 'date', nullable: true })
  actualEndDate: Date;

  @Column({ type: 'int', nullable: true })
  estimatedHours: number;

  @Column("simple-array", { nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 