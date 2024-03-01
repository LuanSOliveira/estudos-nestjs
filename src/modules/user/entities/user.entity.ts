import { OrderEntity } from "src/modules/order/entities/order.entity";
import { TypeOrmEntity } from "src/shared/entities/entity-typeorm";
import { Entity, Column, OneToMany } from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends TypeOrmEntity {
  @Column({ name: "name", length: 100, nullable: false })
  name: string;

  @Column({ name: "email", length: 70, nullable: false })
  email: string;

  @Column({ name: "password", length: 255, nullable: false })
  password: string;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orderList: OrderEntity[]
}
