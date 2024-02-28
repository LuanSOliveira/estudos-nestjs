import { CreateUserDTO } from "./dto/create-user.dto";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { FindUserDTO } from "./dto/find-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDTO: CreateUserDTO): Promise<UserEntity>;
    findAllUsers(): Promise<FindUserDTO[]>;
    updateUser(id: string, updatedData: UpdateUserDTO): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
