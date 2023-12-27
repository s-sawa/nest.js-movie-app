import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMovieTable1703656904437 implements MigrationInterface {
    name = 'CreateMovieTable1703656904437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "updatedAt" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "updatedAt"`);
    }

}
