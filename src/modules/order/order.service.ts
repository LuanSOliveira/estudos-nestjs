import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
        
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
        ){}

    async createOrder(createOrder: CreateOrderDTO, userId: string): Promise<OrderEntity>{
        const user = await this.userRepository.findOneBy({id: userId})
        const newOrder = new OrderEntity();
        newOrder.code = createOrder.code;
        newOrder.description = createOrder.description;
        newOrder.value = createOrder.value;
        newOrder.user = user

        await this.orderRepository.save(newOrder)
        return newOrder
    }

    async findAllOrders(){
        return await this.orderRepository.find()
    }

    async updateOrder(id: string, updatedData: UpdateOrderDTO){
        await this.orderRepository.update(id, updatedData)
    }

    async deleteOrder(id: string){
        await this.orderRepository.delete(id)
    }
}
