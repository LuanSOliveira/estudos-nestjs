import { IsNotEmpty } from "class-validator";

export class CreateOrderDTO{
    @IsNotEmpty({message: 'Informe o código do pedido'})
    code: string;

    @IsNotEmpty({message: 'Informe a descrição do pedido'})
    description: string;

    @IsNotEmpty({message: 'Informe o valor do pedido'})
    value: number;
}