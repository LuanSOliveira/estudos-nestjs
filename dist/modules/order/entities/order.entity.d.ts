import { UserEntity } from "src/modules/user/entities/user.entity";
import { TypeOrmEntity } from "src/shared/entities/entity-typeorm";
export declare class OrderEntity extends TypeOrmEntity {
    code: string;
    description: string;
    value: number;
    user: UserEntity;
}
