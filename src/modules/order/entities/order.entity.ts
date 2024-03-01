import { UserEntity } from "src/modules/user/entities/user.entity";
import { TypeOrmEntity } from "src/shared/entities/entity-typeorm";
import { Entity, Column, ManyToOne } from "typeorm";

@Entity({ name: "orders" })
export class OrderEntity extends TypeOrmEntity {
  @Column({ name: "code", length: 20, nullable: false })
  code: string;

  @Column({name: 'description', length: 255, nullable: false})
  description: string

  @Column({ name: 'value', nullable: false})
  value: number

  @ManyToOne(() => UserEntity, (user) => user.orderList)
  user: UserEntity
}