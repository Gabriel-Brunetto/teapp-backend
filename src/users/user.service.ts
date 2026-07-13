import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/user.dto";

@Injectable()
export class UserService{
    
    constructor(@InjectRepository(Users) private repo: Repository<Users>){}

    async listUsers(){
        return this.repo.find()
    }

    async createUser(user: CreateUserDTO){
        const userData = this.repo.create(user)
        return this.repo.save(userData)
    }

    async deleteUser(id: string){
        return this.repo.delete(id)
    }

    async listUserById(id: string){
        return this.repo.findOne({where: {id}})
    }

    async findUserByEmail(email: string){
        return this.repo.findOne({where: {email}})
    }
}