import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDTO, userId: string): Promise<{
        order: import("./entities/order.entity").OrderEntity;
        message: string;
    }>;
    findAllOrders(): Promise<import("./entities/order.entity").OrderEntity[]>;
    updateOrder(id: string, updateData: UpdateOrderDTO): Promise<{
        order: {
            id: string;
            code: string;
        };
        message: string;
    }>;
    deleteOrder(id: string): Promise<string>;
}
