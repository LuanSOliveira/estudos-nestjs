import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateOrderDTO{
    @IsNotEmpty({message: 'Informe o código do pedido'})
    @IsOptional()
    code: string;
    
    @IsNotEmpty({message: 'Informe a descrição do pedido'})
    @IsOptional()
    description: string;
    
    @IsNotEmpty({message: 'Informe o valor do pedido'})
    @IsOptional()
    value: number;
}