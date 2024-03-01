import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserEntity } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FindUserDTO } from "./dto/find-user.dto";
import { v4 as uuid } from "uuid";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const newUser = new UserEntity();
    newUser.id = uuid();
    newUser.name = createUserDTO.name;
    newUser.email = createUserDTO.email;
    newUser.password = createUserDTO.password;
    newUser.createdAt = new Date();

    await this.userRepository.save(newUser);

    return newUser;
  }

  async findAllUsers() {
    const users = await this.userRepository.find();
    const usersList = users.map(
      (user) => new FindUserDTO(user.id, user.name),
    );
    return usersList;
  }

  async updateUser(id: string, updatedData: UpdateUserDTO){
    await this.userRepository.update(id, updatedData)
  }

  async deleteUser(id: string){
    await this.userRepository.delete(id)
  }
}
