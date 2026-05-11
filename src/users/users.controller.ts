import { Controller, Get, Post, Body} from "@nestjs/common";
import { CreateUserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController{

    constructor(private service : UserService){}

    @Get()
    async listUser(){
        return this.service.listUsers();
    }

    @Post()
    async createUser(@Body() userData : CreateUserDTO){
        const user = this.service.createUser(userData);
        return user
    }

    
}