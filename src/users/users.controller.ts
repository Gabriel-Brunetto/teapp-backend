import { Controller, Get, Post, Delete, Patch, Body, Param, ParseUUIDPipe} from "@nestjs/common";
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
        return this.service.createUser(userData);
    }

    //O : antes do nome avisa o Nest: "isso aqui não é texto fixo, é uma variável"
    @Delete(':id')
    async deleteUser(@Param('id', ParseUUIDPipe) id:string){
        await this.service.deleteUser(id)
        return {message: "Usuario " + id + " Deletado com sucesso" }
    }

}