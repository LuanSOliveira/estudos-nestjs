import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllUsersDTO } from './dto/find-all-users.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity>{
        const newUser = new UserEntity()
        newUser.id = uuid()
        newUser.name = createUserDTO.name
        newUser.email = createUserDTO.email
        newUser.password = createUserDTO.password
        newUser.createdAt = new Date()
        
        await this.userRepository.save(newUser)

        return newUser
    }

    async findAllUsers(){
        console.log('service')
        const users = await this.userRepository.find();
        console.log('service 2')
        const usersList = users.map(
            user => new FindAllUsersDTO(user.id, user.name)
        )
        return usersList
    }
}
