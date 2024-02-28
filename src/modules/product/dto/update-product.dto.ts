import { IsNotEmpty } from "class-validator";

export class UpdateProductDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    name: string;
}