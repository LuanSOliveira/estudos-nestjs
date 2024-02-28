import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { FindUserDTO } from "./dto/find-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUser: CreateUserDTO): Promise<{
        user: FindUserDTO;
        message: string;
    }>;
    findAllUsers(): Promise<FindUserDTO[]>;
    updateUser(id: string, updatedData: UpdateUserDTO): Promise<{
        user: FindUserDTO;
        message: string;
    }>;
    deleteUser(id: string): Promise<string>;
}
