import { Module } from "@nestjs/common";
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderEntity } from "./entities/order.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, UserEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
