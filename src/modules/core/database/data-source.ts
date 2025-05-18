import { DataSource } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Task } from '../../tasks/entities/task.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', 
  password: 'postgres',
  database: 'user_management',
  entities: [User, Task],
  synchronize: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  logging: ["error", "warn", "log"],
}); 