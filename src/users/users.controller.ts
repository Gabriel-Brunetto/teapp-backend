import { Controller, Get, Post, Body} from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { CreateUserDTO } from "./dto/user.dto";

@Controller('/users')
export class UserController{

    constructor(private userRepository : UserRepository){}

    @Post()
    async createUser(@Body() userData : CreateUserDTO){
        this.userRepository.createUser(userData);
        return {message: 'User create sucessful'}
    }

    @Get()
    async listUser(){
        return this.userRepository.listUser();
    }
}