import { IsNotEmpty } from "class-validator";

export class CreateProductDTO {
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;
}