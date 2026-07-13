import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class SignInDTO {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    pass: string;
}