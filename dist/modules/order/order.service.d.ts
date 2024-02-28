import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { UserEntity } from '../user/entities/user.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly userRepository;
    constructor(orderRepository: Repository<OrderEntity>, userRepository: Repository<UserEntity>);
    createOrder(createOrder: CreateOrderDTO, userId: string): Promise<OrderEntity>;
    findAllOrders(): Promise<OrderEntity[]>;
    updateOrder(id: string, updatedData: UpdateOrderDTO): Promise<void>;
    deleteOrder(id: string): Promise<void>;
}
