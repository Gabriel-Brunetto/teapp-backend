import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDTO{

    @IsNotEmpty({message: 'The name do not be empty'})
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6, {message: 'The minimun length is 6 caracters '})
    password: string;

}
