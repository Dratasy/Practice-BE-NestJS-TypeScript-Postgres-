import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameNameToFullName1747208107749 implements MigrationInterface {
    name = 'RenameNameToFullName1747208107749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "fullName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "fullName" TO "name"`);
    }

}
