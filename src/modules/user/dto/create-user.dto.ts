import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  @IsEmail(undefined, { message: "Informe um email válido." })
  email: string;

  @MinLength(6, { message: "A senha deve ter o mínimo 6 caractéres." })
  password: string;
}
