import { Controller, HttpCode, HttpStatus, Post, Body} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "./dto/signIn.dto";
import { sign } from "crypto";

@Controller('/auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signIn: SignInDTO){
        return this.authService.signIn(signIn.email, signIn.pass)
    }
} 
