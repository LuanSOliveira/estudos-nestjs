import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { FindUserDTO } from "./dto/find-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    const newUser = this.userService.createUser(createUser);

    return {
      user: new FindUserDTO((await newUser).id, (await newUser).name),
      message: "Usuário criado com sucesso.",
    };
  }

  @Get()
  async findAllUsers() {
    const allUsersList: FindUserDTO[] =
      await this.userService.findAllUsers();
    return allUsersList;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updatedData: UpdateUserDTO
  ){
    await this.userService.updateUser(id, updatedData)

    return {
        user: new FindUserDTO(id, updatedData.name),
        message: 'Usuário atualizado com sucesso.'
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id:string){
    await this.userService.deleteUser(id)
    return 'Usuário deletado com sucesso.'
  }
}
