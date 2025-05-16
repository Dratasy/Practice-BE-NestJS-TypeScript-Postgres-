import { IsString, IsOptional, IsBoolean, IsDate, IsNumber, IsInt, IsEnum, IsDateString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';  
import { TaskStatus, TaskPriority } from '../entities/task.entity';

export class CreateTaskDto {
    @IsString()
    @ApiProperty({ description: 'Description of the task' })    
    description: string;
  
    @IsOptional()
    @IsInt()
    @ApiProperty({ description: 'Progress of the task' })
    progress?: number;
  
    @IsOptional()
    @IsEnum(TaskStatus)
    @ApiProperty({ description: 'Status of the task' })
    status?: TaskStatus;
  
    @IsOptional()
    @IsEnum(TaskPriority)
    @ApiProperty({ description: 'Priority of the task' })
    priority?: TaskPriority;
  
    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Assignee username of the task' })
    assigneeUsername?: string;
  
    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: 'Estimated start date of the task' })
    estimatedStartDate?: Date;
  
    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: 'Estimated end date of the task' })
    estimatedEndDate?: Date;
  
    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: 'Actual start date of the task' })
    actualStartDate?: Date;
  
    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: 'Actual end date of the task' })
    actualEndDate?: Date;
  
    @IsOptional()
    @IsInt()
    @ApiProperty({ description: 'Estimated hours of the task' })
    estimatedHours?: number;
  
    @IsOptional()
    @IsArray()
    @ApiProperty({ description: 'Tags of the task' })
    tags?: string[];
  }