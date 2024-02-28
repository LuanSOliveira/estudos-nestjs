import { OrderEntity } from "src/modules/order/entities/order.entity";
import { TypeOrmEntity } from "src/shared/entities/entity-typeorm";
export declare class UserEntity extends TypeOrmEntity {
    name: string;
    email: string;
    password: string;
    orderList: OrderEntity[];
}
