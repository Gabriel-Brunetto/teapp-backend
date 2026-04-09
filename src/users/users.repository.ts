import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository{
    private users: any[] = [];

    async createUser(user){
        this.users.push(user)
    }

    async listUser(){
        return this.users;
    }
}