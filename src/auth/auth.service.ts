import {Injectable,UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/users/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
    constructor(
        private userService: UserService,
        private JwtService: JwtService
    ){}

    async signIn(email: string, pass: string): Promise<{acess_token:string}> {

        const user = await this.userService.findUserByEmail(email);
        
        if (!user || user.password !== pass) {
            throw new UnauthorizedException();
        }
        
        const payload = {id: user.id, email: user.email}
        return{
            acess_token: await this.JwtService.signAsync(payload),
        }
    }
}