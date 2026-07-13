import { Inject, Injectable,UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/users/user.service";

@Injectable()
export class AuthService{
    constructor(private readonly userService: UserService){}

    async signIn(email: string, pass: string) {
        const user = await this.userService.findUserByEmail(email);
        
        if (!user || user.password !== pass) {
            throw new UnauthorizedException();
        }
        
        return {status: "Logado", userId: user.id}
    }
}