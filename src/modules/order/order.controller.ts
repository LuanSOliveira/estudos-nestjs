import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
    constructor (private readonly orderService: OrderService){}

    @Post('/:userId')
    async createOrder(@Body() createOrderDto: CreateOrderDTO, @Param('userId') userId: string){
        const newOrder = await this.orderService.createOrder(createOrderDto, userId)

        return {
            order: newOrder,
            message: "Pedido criado com sucesso."
        }
    }

    @Get()
    async findAllOrders(){
        return await this.orderService.findAllOrders()
    }

    @Put('/:id')
    async updateOrder(
        @Param('id') id: string,
        @Body() updateData: UpdateOrderDTO
    ){
        await this.orderService.updateOrder(id, updateData)
        return{
            order: {
                id: id,
                code: updateData.code
            },
            message: 'Pedido atualizado com sucesso.'
        }
    }

    @Delete('/:id')
    async deleteOrder(@Param('id') id: string){
        await this.orderService.deleteOrder(id)
        return 'Pedido delatado com sucesso.'
    }
}
