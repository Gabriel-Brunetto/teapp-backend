import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(Users) private repo: Repository<Users>){}

    async listUsers(){
        return this.repo.find()
    }

    async createUser(user){
        const userData = this.repo.create(user)
        return this.repo.save(userData)
    }

}