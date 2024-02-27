import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { FindAllUsersDTO } from './dto/find-all-users.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() createUser: CreateUserDTO){
        const newUser = this.userService.createUser(createUser)

        return {
            user: new FindAllUsersDTO((await newUser).id, (await newUser).name),
            message: 'Usuário criado com sucesso.'
        }
    }

    @Get()
    async findAllUsers(){
        console.log('controler')
        const allUsersList: FindAllUsersDTO[] = await this.userService.findAllUsers();
        return allUsersList
    }
}
