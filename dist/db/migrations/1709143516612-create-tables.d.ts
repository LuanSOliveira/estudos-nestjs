import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateTables1709143516612 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
