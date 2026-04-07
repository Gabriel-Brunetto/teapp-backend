import { Controller, Get, Post, Body} from "@nestjs/common";
import { UserRepository } from "./users.repository";

@Controller('/users')
export class UserController{

    constructor(private userRepository : UserRepository){}

    @Get()
    async listUser(){
        return this.userRepository.listUser();
    }

    @Post()
    async createUser(@Body() userData){
        this.userRepository.createUser(userData);
    }
}