const { MigrationInterface, QueryRunner } = require("typeorm");

class CreateTasksTable1747212338988 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "tasks" (
                "id" SERIAL PRIMARY KEY,
                "title" VARCHAR NOT NULL,
                "description" TEXT,
                "isCompleted" BOOLEAN NOT NULL DEFAULT false,
                "dueDate" TIMESTAMP,
                "userId" INTEGER NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "FK_tasks_users" FOREIGN KEY ("userId") 
                    REFERENCES "users" ("id") ON DELETE CASCADE
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }
}

module.exports = CreateTasksTable1747212338988;
