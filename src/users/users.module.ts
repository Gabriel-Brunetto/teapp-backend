// src/users/users.module.ts
import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService], // <-- adiciona essa linha
})
export class UserModule {}