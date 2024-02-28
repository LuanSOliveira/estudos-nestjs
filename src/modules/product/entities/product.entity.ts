import { TypeOrmEntity } from "src/shared/entities/entity-typeorm";
import { Entity, Column } from "typeorm";

@Entity({ name: "products" })
export class ProductEntity extends TypeOrmEntity {
  @Column({ name: "name", length: 100, nullable: false })
  name: string;
}